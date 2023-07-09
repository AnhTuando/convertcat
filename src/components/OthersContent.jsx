import "../others.css";
import data from "/data.json";
import { NavLink, generatePath } from "react-router-dom";
export default function OthersContent(category) {
  const dataKey = category.category;
  let renderDatas = [];
  if (dataKey == "foods") {
    renderDatas = data.foods;
  }
  if (dataKey == "litter") {
    renderDatas = data.litter;
  }
  if (dataKey == "clothes") {
    renderDatas = data.clothes;
  }
  if (dataKey == "toys") {
    renderDatas = data.toys;
  }
  return (
    <div className="row">
      {renderDatas.map((data) => (
        <div
          className="col-6 col-lg-4 mb-4"
          data-product-id={data.id}
          key={data.id}
        >
          <div className="item p-2 custom-shadow h-100 rounded-2">
            <NavLink
              to={generatePath(`/others/${dataKey}/:id`, { id: data.id })}
              className="text-decoration-none d-flex flex-column justify-content-between h-100"
            >
              <div className="wrap-img d-flex justify-content-center">
                <img src={data.thumbnail} className="img-fluid" alt="" />
              </div>
              <div className="wrap-product-info d-flex flex-column px-lg-2">
                <div className="pr-name text-soft-bl fw-medium">
                  <span className="name-value fs-4 d-none d-lg-block">
                    {data.name}
                  </span>
                  <span className="name-value d-lg-none">{data.name}</span>
                </div>
                <div className="pr-price-box d-flex justify-content-between">
                  <div className=" price fw-medium d-flex justify-content-center gap-1 align-items-center">
                    <span className="ff-roboto text-soft-bl ">
                      {data.price}
                    </span>
                    <span className=" ff-roboto text-soft-bl ">VND</span>
                  </div>
                  <div
                    className="cart-btn border border-success py-1 px-2 text-soft-bl"
                    style={{ borderRadius: "50%" }}
                  >
                    <i className="bi bi-cart4" />
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}
