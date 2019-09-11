import React from "react";
import "../components/StockList.css";

const StockListItem = (stock, props) => {
  return (
    <li className="stockCard">
      <div className="item">
        <span>Stock: </span>
        {stock.symbol}
      </div>
      <div className="item">
        <span>Price: </span>${parseInt(stock.price).toFixed(2)}
      </div>
      <div className="item">
        <span>Vol: </span>
        {stock.volume}
      </div>
      <div className="item">
        <span>Date: </span>
        {stock.timestamp.slice(0, 10)}
      </div>
      <div className="item">
        <span>Time: </span>
        {stock.timestamp.slice(11, -1)}
      </div>
    </li>
  );
};
export default StockListItem;
