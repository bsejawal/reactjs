import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from '../../reducers/'
import './App.css';
import Counters from '../counters';


const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <h1>Counter App</h1>
          <Counters />
        </div>
      </Provider>
    );
  }
}

export default App;
