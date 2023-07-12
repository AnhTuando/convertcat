import "../index.css";
import Logo from "/assets/TheCatLogo.png";
import NavMobileBtn from "./NavMobileBtn";
import { NavLink, generatePath } from "react-router-dom";
import NavSearchButton from "./NavSearchButton";
export default function Header() {
  return (
    <section className="header">
      {/* PC HEADER */}
      <div className="container d-none d-lg-block">
        <div className="row lh-60px h-60px">
          <div className="col-12 d-flex justify-content-around">
            <div className="item">
              <div className="title fw-bold text-uppercase text-gr fs-3">
                Your Cat's Paradise
              </div>
            </div>
            <div className="item">
              <div className="phone">
                <i className="bi bi-telephone-fill text-gr mx-1" />
                <span className="light-green-bg fw-bold">
                  0987523525 - 0234533678
                </span>
              </div>
            </div>
            <div className="item">
              <div className="mail">
                <i className="bi bi-envelope-fill text-gr mx-1" />
                <span className="light-green-bg fw-bold">thecat@gmail.com</span>
              </div>
            </div>
            <div className="item">
              <div className="location">
                <i className="bi bi-house-door-fill text-gr mx-1" />
                <span className="light-green-bg fw-bold">
                  Số 150 Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END PC HEADER */}
      {/* MOBLIE HEADER */}
      <div className="d-block d-lg-none green-bg position-relative">
        <div className="container">
          <div className="row">
            <NavMobileBtn />
            <div className="col-6">
              <NavLink
                to={generatePath("/")}
                className="mobile-logo d-flex justify-content-center align-items-center"
              >
                <img src={Logo} className="img-fluid" alt="" />
              </NavLink>
            </div>
            <div className="col-3 float-end d-flex justify-content-around align-items-center">
              <NavSearchButton />
              <NavLink
                to={generatePath("/checkout")}
                className="cart-mobile-btn fs-3 text-light fw-bold text-decoration-none position-relative"
              >
                <i className="bi bi-cart4" />
                <span
                  className="notice-box-mb fw-bold text-bg-danger fs-6 rounded-5 position-absolute text-center d-none"
                  style={{
                    height: 20,
                    width: 20,
                    lineHeight: 20,
                    left: 15,
                  }}
                >
                  !
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
