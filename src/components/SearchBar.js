import React from "react";

const SearchBar = props => {
  console.log(`What is this`, props.symbol);
  return (
    <div>
      <form>
        <input />
        <button onClick={props.onClick}>Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
