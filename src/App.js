import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import API_KEY from "./secrets";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      symbol: null
    };
  }

  componentDidMount = async event => {
    // event.preventDefault();
    const symbol = this.state.symbol;
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ stocks: data });
      })
      .catch(console.log);
  };

  render(props) {
    console.log(this.state.stocks);

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
          {/* <p>{stock}</p> */}
        </header>
      </div>
    );
  }
}

export default App;
