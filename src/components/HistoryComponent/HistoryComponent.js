import React, { Component } from 'react';
import { compose } from 'recompose';
import { connectForecastSearch } from '../../redux/modules';
const date = require('date-and-time');
class HistoryComponent extends Component {

    constructor(props) {
        super(props); 
    }   

    viewDetails = (forecastId) => {
        console.log('Details');
        this.props.history.push(`/search-history-details/${forecastId}`)
    }

    render() {
        const { forecastSearch } = this.props;
        const { history } = forecastSearch;
        return (
            <div className="App">
                <div className="container">
                    <h1> Search history component </h1>
                    {
                        history.length === 0 ?
                            (
                                <div className="alert alert-info" role="alert">
                                    No search history yet !
                                </div>
                            )
                            :
                            (
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Search time</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            history.map(rowItem => (
                                                <tr key={rowItem.id}>
                                                    <th scope="row">{rowItem.id}</th>
                                                    <td>{rowItem.infoData.city}</td>
                                                    <td>{rowItem.infoData.country}</td>
                                                    <td> 
                                                        {date.format(new Date(rowItem.timestamp), 'DD/MM/YYYY HH:mm:ss')} 
                                                    </td>
                                                    <td>
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => {this.viewDetails(rowItem.id)}}>
                                                                View details
                                                        </button>
                                                    </td> 
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )
                    }
                </div>
            </div>
        )
    }
}

export default compose(
    connectForecastSearch()
)(HistoryComponent);