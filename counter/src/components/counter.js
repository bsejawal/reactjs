import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions';

class Counter extends Component {
      render() {
            return (
                  <div>
                        <h1>{this.props.count}</h1>
                        <p>
                              <button onClick={() => this.props.incrementCount()}>+</button>
                              <button onClick={() => this.props.decrementCount()}>-</button>
                        </p>
                  </div>
            )
      }
}
const mapStateToProps = (state) => {
      return {
            count: state.count
      }
}

const mapDispatchToProps = () => {
      return {
            incrementCount,
            decrementCount
      }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter);