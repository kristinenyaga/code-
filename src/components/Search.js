import React from "react";

function Search({handlesearch}) {
  

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handlesearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
