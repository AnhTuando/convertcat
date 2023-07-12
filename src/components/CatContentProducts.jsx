import "../cats.css";
import data from "/data.json";
import { NavLink, generatePath } from "react-router-dom";
export default function CatsContentProducts({ catObject, isUpdate }) {
  console.log(catObject);
  const catDatas = data.cats;
  const filteredCats = catDatas.filter((cat) => {
    // Hàm trung gian để kiểm tra giá trị thuộc tính trước khi so sánh
    const shouldIgnoreProperty = (propertyValue) => propertyValue === "";

    // Kiểm tra các thuộc tính của cat và demo, bỏ qua so sánh nếu giá trị là rỗng ('')
    return (
      (shouldIgnoreProperty(catObject.color) ||
        cat.color === catObject.color) &&
      (shouldIgnoreProperty(catObject.furr) || cat.furr === catObject.furr) &&
      (shouldIgnoreProperty(catObject.furrLose) ||
        cat.furrLose === catObject.furrLose) &&
      (shouldIgnoreProperty(catObject.size) || cat.size === catObject.size)
    );
  });

  console.log(filteredCats);
  return (
    <>
      {isUpdate == true ? (
        <div className="row">
          {filteredCats.map((data) => (
            <div
              className="col-6 col-lg-4 mb-4"
              data-product-id={data.id}
              key={data.id}
            >
              <NavLink
                to={generatePath("/cats/:id", { id: data.id })}
                className="product-item text-decoration-none rounded-2 custom-shadow d-flex p-3"
              >
                <div className="item d-flex flex-column gap-2 position-relative">
                  <div className="pr-img">
                    <img src={data.thumbnail} className="img-fluid" alt="" />
                  </div>
                  <div className="product-name fw-medium text-soft-bl">
                    <span className="name-value fs-4 d-none d-lg-block">
                      {data.name}
                    </span>
                    <span className="name-value fs-5 d-lg-none">
                      {data.name}
                    </span>
                  </div>
                  <div className="product-price d-flex justify-content-between fw-medium text-soft-bl">
                    <div className="price-wrap">
                      <span className="price-value fw-bold"> {data.price}</span>
                      <span className="price-value fw-bold">VND</span>
                    </div>
                    <div
                      className="cart-btn border border-success text-center text-gr py-1 px-2 position-absolute end-0 bottom-0"
                      style={{ borderRadius: "50%" }}
                    >
                      <i className="bi bi-cart4 fs-6" />
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      ) : (
        <div className="row">
          {catDatas.map((data) => (
            <div
              className="col-6 col-lg-4 mb-4"
              data-product-id={data.id}
              key={data.id}
            >
              <NavLink
                to={generatePath("/cats/:id", { id: data.id })}
                className="product-item text-decoration-none rounded-2 custom-shadow d-flex p-3"
              >
                <div className="item d-flex flex-column gap-2 position-relative">
                  <div className="pr-img">
                    <img src={data.thumbnail} className="img-fluid" alt="" />
                  </div>
                  <div className="product-name fw-medium text-soft-bl">
                    <span className="name-value fs-4 d-none d-lg-block">
                      {data.name}
                    </span>
                    <span className="name-value fs-5 d-lg-none">
                      {data.name}
                    </span>
                  </div>
                  <div className="product-price d-flex justify-content-between fw-medium text-soft-bl">
                    <div className="price-wrap">
                      <span className="price-value fw-bold"> {data.price}</span>
                      <span className="price-value fw-bold">VND</span>
                    </div>
                    <div
                      className="cart-btn border border-success text-center text-gr py-1 px-2 position-absolute end-0 bottom-0"
                      style={{ borderRadius: "50%" }}
                    >
                      <i className="bi bi-cart4 fs-6" />
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
