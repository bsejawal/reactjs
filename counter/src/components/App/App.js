import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from '../../reducers/'
import './App.css';
import Counters from '../counters';
import Total from '../total';
import Max from '../max';
import CreateCounter from '../createCounter';


const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <CreateCounter />
          <Counters />
          <div>
            <Total />
            <Max />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
