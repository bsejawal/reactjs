import React, { Component } from 'react';
import { connect } from 'react-redux';

class Total extends Component {
      render() {
            const total = this.props.counters.reduce((acc, counter) => acc + counter.value, 0)
            return (
                  <h1>Total : {total} </h1>
            )
      }
}
const mapStateToProps = (state) => {
      return {
            counters: state.counters
      }
}
export default connect(mapStateToProps)(Total);