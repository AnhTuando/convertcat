import { createContext, useState } from "react";
import "../index.css";

export const DisplayValue = createContext();
export default function NavSearchButton() {
  const [state, setState] = useState(true);
  const isClick = () => {
    setState(!state);
  };
  return (
    <>
      <div className="search-box fs-4 text-light" onClick={isClick}>
        <i className="bi bi-search" />
      </div>
      <div
        className={`wrap-search-box-modal 
      ${state ? "d-none" : ""}
         position-fixed top-0 z-3 p-2 p-lg-4 end-0 h-100 w-100 bg-light`}
      >
        <div
          className="close-search-modal fs-3 text-gr position-absolute"
          style={{ right: 20 }}
          onClick={isClick}
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
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="search-input p-2 w-100 fs-4 fw-medium border-bottom border-success bg-transparent"
                  style={{ border: "none" }}
                />
                <div
                  className="clear-btn position-absolute text-gr fs-4"
                  style={{ right: 10 }}
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
                <div className="item d-none">
                  <a href="./cat-product.html" className="text-decoration-none">
                    <div className="row d-flex justify-content-center py-2">
                      <div className="col-6 img-wrap" style={{ height: 120 }}>
                        <img
                          src="./img/product-item.png"
                          className="img-fluid h-100"
                          alt=""
                        />
                      </div>
                      <div className="col-6 wrap-info d-flex flex-column justify-content-center gap-2">
                        <div className="pr-name fs-5 fw-bold text-gr">
                          Mèo Anh Lông Ngắn
                        </div>
                        <div className="pr-price fs-5 text-soft-bl">
                          <span className="price-value ff-roboto">
                            3.000.000
                          </span>
                          <span className="ff-roboto">VND</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
