import React from "react";
import StockListItem from "./StockListItem";
import "../components/StockList.css";

const StockDisplay = props => {
  console.log(`PROPS`, props.stockItems);
  //   let symbol = props.stockItems.map(stock => stock.symbol);
  //   let price = props.stockItems.map(stock => stock.price);
  //   let volume = props.stockItems.map(stock => stock.volume);
  //   let timestamp = props.stockItems.map(stock => stock.timestamp);

  const stockItem = props.stockItems.map(stock => {
    return (
      <StockListItem
        key={stock.symbol}
        symbol={stock.symbol}
        price={stock.price}
        volume={stock.volume}
        timestamp={stock.timestamp}
      />
    );
  });

  return <div className="stockList">{stockItem}</div>;
};

export default StockDisplay;
