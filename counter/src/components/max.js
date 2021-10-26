import React, { Component } from 'react';
import { connect } from 'react-redux';

class Max extends Component {
      render() {
            return (
                  <h1>Max Count is : {Math.max(...this.props.counters)}</h1>
            )
      }
}
const mapStateToProps = (state) => {
      return {
            counters: state.counters
      }
}

export default connect(mapStateToProps)(Max)