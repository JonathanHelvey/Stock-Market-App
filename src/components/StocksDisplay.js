import React from "react";

const StockDisplay = (stock, props) => {
  console.log(`PROPS`, stock);
  return (
    <div>
      <div>Symbol:{stock.symbol} </div>
      <div>Price:{stock.price} </div>
      <div>Volume:{stock.volume} </div>
      {/* <span>TimeStamp:{props.timeStamp} </span> */}
    </div>
  );
};

export default StockDisplay;
