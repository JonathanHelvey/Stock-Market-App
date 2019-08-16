import React from "react";

const StockDisplay = props => {
  console.log(`PROPS`, props.stockItems);
  let symbol = props.stockItems.map(stock => stock.symbol);
  let price = props.stockItems.map(stock => stock.price);
  let volume = props.stockItems.map(stock => stock.volume);
  let timeStamp = props.stockItems.map(stock => stock.timestamp);

  console.log(`symbol`, symbol);
  return (
    <div>
      <div>Symbol:{symbol} </div>
      <div>Price:{price} </div>
      <div>Volume:{volume} </div>
      <span>TimeStamp:{timeStamp} </span>
    </div>
  );
};

export default StockDisplay;
