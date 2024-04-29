import "./Search.css";
import { useState } from "react";

const DEFAULT_STATE = {
  SEARCH: "",
};

export default function Search() {
  const [search, setSearch] = useState(DEFAULT_STATE.SEARCH);
  return (
    <div className="input__wrapper">
      <div>
        <img src="./search.svg" alt="search" className="input__shape" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          placeholder=""
          className="input__search"
        />
      </div>
    </div>
  );
}
