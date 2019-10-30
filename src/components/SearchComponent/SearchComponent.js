import React, { Component } from 'react';
import { compose } from 'recompose';
import { connectForecastSearch } from '../../redux/modules';
import { promisify } from '../../utilities';
import ForecasTable from './../ForecastTable/ForecastTable';
import './SearchComponent.css';

const uniqid = require('uniqid');

class SearchComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      forecastFor: '',
      cityNotValid: false,
      showForecast: false,
      fetching: '',
      success: '',
      error: '',
      forecastInfo: null
    }
  }

  processApiResult = (apiJsonResponse) => {
    const apiJsonResponseList = apiJsonResponse.list;
    let forecastsForDayOne = 0;
    let dayOneDate = new Date(apiJsonResponseList[0].dt_txt).getDate();
    const arrayLength = apiJsonResponseList.length;
    for (let index = 0; index < arrayLength; index++) {
      let date = new Date(apiJsonResponseList[index].dt_txt).getDate();
      if (dayOneDate === date) {
        forecastsForDayOne += 1;
      }
      else {
        break;
      }
    }

    let maxHours = 40;
    let dayByDay = [];
    let startSlice = 0;
    let endSlice = forecastsForDayOne;
    while (endSlice <= maxHours) {
      // console.log('Start - End: (', startSlice, ', ', endSlice, ')');
      dayByDay.push(apiJsonResponseList.slice(startSlice, endSlice));
      startSlice = endSlice;
      endSlice += 8;
    }
    console.log('DbD: ', dayByDay);
    const infoData = {
      city: apiJsonResponse.city.name,
      country: apiJsonResponse.city.country,
      geoLocationLink: `https://www.google.com/maps/search/?api=1&query=${apiJsonResponse.city.coord.lat},${apiJsonResponse.city.coord.lon}`
    };

    return this.createForecastDataToDipslay(dayByDay, infoData);

  }

  createForecastDataToDipslay = (dayByDay, infoData) => {
    

    let day = 1;
    let hottestDay = {
      order: 0,
      temp: 0
    };
    let temperatures = {};
    const numberOfDays = dayByDay.length;
    for(let index = 0; index<numberOfDays; index++){
      let givenDay = dayByDay[index];
      
      let min = {
        temp: givenDay[0].main.temp_min,
        hour: givenDay[0].dt_txt
      };
      let max = {
        temp: givenDay[0].main.temp_max,
        hour: givenDay[0].dt_txt
      };

      const hours = givenDay.length;
      for(let hour=1 ; hour<hours ; hour++){
        if(givenDay[hour].main.temp_min < min.temp) {
          min = {
            temp: givenDay[hour].main.temp_min,
            hour: givenDay[hour].dt_txt
          }
        }

        if(givenDay[hour].main.temp_max > max.temp) {
          max = {
            temp: givenDay[hour].main.temp_max,
            hour: givenDay[hour].dt_txt
          }
        }
      }

      if(max.temp > hottestDay.temp) {
        hottestDay = {
          order: day,
          temp: max.temp
        }
      }

      
      temperatures['day_'+day] = {
        date: givenDay[0].dt_txt.split(' ')[0],
        min, 
        max,
        hottestDay: false
      }
      day += 1;
      
    }

    temperatures['day_'+hottestDay.order].hottestDay = true;

    const forecast = {
      id: uniqid(),
      timestamp: new Date().getTime(),
      infoData,
      temperatures
    };

    return forecast;
  }

  handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
      forecastFor: ' for ' + value,
      cityNotValid: false
    });
  };

  searchForecast = (event) => {
    event.preventDefault();
    if (!this.state.selectedCity) {
      this.setState({
        cityNotValid: true
      });
      return;
    }

    this.setState({
      fetching: 'Fetching forecast...',
      showForecast: false,
      forecastInfo: null
    });

    promisify(this.props.getForecastSearch, { city: this.state.selectedCity })
      .then(result => {
        // console.log('SUCCESS COMP: ', result);
        const forecast = this.processApiResult(result);
        // console.log('FC: ', forecast);
        promisify(this.props.storeForecastSearch, { forecast });
        this.setState({
          fetching: '',
          success: 'Successfuly fetched forecast',
          selectedCity: '',
          forecastFor: '',
          cityNotValid: false,
          showForecast: true,
          forecastInfo: forecast          
        }, () => setTimeout(() => {
          this.setState({
            success: ''
          });
        }, 2000));
      })
      .catch(error => {
        this.setState({
          fetching: '',
          error: error.message
        }, () => setTimeout(() => {
          this.setState({
            error: ''
          });
        }, 2000));
      })
  }

  render() {
    const {
      selectedCity,
      forecastFor,
      cityNotValid,
      fetching,
      success,
      error,
      forecastInfo,
      showForecast
    } = this.state;

    return (
      <div className='App'>
        <div className='container'>
          <h1> Search component </h1>
          <form onSubmit={this.searchForecast}>
            <div className="row">
              <div className='col-8 offset-2'>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedCity}
                    id="city"
                    name="selectedCity"
                    placeholder="City"
                    onChange={this.handleChange} />
                  {cityNotValid && <div className="invalid-feedback"> Please select city </div>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 offset-3">
                <button type="submit" className="btn btn-primary btn-block">Search forecast {forecastFor}</button>
              </div>
            </div>
          </form>

          <div className="m-4">
            {
              fetching &&
              <div className="alert alert-info" role="alert">
                {fetching}
              </div>
            }
            {
              success &&
              <div className="alert alert-success" role="alert">
                {success}
              </div>
            }
            {
              error &&
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            }
          </div>

          <div className="m-4">
            {
              showForecast &&              
              <ForecasTable
                forecastInfo={forecastInfo}
                historyLog={false}/>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  connectForecastSearch()
)(SearchComponent);