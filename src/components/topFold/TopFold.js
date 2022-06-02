import React from "react";
import { Link } from "react-router-dom";
import "./topfold.css";

export const TopFold = () => {
  const [query, setQuery] = React.useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  console.log("🚀 ~ file: TopFold.js ~ line 7 ~ TopFold ~ query", query);
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fi fi-rr-search"></i>
            <input
              placeholder="search for expenses..."
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
          <div className="add-button">
            <i className="fi fi-rr-add"></i>
            <label>Add</label>
          </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
            <Link to="/">
          <div className="add-topfold-button">
            <i className="fi fi-rr-angle-left"></i>
            <label>Back</label>
          </div>
            </Link>
            <Link to="/">
          <div className="add-topfold-button">
            <i className="fi fi-rr-cross-circle"></i>
            <label>cancel</label>
          </div>
          </Link>
        </div>
      )}
    </div>
  );
};
