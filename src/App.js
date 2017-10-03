import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import CutSheet from './CutSheet';
import ThemeEditor from './containers/ThemeEditor'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="carcass-container">
          <CutSheet Title={"Beef"} theme={this.props.theme} />
        </div>
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
