import React from "react";
import "../components/SearchBar.css";

const SearchBar = props => {
  return (
    <div className="stock-form">
      <form onSubmit={props.getStocks}>
        <input
          className="search-bar"
          type="text"
          name="stock"
          placeholder="MSFT"
        />
        <button className="button">Get Stock Quote</button>
      </form>
    </div>
  );
};

export default SearchBar;
