import React, { Component } from 'react';
import Navbar from './Navbar';
import Search from '../containers/Search';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/search" component={Search} />  
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
