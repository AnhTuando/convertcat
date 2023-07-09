import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function NavMobileBtn() {
  const [state, setState] = useState(true);
  const isClick = () => {
    setState(!state);
  };
  return (
    <>
      <div
        className="col-3 d-flex justify-content-center align-items-center"
        onClick={isClick}
      >
        <div className="list-mobile-btn fs-1 text-light fw-bold">
          <i className="bi bi-list" />
        </div>
      </div>
      <div
        className={`subnav-mobile wd-200px sub-nav-bg position-fixed top-0 start-0 d-lg-none  ${
          state ? "d-none" : ""
        } z-2 h-100`}
      >
        <div className="row">
          <div
            className="sub-nav-close fs-2 fw-bold text-light text-uppercase ps-5 py-2"
            onClick={isClick}
          >
            <i className="bi bi-x-lg float-end pe-3" />
          </div>
        </div>
        <div className="row">
          <div className="sub-nav-link fs-3 fw-medium text-light text-uppercase ps-5 py-2">
            <NavLink to={"/cats"} className="text-decoration-none text-light">
              Mèo
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="sub-nav-link fs-3 fw-medium text-light text-uppercase ps-5 py-2">
            <NavLink
              to={"/others/foods"}
              className="text-decoration-none text-light"
            >
              Đồ ăn
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="sub-nav-link fs-3 fw-medium text-light text-uppercase ps-5 py-2">
            <NavLink
              to={"/others/toys"}
              className="text-decoration-none text-light"
            >
              Đồ chơi
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="sub-nav-link fs-3 fw-medium text-light text-uppercase ps-5 py-2">
            <NavLink
              to={"/others/litter"}
              className="text-decoration-none text-light"
            >
              Cát vệ sinh
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="sub-nav-link fs-3 fw-medium text-light text-uppercase ps-5 py-2">
            <NavLink
              to={"/others/clothes"}
              className="text-decoration-none text-light"
            >
              Đồ trang trí
            </NavLink>
          </div>
        </div>
        <div
          className="row py-3 ps-4 d-flex flex-column gap-3 position-absolute w-100 fs-14px"
          style={{ left: 15, bottom: 20 }}
        >
          <div className="col-4 w-100">
            <span className="mail-mobile-box text-light text-center d-flex gap-2">
              <i className="bi bi-envelope-fill" />
              <span>thecat@gmail.com</span>
            </span>
          </div>
          <div className="col-4 w-100">
            <span className="address-mobile-box text-light text-center d-flex gap-2">
              <i className="bi bi-geo-alt-fill" />
              <span> Số 150 Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN</span>
            </span>
          </div>
          <div className="col-4 w-100">
            <span className="phone-mobile-box text-light text-center d-flex gap-2">
              <i className="bi bi-telephone-fill" />
              <span> 0987523525 - 0234533678</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
