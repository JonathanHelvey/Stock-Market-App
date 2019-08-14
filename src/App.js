import React, { Component } from "react";
import "./App.css";
import API_KEY from "./secrets";

const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=${API_KEY}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      symbole: ""
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
          {/* <p>{stock}</p> */}
        </header>
      </div>
    );
  }
}

export default App;
