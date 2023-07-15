import "../index.css";
import Logo from "/assets/TheCatLogo.png";
import { NavLink, useLocation, useParams } from "react-router-dom";
import NavSearchButton from "./NavSearchButton";
import { useState, useEffect } from "react";
export default function Navigation() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const { id } = useParams();
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);
  return (
    <section className="navigation-2 d-none d-lg-block green-bg">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <NavLink to={"/"}>
              <img className="logo" src={Logo} alt="" />
            </NavLink>
          </div>
          <div className="col-8 d-flex justify-content-between align-items-center">
            <div className="item">
              <NavLink
                to={"/cats"}
                className={` ${
                  activePage === `/cats/${id}` || activePage === `/cats`
                    ? "text-info"
                    : "text-light"
                }  text-decoration-none fw-bold fs-5 d-flex gap-2`}
              >
                <i className="bi bi-android" /> <span>MÈO</span>
              </NavLink>
            </div>
            <div className="item">
              <NavLink
                to={"/others/foods"}
                className={` ${
                  activePage === "/others/foods" ||
                  activePage === `/others/foods/${id}`
                    ? "text-info"
                    : "text-light"
                }  text-decoration-none fw-bold fs-5 d-flex gap-2`}
              >
                <i className="bi bi-box-fill" /> <span> ĐỒ ĂN</span>
              </NavLink>
            </div>
            <div className="item">
              <NavLink
                to={"/others/toys"}
                className={` ${
                  activePage === "/others/toys" ||
                  activePage === `/others/toys/${id}`
                    ? "text-info"
                    : "text-light"
                }  text-decoration-none fw-bold fs-5 d-flex gap-2`}
              >
                <i className="bi bi-balloon-fill" /> <span>ĐỒ CHƠI</span>
              </NavLink>
            </div>
            <div className="item">
              <NavLink
                to={"/others/litter"}
                className={` ${
                  activePage === "/others/litter" ||
                  activePage === `/others/litter/${id}`
                    ? "text-info"
                    : "text-light"
                }  text-decoration-none fw-bold fs-5 d-flex gap-2`}
              >
                <i className="bi bi-archive-fill" /> <span>CÁT VỆ SINH</span>
              </NavLink>
            </div>
            <div className="item">
              <NavLink
                to={"/others/clothes"}
                className={` ${
                  activePage === "/others/clothes" ||
                  activePage === `/others/clothes/${id}`
                    ? "text-info"
                    : "text-light"
                }  text-decoration-none fw-bold fs-5 d-flex gap-2`}
              >
                <i className="bi bi-piggy-bank-fill" />
                <span>ĐỒ TRANG TRÍ</span>
              </NavLink>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-around align-items-center">
            <NavSearchButton />
            <NavLink
              to={"/checkout"}
              className="cart-box fs-4 text-light text-decoration-none position-relative"
            >
              <i className="bi bi-cart4" />
              <span
                className="notice-box-pc fw-bold text-bg-danger fs-6 rounded-5 position-absolute text-center d-none"
                style={{ height: 20, width: 20, lineHeight: 20, left: 15 }}
              >
                !
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
