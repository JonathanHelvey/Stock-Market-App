import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import API_KEY from "./secrets";
import _ from "lodash";
import { thisExpression } from "@babel/types";
import StockDisplay from "./components/StocksDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      term: null,
      symbol: "",
      error: undefined
    };
  }

  getStocks = async event => {
    event.preventDefault();
    const stock = event.target.stock.value;
    const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${stock}&apikey=${API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          stocks: _.flattenDeep(
            Array.from(data["Stock Quotes"]).map(stock => [
              {
                symbol: stock[`1. symbol`],
                price: stock["2. price"],
                volume: stock["3. volume"],
                timestamp: stock["4. timestamp"]
              }
            ])
          ),
          error: ""
        });
      })
      .catch(console.log);
  };

  render(props) {
    console.log(`STATE`, this.state.stocks);
    let stocks = this.state.stocks[0];

    return (
      <div>
        <header>
          <h1>Stock Market App!</h1>

          <SearchBar getStocks={this.getStocks} />
          <StockDisplay stockItems={this.state.stocks} />
          {/* <div>{this.state.stocks}</div> */}
        </header>
      </div>
    );
  }
}

export default App;
