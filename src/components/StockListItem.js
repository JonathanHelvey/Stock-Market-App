import React from "react";
import "../components/StockList.css";

const StockListItem = (stock, props) => {
  return (
    <li className="stockList">
      <div>
        <span>Stock: </span>
        {stock.symbol}
      </div>
      <div>
        <span>Price: </span>${parseInt(stock.price).toFixed(2)}
      </div>
      <div>
        <span>Vol: </span>
        {stock.volume}
      </div>
      <div>
        <span>Time: </span>
        {stock.timestamp}
      </div>
    </li>
  );
};
export default StockListItem;
