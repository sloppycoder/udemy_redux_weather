import React from 'react';
import { connect } from 'react-redux';

class Container extends React.Component { // eslint-disable-line
  render() {
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(Container);
