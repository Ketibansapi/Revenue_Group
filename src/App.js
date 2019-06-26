import React, { Component } from "react";
import Component1 from './Component1';
import { BrowserRouter as Router} from 'react-router-dom';
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
      <div className = "App">
      <Component1 />
      </div>
      </Router>
    );
  }
}

export default App;
