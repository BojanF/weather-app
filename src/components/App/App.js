import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomeContainer from './../HomeContainer/HomeContainer';
import SearchComponent from './../SearchComponent/SearchComponent';
import HistoryComponent from './../HistoryComponent/HistoryComponent';
import SearchHistoryDetails from './../SearchHistoryDetails/SearchHistoryDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/search">Search</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/history">History</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/search-history-details/:forecastId" component={SearchHistoryDetails} />
          <Route exact path="/search" component={SearchComponent} />
          <Route exact path="/history" component={HistoryComponent} />        
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
      
    )
  }
}

export default App;
