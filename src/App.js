import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import ThemeEditor from './containers/ThemeEditor'
import CutSheetContainer from './containers/CutSheetContainer'
import CutSheetSelectorContainer from './containers/CutSheetSelectorContainer'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CutSheetSelectorContainer/>
        <CutSheetContainer/>
        <ThemeEditor/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { theme } = state;
  return {
    theme
  }
};

export default connect(mapStateToProps)(App);
