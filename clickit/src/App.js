import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ConditionalRenderer from './components/ConditionalRenderer'
import CardsList from './components/CardsList';
import NavigationTabs from './components/NavigationTabs'


class App extends Component {

  

  render() {
    return (
      <div className="App">
        <CardsList />
      </div>
    );
  }
}

export default App;
