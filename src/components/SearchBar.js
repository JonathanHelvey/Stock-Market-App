import React from "react";

const SearchBar = props => {
  console.log(`What is this`, props.symbol);
  return (
    <div>
      <form>
        <input />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
