import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(Counter);
