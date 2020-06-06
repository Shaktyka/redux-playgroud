import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{ counter }</h2>
      <button
        onClick={ dec }
        className="btn btn-primary btn-lg mr-2 dec">-1</button>
      <button
        onClick={ inc }
        className="btn btn-secondary btn-lg mr-2 inc">+1</button>
      <button
        onClick={ rnd }
        className="btn btn-primary btn-lg rnd">+rnd</button>
    </div>
  );
};

// Она должна вернуть те значения, которые вернёт каунтер
const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

export default connect(mapStateToProps, actions)(Counter);
