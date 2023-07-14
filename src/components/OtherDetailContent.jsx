import data from "/data.json";
import { ToastContainer, toast } from "react-toastify";

import { useParams } from "react-router-dom";
export const generateRandomId = () => {
  const timestamp = new Date().getTime();
  const randomId = `${timestamp}`;
  return Number(randomId);
};
export default function OtherDetailContext({ category }) {
  let itemArrs = JSON.parse(localStorage.getItem("myArray")) || [];
  const { id } = useParams();

  // handle toaster
  const notify = () => toast("Đặt Hàng Thành Công !");

  const dataKey = category;
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
  const addTocart = () => {
    renderDatas.map((data) => {
      if (data.id == id) {
        const addProduct = {
          id: generateRandomId(),
          quantity: 1,
          price: data.price,
          name: data.name,
          img: data.thumbnail,
          attachProduct: false,
        };
        itemArrs.push(addProduct);
      }
    });
    notify();
    localStorage.setItem("myArray", JSON.stringify(itemArrs));
  };
  return (
    <section className="product my-3">
      <ToastContainer theme="light" />

      {renderDatas.map((data) => {
        if (data.id == id) {
          return (
            <div className="container">
              <div className="row">
                {" "}
                <div className="col-12 col-lg-6">
                  <div className="wrap-product-img d-flex justify-content-center align-items-center">
                    <img src={data.thumbnail} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="wrap-product-info d-flex flex-column justify-content-between h-100 p-3 gap-3">
                    <div className="product-name">
                      <span className="name-value fs-3 text-gr fw-bold">
                        {data.name}
                      </span>
                    </div>
                    <div className="brand-name fs-4">
                      <span className="text-secondary fw-medium">Brand:</span>
                      <span className="brand-value text-soft-bl fw-medium">
                        {" "}
                        {data.brand}
                      </span>
                    </div>
                    <div className="payment-control d-flex justify-content-between">
                      <div className="price-box p-2 fs-5 fw-bold">
                        <span className="title text-soft-bl">Giá:</span>
                        <span className="price-value number-font text-gr">
                          {data.price}
                        </span>
                        <span className="text-gr">VND</span>
                      </div>
                      <div className="payment d-flex">
                        <div
                          className="pay-btn text-decoration-none d-flex align-items-center px-2 px-lg-3 green-bg text-light fw-bold rounded-4"
                          onClick={addTocart}
                        >
                          Thêm vào giỏ hàng
                        </div>
                      </div>
                    </div>
                    <div className="description bg-success-subtle text-soft-bl p-2 rounded-2 fw-medium">
                      <div className="money-back-warranty d-flex gap-2">
                        <i className="bi bi-bag-check text-gr" />
                        <span>Hoàn tiền 100 % nếu sản phẩm có vấn đề</span>
                      </div>
                      <div className="quality d-flex gap-2">
                        <i className="bi bi-bag-check text-gr" />
                        <span> Sản phẩm chất lượng tốt</span>
                      </div>
                      <div className="delivery d-flex gap-2">
                        <i className="bi bi-bag-check text-gr" />
                        <span>Miễn phí vận chuyển nội thành</span>
                      </div>
                      <div className="support d-flex gap-2">
                        <i className="bi bi-bag-check text-gr" />
                        <span>Hỗ trợ 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}
