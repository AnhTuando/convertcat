import "../index.css";
import Clothes from "/assets/categories/pr-clothes.png";
import Cat from "/assets/categories/pr-cat.png";
import Food from "/assets/categories/pr-food.png";
import Litter from "/assets/categories/pr-litter.png";
import Toy from "/assets/categories/pr-toy.png";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <section className="content my-5">
      {/* CONTENT PC */}
      <div className="container d-none d-lg-block">
        <div className="row shop-products">
          <div className="title text-gr fs-1 fw-bold text-center my-2">
            Sản Phẩm Của Chúng Tôi
          </div>
          <div className="col-8 d-flex flex-column gap-4">
            <div className="row">
              <div className="col-5">
                <div className="clothes left-col-element rounded-5 d-flex justify-content-center align-items-center position-relative">
                  <div
                    className="wrap-img h-75"
                    style={{ width: "fit-content" }}
                  >
                    <img src={Clothes} className="img-fluid h-100" alt="" />
                  </div>
                  <div className="wrap-text justify-content-center align-items-center d-flex flex-column gap-3">
                    <div className="description fs-4 text-light fw-bold">
                      Phụ Kiện Cho Mèo
                    </div>
                    <NavLink
                      to={"/others/clothes"}
                      className="discovery text-soft-bl fs-5 bg-white fw-medium rounded-2 py-2 px-4 text-decoration-none"
                      style={{ width: "fit-content" }}
                    >
                      Khám Phá Ngay
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="food left-col-element rounded-5 d-flex justify-content-center align-items-center position-relative">
                  <div
                    className="wrap-img h-75"
                    style={{ width: "fit-content" }}
                  >
                    <img src={Food} className="img-fluid h-100" alt="" />
                  </div>
                  <div className="wrap-text justify-content-center align-items-center d-flex flex-column gap-3">
                    <div className="description fs-4 text-light fw-bold">
                      Đồ Ăn Cho Mèo
                    </div>
                    <NavLink
                      to={"/others/foods"}
                      className="discovery text-soft-bl fs-5 bg-white fw-medium rounded-2 py-2 px-4 text-decoration-none"
                      style={{ width: "fit-content" }}
                    >
                      Khám Phá Ngay
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <div className="litter left-col-element rounded-5 d-flex justify-content-center align-items-center position-relative">
                  <div
                    className="wrap-img h-75"
                    style={{ width: "fit-content" }}
                  >
                    <img src={Litter} className="img-fluid h-100" alt="" />
                  </div>
                  <div className="wrap-text justify-content-center align-items-center d-flex flex-column gap-3">
                    <div className="description fs-4 text-light fw-bold">
                      Cát Vệ Sinh Cho Mèo
                    </div>
                    <NavLink
                      to={"/others/litter"}
                      className="discovery text-soft-bl fs-5 bg-white fw-medium rounded-2 py-2 px-4 text-decoration-none"
                      style={{ width: "fit-content" }}
                    >
                      Khám Phá Ngay
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="toy left-col-element rounded-5 d-flex justify-content-center align-items-center position-relative">
                  <div
                    className="wrap-img h-75"
                    style={{ width: "fit-content" }}
                  >
                    <img src={Toy} className="img-fluid h-100" alt="" />
                  </div>
                  <div className="wrap-text justify-content-center align-items-center d-flex flex-column gap-3">
                    <div className="description fs-4 text-light fw-bold">
                      Đồ Chơi Cho Mèo
                    </div>
                    <NavLink
                      to={"/others/toys"}
                      className="discovery text-soft-bl fs-5 bg-white fw-medium rounded-2 py-2 px-4 text-decoration-none"
                      style={{ width: "fit-content" }}
                    >
                      Khám Phá Ngay
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="cat h-100 rounded-5 d-flex justify-content-center align-items-center position-relative">
              <div className="wrap-img h-75" style={{ width: "fit-content" }}>
                <img src={Cat} className="img-fluid h-100" alt="" />
              </div>
              <div className="wrap-text justify-content-center align-items-center d-flex flex-column gap-3">
                <div className="description fs-4 text-light fw-bold">
                  Giống Mèo Độc Và Hiếm
                </div>
                <NavLink
                  to={"/cats"}
                  className="discovery text-soft-bl fs-5 bg-white fw-medium rounded-2 py-2 px-4 text-decoration-none"
                  style={{ width: "fit-content" }}
                >
                  Khám Phá Ngay
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*END CONTENT PC */}
      {/* CONTENT Mobile */}
      <div className="container d-lg-none">
        <div className="title text-gr fs-4 fw-bold text-center my-2">
          Sản Phẩm Của Chúng Tôi
        </div>
        <div className="row product-content-mb gap-4">
          <div className="col-12">
            <div className="cat content-h-mb position-relative rounded-2 p-2">
              <div className="wrap-img-mb h-75 d-flex justify-content-center align-items-center">
                <img src={Cat} className="img-fluid h-100" alt="" />
              </div>
              <div className="text-wrap-mb d-flex flex-column gap-2 p-4 fw-bold position-absolute bottom-0 text-center start-0 end-0">
                <div className="title fs-3 text-light">
                  Nhiều Giống Mèo Độc Và Hiếm
                </div>
                <div className="discovery fs-4">
                  <NavLink
                    to={"/cats"}
                    className="text-decoration-none discovery-btn text-soft-bl bg-light py-2 px-4 rounded-2"
                  >
                    Khám Phá
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="food content-h-mb position-relative rounded-2 p-2">
              <div className="wrap-img-mb h-75 d-flex justify-content-center align-items-center">
                <img src={Food} className="img-fluid h-100" alt="" />
              </div>
              <div className="text-wrap-mb d-flex flex-column gap-2 p-4 fw-bold position-absolute bottom-0 text-center start-0 end-0">
                <div className="title fs-3 text-light">Đồ Ăn Cho Mèo</div>
                <div className="discovery fs-4">
                  <NavLink
                    to={"/others/foods"}
                    className="text-decoration-none discovery-btn text-soft-bl bg-light py-2 px-4 rounded-2"
                  >
                    Khám Phá
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="clothes content-h-mb position-relative rounded-2 p-2">
              <div className="wrap-img-mb h-75 d-flex justify-content-center align-items-center">
                <img src={Clothes} className="img-fluid h-100" alt="" />
              </div>
              <div className="text-wrap-mb d-flex flex-column gap-2 p-4 fw-bold position-absolute bottom-0 text-center start-0 end-0">
                <div className="title fs-3 text-light">Quần Áo Cho Mèo</div>
                <div className="discovery fs-4">
                  <NavLink
                    to={"/others/clothes"}
                    className="text-decoration-none discovery-btn text-soft-bl bg-light py-2 px-4 rounded-2"
                  >
                    Khám Phá
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="litter content-h-mb position-relative rounded-2 p-2">
              <div className="wrap-img-mb h-75 d-flex justify-content-center align-items-center">
                <img src={Litter} className="img-fluid h-100" alt="" />
              </div>
              <div className="text-wrap-mb d-flex flex-column gap-2 p-4 fw-bold position-absolute bottom-0 text-center start-0 end-0">
                <div className="title fs-3 text-light">Cát Vệ Sinh Cho Mèo</div>
                <div className="discovery fs-4">
                  <NavLink
                    to={"/others/litter"}
                    className="text-decoration-none discovery-btn text-soft-bl bg-light py-2 px-4 rounded-2"
                  >
                    Khám Phá
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="toy content-h-mb position-relative rounded-2 p-2">
              <div className="wrap-img-mb h-75 d-flex justify-content-center align-items-center">
                <img src={Toy} className="img-fluid h-100" alt="" />
              </div>
              <div className="text-wrap-mb d-flex flex-column gap-2 p-4 fw-bold position-absolute bottom-0 text-center start-0 end-0">
                <div className="title fs-3 text-light">Đồ Chơi Cho Mèo</div>
                <div className="discovery fs-4">
                  <NavLink
                    to={"/others/toys"}
                    className="text-decoration-none discovery-btn text-soft-bl bg-light py-2 px-4 rounded-2"
                  >
                    Khám Phá
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CONTENT Mobile */}
    </section>
  );
}
