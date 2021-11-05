import React from 'react';
import Header from './containers/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import FullPageLoader from './containers/FullPageLoader';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" exact component={ProductDetail} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
        <FullPageLoader />
      </div>
    );
  }
}

export default App;
