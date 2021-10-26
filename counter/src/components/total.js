import React, { Component } from 'react';
import { connect } from 'react-redux';

class Total extends Component {
      render() {
            return (
                  <h1>Total : {this.props.counters.reduce((acc, value) => acc + value)} </h1>
            )
      }
}
const mapStateToProps = (state) => {
      return {
            counters: state.counters
      }
}
export default connect(mapStateToProps)(Total);