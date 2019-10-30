import { connect } from 'react-redux';
import { citiesActionCreators } from './actions';

function mapStateToProps({ cities }) {
  return {
    cities,
  };
}

const mapDispatchToProps = citiesActionCreators;

export function connectCities(configMapStateToProps = mapStateToProps) {
  return connect(
    configMapStateToProps,
    mapDispatchToProps,
  );
}
