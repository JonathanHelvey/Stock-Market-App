import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API_KEY from "./secrets";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <p>Hellow World!</p>
        </header>
      </div>
    );
  }
}

export default App;
