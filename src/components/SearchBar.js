import React from "react";

const SearchBar = props => {
  return (
    <div>
      <form onSubmit={props.getStocks}>
        <input type="text" name="stock" placeholder="MSFT" />
        <button>Get Stock Quote</button>
      </form>
    </div>
  );
};

export default SearchBar;
