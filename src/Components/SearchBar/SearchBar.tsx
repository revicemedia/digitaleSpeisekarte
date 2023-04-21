import React, { useState } from "react";
import "./SearchBar.scss";
import { config } from "../../Configs/config";
import SearchIcon from "../../images/search.svg";

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const baseClass = "SearchBar";

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (inputValue !== "") {
      console.log(inputValue);
    }
  };

  return (
    <form className={baseClass} onSubmit={handleSearch}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder={config.searchPlaceholder}
      />
      <button type="submit" disabled={!inputValue ? true : false}>
        <img
          className={baseClass + "__searchIcon"}
          src={SearchIcon}
          alt="Icon für die Suchmaschine"
        />
      </button>
    </form>
  );
};

export default SearchBar;
