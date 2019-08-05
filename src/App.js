import React, { Component } from "react";
import "./App.css";
import API_KEY from "./secrets";

const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=${API_KEY}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: []
    };
  }

  componentDidMount = async event => {
    // event.preventDefault();
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ stocks: data });
      })
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <header>
          <h1>Stock Market App!</h1>
          <p>Hellow World!</p>
        </header>
      </div>
    );
  }
}

export default App;
