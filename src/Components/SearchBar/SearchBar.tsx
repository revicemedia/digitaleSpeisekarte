import React, { useState } from "react";
import "./SearchBar.scss";
import { config } from "../../Configs/config";

function SearchBar({ handleSearchInput }: any): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const baseClass = "SearchBar";

  const handleSearch = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);

    if (inputValue) {
      handleSearchInput(inputValue);
    }
  };

  return (
    <div className={baseClass}>
      <input
        type="text"
        onChange={handleSearch}
        value={inputValue}
        placeholder={config.searchPlaceholder}
      />
    </div>
  );
}

export default SearchBar;
