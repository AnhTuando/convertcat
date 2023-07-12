import { useState, useContext, useEffect } from "react";
import { generatePath } from "react-router-dom";

import "../index.css";
import { DisplayValue } from "./NavSearchButton";
import { SearchItem } from "./SearchItem";
import data from "/data.json";

import { SearchInput } from "./SearchInput";
export function Search({ onHide }) {
  let { toggle, state } = useContext(DisplayValue);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // set #root over flow hidden
  useEffect(() => {
    const handleBodyOverflow = () => {
      const body = document.querySelector("body");
      if (state) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "visible";
      }
    };

    handleBodyOverflow();

    return () => {
      handleBodyOverflow();
    };
  }, [state]);
  const customBackground = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "blue",
  };
  // hanlde onchange input
  const hanldeOnchange = (event) => {
    setInputValue(event.target.value);
  };
  // render Items when onkeydown Button
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const filteredItems = [];

      Object.entries(data).forEach(([dataKey, dataArray]) => {
        if (dataKey === "cats") {
          const foundItems = dataArray.filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
          );

          foundItems.forEach((item) => {
            filteredItems.push({
              dataKey,
              item,
            });
          });
        } else {
          dataArray.forEach((item) => {
            if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
              filteredItems.push({
                dataKey,
                item,
              });
            }
          });
        }
      });

      setFilteredData(filteredItems);
    }
  };

  return (
    <div
      style={customBackground}
      className={`${
        state ? "" : "d-none"
      }  wrap-search-box-modal position-fixed top-0 z-3 p-2 p-lg-4 end-0 h-100 w-100 `}
    >
      <div
        className="close-search-modal fs-3 text-gr position-absolute"
        onClick={toggle}
        style={{ right: 20 }}
      >
        <i className="bi bi-x-lg" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 wrap-elements d-flex justify-content-center align-items-center w-100">
            <div
              className="search-input d-flex w-75 position-relative"
              style={{ height: 40 }}
            >
              <SearchInput
                value={inputValue}
                onChange={hanldeOnchange}
                onKeyDown={handleKeyDown}
              />
              <div
                className="clear-btn position-absolute text-gr fs-4"
                style={{ right: 10 }}
                onClick={() => {
                  setFilteredData([]);
                  setInputValue("");
                }}
              >
                <i className="bi bi-x bi-x-lg fs-5" />
                <span> Xóa</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center render-items-box">
            <div className="wrap-items-box d-flex flex-column align-items-center rounded-2 gap-3 w-75">
              {filteredData.map((obj) => {
                const { dataKey, item } = obj;
                const isCat = dataKey === "cats";
                const path = isCat
                  ? generatePath(`/cats/:id`, { id: item.id })
                  : generatePath(`/others/${dataKey}/:id`, { id: item.id });

                return (
                  <SearchItem
                    name={item.name}
                    key={item.id}
                    price={item.price}
                    path={path}
                    img={item.thumbnail}
                    onClick={() => {
                      setFilteredData([]);
                      setInputValue("");
                      onHide();
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
