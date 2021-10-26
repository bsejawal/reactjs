import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions';
import Counter from './counter';

class Counters extends Component {
      renderCounters() {
            return this.props.counters.map((counter, index) => {
                  return (
                        <Counter
                              key={index}
                              index={index}
                              value={counter.value}
                              name={counter.name}
                              incrementCount={this.props.incrementCount}
                              decrementCount={this.props.decrementCount}
                        />
                  )
            })
      }

      render() {
            return (
                  <div>
                        {this.renderCounters()}
                  </div>
            )
      }
}
const mapStateToProps = (state) => {
      return {
            counters: state.counters
      }
}

const mapDispatchToProps = () => {
      return {
            incrementCount,
            decrementCount
      }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counters);