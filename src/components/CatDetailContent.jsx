import data from "/data.json";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import cert1 from "/assets/cert1.png";
import cert2 from "/assets/cert2.png";
import AttachProductList from "./AttachProductList";
export default function CatDetailContent() {
  // handle render datas
  const { id } = useParams();
  const catDatas = data.cats;
  const notify = () => toast("Đặt Hàng Thành Công !");
  const addTocart = () => {
    notify();
  };
  // handle toaster

  return (
    <section className="product">
      <ToastContainer theme="light" />
      {catDatas.map((data) => {
        if (data.id == id) {
          return (
            <div className="container" key={id}>
              <div className="row">
                <div className="col-12">
                  {" "}
                  <div className="row my-2">
                    <div
                      className="product-img col-12 col-lg-6 d-flex justify-content-center align-items-center"
                      style={{ height: 400 }}
                    >
                      <img
                        src={data.thumbnail}
                        className="img-fluid h-75"
                        style={{ imageRendering: "pixelated" }}
                        alt=""
                      />
                    </div>
                    <div className="product-info col-12 col-lg-6 gap-2 d-flex flex-column justify-content-between">
                      <div className="pr-name fs-3 text-gr fw-bold">
                        {data.name}
                      </div>
                      <div className="sub-info row">
                        <div className="pr-color col-6">
                          <span className="title text-secondary fw-medium">
                            Kiểu Màu:
                          </span>
                          <span className="color-value text-soft-bl">
                            {data.color}
                          </span>
                        </div>
                        <div className="pr-size col-6">
                          <span className="title text-secondary fw-medium">
                            Size:
                          </span>
                          <span className="size-valuetext-soft-bl">
                            {" "}
                            {data.size}
                          </span>
                        </div>
                        <div className="pr-fur col-6">
                          <span className="title text-secondary fw-medium">
                            Kiểu Lông:
                          </span>
                          <span className="fur-value text-soft-bl">
                            {" "}
                            {data.furr}
                          </span>
                        </div>
                        <div className="pr-fur-loss col-6">
                          <span className="title text-secondary fw-medium">
                            Rụng Lông:
                          </span>
                          <span className="fur-loss-value text-soft-bl">
                            {data.furrLose}
                          </span>
                        </div>
                      </div>
                      <div className="discount-box d-flex flex-column gap-2">
                        <div className="title fw-medium text-gr">
                          Giảm 10% giá phụ kiện khi mua kèm với mèo
                        </div>
                        <div
                          className="discount-products-box d-flex justify-content-between"
                          style={{ height: 70 }}
                        >
                          <AttachProductList />
                          <div className="show-discount-price d-flex flex-column justify-content-center border border-secondary px-2 rounded-2 ">
                            <div className="old-price text-decoration-line-through text-secondary">
                              <span>Giảm cũ:</span>
                              <span className="old-value  ff-roboto">
                                140.000
                              </span>
                              <span className=" ">VND</span>
                            </div>
                            <div className="current-price text-danger ">
                              <span>Giảm còn:</span>
                              <span className="cur-value ff-roboto ">
                                126.000
                              </span>
                              <span className=" ">VND</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="payment-control d-flex justify-content-between">
                        <div className="price-box p-2 fs-5">
                          <span className="title fw-bold text-soft-bl">
                            Giá:
                          </span>
                          <span className="price-value fw-bold number-font text-gr ff-roboto">
                            {data.price}
                          </span>
                          <span className="text-gr fw-bold">VND</span>
                        </div>
                        <div className="payment d-flex">
                          <div
                            className="pay-btn d-flex justify-content-center align-items-center text-decoration-none px-4 green-bg text-light fw-bold rounded-4"
                            onClick={addTocart}
                          >
                            <span>
                              {" "}
                              Thêm vào giỏ hàng <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="description bg-success-subtle text-soft-bl p-2 rounded-2">
                        <div className="warranty d-flex gap-2">
                          <i className="bi bi-award-fill" />
                          <span>Bảo hành trong vòng 1 năm</span>
                        </div>
                        <div className="vaccination d-flex gap-2">
                          <i className="bi bi-prescription2" />
                          <span> Cam kết tiêm chủng đầy đủ</span>
                        </div>
                        <div className="delivery d-flex gap-2">
                          <i className="bi bi-truck" />
                          <span>Miễn phí vận chuyển nội thành</span>
                        </div>
                      </div>
                    </div>
                    <div className="row certification">
                      <div className="col-12">
                        <div className="title d-lg-none text-center mt-2 fw-bold text-soft-bl">
                          Giấy Tờ Kèm Theo
                        </div>
                        <div className="title d-none d-lg-block text-center fs-4 mt-2 fw-bold text-soft-bl">
                          Giấy Tờ Kèm Theo
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="vaccination-box d-flex flex-column justify-content-center">
                          <img src={cert1} className="img-fluid" alt="" />
                          <div className="d-none d-lg-block fs-4 fw-medium cert-info text-center text-soft-bl">
                            Sổ tiêm phòng
                          </div>
                          <div className="d-lg-none cert-info text-center fw-medium text-soft-bl">
                            Sổ tiêm phòng
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="warranty-box d-flex flex-column justify-content-center">
                          <img src={cert2} className="img-fluid" alt="" />
                          <div className="cert-info text-center text-soft-bl">
                            <div className="d-none d-lg-block fs-4 fw-medium cert-info text-center text-soft-bl">
                              Phiếu bảo hành
                            </div>
                            <div className="d-lg-none cert-info text-center fw-medium text-soft-bl">
                              Phiếu bảo hành
                            </div>
                          </div>
                        </div>
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
