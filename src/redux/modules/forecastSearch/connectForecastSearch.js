import { connect } from 'react-redux';
import { forecastSearchActionCreators } from './actions';

function mapStateToProps({ forecastSearch }) {
  return {
    forecastSearch,
  };
}

const mapDispatchToProps = forecastSearchActionCreators;

export function connectForecastSearch(configMapStateToProps = mapStateToProps) {
  return connect(
    configMapStateToProps,
    mapDispatchToProps,
  );
}