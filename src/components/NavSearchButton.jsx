import { createContext, useState } from "react";
import "../index.css";
import { Search } from "./Search";

export const DisplayValue = createContext();

export default function NavSearchButton() {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };

  return (
    <DisplayValue.Provider value={{ toggle, state }}>
      <div className="search-box fs-4 text-light" onClick={toggle}>
        <i className="bi bi-search" />
      </div>
      {<Search onHide={() => setState(false)} />}
    </DisplayValue.Provider>
  );
}
