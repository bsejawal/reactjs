import React, { Component } from 'react';
import { connect } from 'react-redux';

class Max extends Component {

      render() {
            const values = this.props.counters.map((counter) => counter.value);
            return (
                  <h1>Max Count is : {Math.max(...values)}</h1>
            )
      }
}
const mapStateToProps = (state) => {
      return {
            counters: state.counters
      }
}

export default connect(mapStateToProps)(Max)