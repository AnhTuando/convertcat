import { event } from "jquery";
import "../cats.css";
import { PriceFilterItem } from "./PriceFilterItem";
import { FilterItem } from "./filterItem";
import { useState } from "react";
export default function CatsContentFilter({ setCatData, setIsUpdate }) {
  const [showNavFilter, setShowNavFilter] = useState(false);
  // value pc filter
  const [colorValue, setColorValue] = useState("");
  const [furrStyleValue, setFurrStyleValue] = useState("");
  const [furrLossValue, setFurrLossValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [priceValue, setPriceValue] = useState(1);
  // value mb filter
  const [colorValueMb, setColorValueMb] = useState("");
  const [furrStyleValueMb, setFurrStyleValueMb] = useState("");
  const [furrLossValueMb, setFurrLossValueMb] = useState("");
  const [sizeValueMb, setSizeValueMb] = useState("");
  const [priceValueMb, setPriceValueMb] = useState(1);
  // name

  // Filter Btn click
  const handleClickBtnFilterPc = () => {
    let newValuesObj = {};
    newValuesObj = {
      color: colorValue || "",
      furr: furrStyleValue || "",
      furrLose: furrLossValue || "",
      size: sizeValue || "",
      price: `${priceValue + ".000.000"}` || "",
    };
    setCatData(newValuesObj);
    setIsUpdate(true);
  };
  const handleClickBtnFilterMb = () => {
    let newValuesObj = {};
    newValuesObj = {
      color: colorValueMb || "",
      furr: furrStyleValueMb || "",
      furrLose: furrLossValueMb || "",
      size: sizeValueMb,
      price: `${priceValue + "000.000"}` || "",
    };
    setCatData(newValuesObj);
    setIsUpdate(true);
  };
  // show/ off navfilter
  const handleShowNavFilter = () => {
    setShowNavFilter(!showNavFilter);
  };
  //  input filter onchange
  const handleChangeInputPC = (event, setter) => {
    setter(event.target.value);
  };
  //  input filter onchange
  const handleChangeInputMb = (event, setterValue, setterName) => {
    setterValue(event.target.value);
  };
  return (
    <>
      <div className="d-none d-lg-block filter-pc col-3 my-3 p-3 border border-success-subtle filter-scroll bg-light">
        {/*PC FILTER */}
        <div className="filter-pc-box">
          {/*PC color filter */}
          <div className="row g-2 mb-3">
            <div className="title fs-5 fw-medium">Chọn Màu Sắc</div>
            <div className="color">
              <div className="color-choose d-flex gap-2">
                <FilterItem
                  label={"Nhiều màu"}
                  value={"Nhiều màu"}
                  name={"color"}
                  className={"single-color"}
                  checked={colorValue === "Nhiều màu"}
                  onChange={(event) =>
                    handleChangeInputPC(event, setColorValue)
                  }
                />
                <FilterItem
                  label={"Đơn sắc"}
                  value={"Đơn sắc"}
                  name={"color"}
                  className={"single-color"}
                  checked={colorValue === "Đơn sắc"}
                  onChange={(event) =>
                    handleChangeInputPC(event, setColorValue)
                  }
                />
              </div>
            </div>
          </div>
          {/*end color filter */}
          {/* size filter */}
          <div className="row g-2 mb-3">
            <div className="title fs-5 fw-medium">Chọn Kích Cỡ</div>
            <div className="size">
              <div className="size-choose d-flex gap-2">
                <FilterItem
                  label={"Nhỏ"}
                  value={"Nhỏ"}
                  name={"size"}
                  className={"small"}
                  checked={sizeValue === "Nhỏ"}
                  onChange={(event) => handleChangeInputPC(event, setSizeValue)}
                />
                <FilterItem
                  label={"Trung bình"}
                  value={"Trung bình"}
                  name={"size"}
                  className={"medium"}
                  checked={sizeValue === "Trung bình"}
                  onChange={(event) => handleChangeInputPC(event, setSizeValue)}
                />
                <FilterItem
                  label={"To"}
                  value={"To"}
                  name={"size"}
                  className={"big"}
                  checked={sizeValue === "To"}
                  onChange={(event) => handleChangeInputPC(event, setSizeValue)}
                />
              </div>
            </div>
          </div>
          {/*end size filter */}
          {/* fur style filter */}
          <div className="row g-2 mb-3">
            <div className="title fs-5 fw-medium">Chọn Kiểu Lông</div>
            <div className="fur-style">
              <div className="fur-style-choose d-flex gap-2">
                <FilterItem
                  label={"Ngắn"}
                  value={"Ngắn"}
                  name={"furr-style"}
                  className={"short"}
                  checked={furrStyleValue === "Ngắn"}
                  onChange={(event) =>
                    handleChangeInputPC(event, setFurrStyleValue)
                  }
                />
                <FilterItem
                  label={"Dài"}
                  value={"Dài"}
                  name={"furr-style"}
                  className={"long"}
                  checked={furrStyleValue === "Dài"}
                  onChange={(event) =>
                    handleChangeInputPC(event, setFurrStyleValue)
                  }
                />
                <FilterItem
                  label={"Ít"}
                  value={"Ít"}
                  name={"furr-style"}
                  className={"less"}
                  checked={furrStyleValue === "Ít"}
                  onChange={(event) =>
                    handleChangeInputPC(event, setFurrStyleValue)
                  }
                />
              </div>
            </div>
          </div>
          {/*end fur style filter */}
          {/* fur loss filter */}
          <div className="row g-2 mb-3">
            <div className="title fs-5 fw-medium">Rụng Lông</div>
            <div className="fur-loss">
              <div className=" d-flex fur-loss-choose gap-1">
                <FilterItem
                  label={"Nhiều"}
                  value={"Nhiều"}
                  name={"furr-loss"}
                  className={"hairy"}
                  checked={furrLossValue === "Nhiều"}
                  onChange={(event) =>
                    handleChangeInputPC(event, setFurrLossValue)
                  }
                />

                <FilterItem
                  label={"Ít"}
                  value={"Ít"}
                  name={"furr-loss"}
                  className={"less"}
                  checked={furrLossValue === "Ít"}
                  onChange={(event) =>
                    handleChangeInputPC(event, setFurrLossValue)
                  }
                />
              </div>
            </div>
          </div>
          {/*end fur loss filter */}
          {/* price filter */}

          <PriceFilterItem
            min={1}
            value={priceValue}
            max={10}
            showPrice={priceValue}
            onChange={(event) => handleChangeInputPC(event, setPriceValue)}
          />
          {/* Filter Btn */}
          <div className="wrap-btn d-flex justify-content-center">
            <div
              className="filter-btn-price fw-bold fs-5 filter-bg d-inline-block rounded-2 text-light py-1 px-3"
              style={{ width: "fit-content" }}
              onClick={handleClickBtnFilterPc}
            >
              Lọc
            </div>
          </div>
          {/*End price filter */}
        </div>
      </div>
      {/*MOBILE FILTER */}
      <section className="content my-3 d-lg-none">
        <div className="container">
          {/* wrap product and filter */}
          <div className="row wrap-product-filter d-lg-none">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="products-info d-flex gap-2">
                  <span className="pr-description text-gr fw-bold fs-3">
                    Sản Phẩm:
                  </span>
                  <span className="pr-value fs-3 fw-bold">Mèo</span>
                </div>
                <div className="show-filter-mb" onClick={handleShowNavFilter}>
                  <div className="filter-btn bg-gr filter-bg text-light fw-bold fs-3 py-2 px-4 rounded-2">
                    Lọc
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end wrap product and filter */}
          {/*Mobile filter box */}
          <div
            className={`row filter-mb ${
              showNavFilter ? "" : "d-none"
            }  d-lg-none`}
          >
            <div className="col-12">
              <div className="filter-box px-3 my-3 green-soft-bg z-1 text-light z-2">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="wrap-close-btn d-flex"
                      onClick={() => setShowNavFilter(false)}
                    >
                      <div
                        className="filter-mb-close-btn p-2 fs-3 ms-auto"
                        style={{ width: "fit-content" }}
                      >
                        <i className="bi bi-x-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* color filter */}
                <div className="row g-2 mb-4">
                  <div className="title fs-4 fw-bold">Chọn Màu Sắc</div>
                  <div className="color">
                    <div className="color-choose d-flex gap-2 fs-5">
                      <FilterItem
                        label={"Nhiều màu"}
                        value={"Nhiều màu"}
                        name={"color-mb"}
                        className={"single-color"}
                        checked={colorValueMb === "Nhiều màu"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setColorValueMb)
                        }
                      />
                      <FilterItem
                        label={"Đơn sắc"}
                        value={"Đơn sắc"}
                        name={"color-mb"}
                        className={"single-color"}
                        checked={colorValueMb === "Đơn sắc"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setColorValueMb)
                        }
                      />
                    </div>
                  </div>
                </div>
                {/*end color filter */}
                {/* fur filter */}
                <div className="row g-2 mb-4">
                  <div className="title fs-4 fw-bold">Chọn Kiểu Lông</div>
                  <div className="fur">
                    <div className="fur-choose d-flex gap-2 fs-5">
                      <FilterItem
                        label={"Ngắn"}
                        value={"Ngắn"}
                        name={"furr-style-mb"}
                        className={"short"}
                        checked={furrStyleValueMb === "Ngắn"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setFurrStyleValueMb)
                        }
                      />
                      <FilterItem
                        label={"Dài"}
                        value={"Dài"}
                        name={"furr-style-mb"}
                        className={"long"}
                        checked={furrStyleValueMb === "Dài"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setFurrStyleValueMb)
                        }
                      />
                      <FilterItem
                        label={"Ít"}
                        value={"Ít"}
                        name={"furr-style-mb"}
                        className={"less"}
                        checked={furrStyleValueMb === "Ít"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setFurrStyleValueMb)
                        }
                      />
                    </div>
                  </div>
                </div>
                {/*end fur filter */}
                {/* size filter */}
                <div className="row g-2 mb-4">
                  <div className="title fs-4 fw-bold">Chọn Kích Cỡ</div>
                  <div className="size">
                    <div className="size-choose d-flex gap-2 fs-5">
                      <FilterItem
                        label={"Nhỏ"}
                        value={"Nhỏ"}
                        name={"size"}
                        className={"small"}
                        checked={sizeValueMb === "Nhỏ"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setSizeValueMb)
                        }
                      />
                      <FilterItem
                        label={"Trung bình"}
                        value={"Trung bình"}
                        name={"size-b"}
                        className={"medium"}
                        checked={sizeValueMb === "Trung bình"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setSizeValueMb)
                        }
                      />
                      <FilterItem
                        label={"To"}
                        value={"To"}
                        name={"size-mb"}
                        className={"big"}
                        checked={sizeValueMb === "To"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setSizeValueMb)
                        }
                      />
                    </div>
                  </div>
                </div>
                {/*end size filter */}
                {/* fur loss filter */}
                <div className="row g-2 mb-4">
                  <div className="title fs-4 fw-bold">Rụng Lông</div>
                  <div className="fur-loss">
                    <div className="fur-loss-choose d-flex gap-2 fs-5">
                      <FilterItem
                        label={"Nhiều"}
                        value={"Nhiều"}
                        name={"furr-loss-mb"}
                        className={"hairy"}
                        checked={furrLossValueMb === "Nhiều"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setFurrLossValueMb)
                        }
                      />

                      <FilterItem
                        label={"Ít"}
                        value={"Ít"}
                        name={"furr-loss-mb"}
                        className={"less"}
                        checked={furrLossValueMb === "Ít"}
                        onChange={(event) =>
                          handleChangeInputMb(event, setFurrLossValueMb)
                        }
                      />
                    </div>
                  </div>
                </div>
                {/*end fur loss  filter */}
                {/* price filter */}
                <PriceFilterItem
                  min={1}
                  value={priceValueMb}
                  max={10}
                  showPrice={priceValueMb}
                  onChange={(event) =>
                    handleChangeInputMb(event, setPriceValueMb)
                  }
                />

                {/* price filter */}
                <div className="wrap-btn d-flex justify-content-center">
                  <div
                    className="filter-btn-price fw-bold fs-5 filter-bg d-inline-block rounded-2 text-light py-1 px-3"
                    style={{ width: "fit-content" }}
                    onClick={handleClickBtnFilterMb}
                  >
                    Lọc giá
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Mobile filter box */}
        </div>
      </section>
    </>
  );
}
