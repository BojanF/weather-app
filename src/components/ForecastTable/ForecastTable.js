import React, { Component } from 'react';
import { compose } from 'recompose';
import { connectForecastSearch } from '../../redux/modules';
const date = require('date-and-time');


class ForecastTable extends Component {

    constructor(props) {
        super(props);
    }

    getWeekdayName = (dateString) => {
        const weekday = new Date(dateString).getDay();
        switch (weekday) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return 'NaN'
        }
    }

    printHour = (dateInput) => {
        return ' - ' + date.format(new Date(dateInput), 'HH:mm');
    }

    hottestDay = (flag) => {
        if(flag){
            return <span className="badge badge-warning">Hottest</span>;
        }
    }

    render() {
        const { forecastInfo, historyLog } = this.props;
        const { temperatures } = forecastInfo;
        return (
            <div className="App">
                <div className="container">                   
                    <h3> Five day forecast </h3>
                    <h3>
                        {forecastInfo.infoData.city},
                        <small className="text-muted">{forecastInfo.infoData.country}</small>
                    </h3>
                    {
                        historyLog &&
                        <p className="lead"> 
                            Search was made on {date.format(new Date(forecastInfo.timestamp), 'DD/MM/YYYY HH:mm:ss')}
                        </p>
                    }
                    <a href={forecastInfo.infoData.geoLocationLink}> Geo location </a>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">{this.getWeekdayName(temperatures['day_1'].date)}</th>
                                <th scope="col">{this.getWeekdayName(temperatures['day_2'].date)}</th>
                                <th scope="col">{this.getWeekdayName(temperatures['day_3'].date)}</th>
                                <th scope="col">{this.getWeekdayName(temperatures['day_4'].date)}</th>
                                <th scope="col">{this.getWeekdayName(temperatures['day_5'].date)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="date">
                                <th scope="row">Date</th>
                                <td>{date.format(new Date(temperatures['day_1'].date), 'DD/MM/YYYY')} </td>
                                <td>{date.format(new Date(temperatures['day_2'].date), 'DD/MM/YYYY')} </td>
                                <td>{date.format(new Date(temperatures['day_3'].date), 'DD/MM/YYYY')} </td>
                                <td>{date.format(new Date(temperatures['day_4'].date), 'DD/MM/YYYY')} </td>
                                <td>{date.format(new Date(temperatures['day_5'].date), 'DD/MM/YYYY')} </td>
                            </tr>
                            <tr key="min">
                                <th scope="row">MIN</th>
                                <td>
                                    {temperatures['day_1'].min.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_1'].min.hour)}
                                </td>
                                <td>
                                    {temperatures['day_2'].min.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_2'].min.hour)}
                                </td>
                                <td>
                                    {temperatures['day_3'].min.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_3'].min.hour)}
                                </td>
                                <td>
                                    {temperatures['day_4'].min.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_4'].min.hour)}
                                </td>
                                <td>
                                    {temperatures['day_5'].min.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_5'].min.hour)}
                                </td>
                            </tr>
                            <tr key="max">
                                <th scope="row">MAX</th>
                                <td>
                                    {temperatures['day_1'].max.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_1'].max.hour)}
                                </td>
                                <td>
                                    {temperatures['day_2'].max.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_2'].max.hour)}
                                </td>
                                <td>
                                    {temperatures['day_3'].max.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_3'].max.hour)}
                                </td>
                                <td>
                                    {temperatures['day_4'].max.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_4'].max.hour)}
                                </td>
                                <td>
                                    {temperatures['day_5'].max.temp} <span>&#8451;</span> 
                                    {this.printHour(temperatures['day_5'].max.hour)}
                                </td>
                            </tr>
                            <tr key="hot">
                                <th> </th>
                                <td> {this.hottestDay(temperatures['day_1'].hottestDay)} </td>
                                <td> {this.hottestDay(temperatures['day_2'].hottestDay)} </td>
                                <td> {this.hottestDay(temperatures['day_3'].hottestDay)} </td>
                                <td> {this.hottestDay(temperatures['day_4'].hottestDay)} </td>
                                <td> {this.hottestDay(temperatures['day_5'].hottestDay)} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default compose(
    connectForecastSearch()
)(ForecastTable);