import React, { Component } from 'react';
import './App.css';
import CutSheet from './CutSheet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="carcass-container">
          <CutSheet Title={"Beef"}/>
        </div>
      </div>
    );
  }
}

export default App;
