import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import API_KEY from "./secrets";
import _ from "lodash";
import { thisExpression } from "@babel/types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      term: null,
      symbol: ""
    };
  }

  componentDidMount = async event => {
    // event.preventDefault();
    const term = this.state.value;
    const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ stocks: data });
      })
      .catch(console.log);
  };

  render(props) {
    console.log(`STATE`, this.state.stocks);
    // let stock = this.state.stocks.bestMatches.map(stock => {
    //   return <h1>{stock}</h1>;
    // });
    //console.log(stock);
    return (
      <div>
        <header>
          <h1>Stock Market App!</h1>
          <p>Hellow World!</p>
          <button>Stocks!</button>
          <SearchBar />
          <div>{this.state.stocks.symbol}</div>
        </header>
      </div>
    );
  }
}

export default App;
