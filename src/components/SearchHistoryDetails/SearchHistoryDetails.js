import React, { Component } from 'react';
import { compose } from 'recompose';
import { connectForecastSearch } from '../../redux/modules';
import { promisify } from '../../utilities';
import ForecasTable from './../ForecastTable/ForecastTable';

class SearchHistoryDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: '',
            success: '',
            error: '',
            showComponent: false,
            forecastInfo: {}
        }
    }

    componentDidMount = () => {

        const forecastId = this.props.match.params.forecastId;
        this.setState({
            fetching: 'Fetching data...'
        });

        promisify(this.props.getSearchHistoryEntry, {forecastId})
            .then(result => {
                const searchHistoryEntry = this.props.forecastSearch.searchHistoryEntry;
                if(searchHistoryEntry.id) {
                    this.setState({
                        forecastInfo: searchHistoryEntry,
                        showComponent: true,
                        fetching: ''
                    });
                } else {
                    this.setState({
                        fetching: '',
                        error: `History log with id ${forecastId} does not exist!`
                    });
                }
            })
            .catch(error => {
                this.setState({
                    fetching: '',
                    error: 'Something happend! Try again later.'
                });
            })
    }

    render() {
        const {
            fetching,
            success,
            error,
            showComponent,
            forecastInfo
        } = this.state;

        return (
            <div>
                <div className="App m-4">
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
                    {
                        showComponent &&
                        <ForecasTable
                            forecastInfo={forecastInfo}
                            historyLog={true}/>
                    }
                </div>
            </div>
        )
    }
}

export default compose(
    connectForecastSearch()
)(SearchHistoryDetails);