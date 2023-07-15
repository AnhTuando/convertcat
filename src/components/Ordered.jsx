import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./CheckoutContent";

export default function Ordered() {
  const { customerData, setCustomerData } = useContext(DataContext);

  const [dataState, setDataState] = useState(customerData);
  return (
    <>
      {dataState.map((data) => (
        <div className="row wrap-done-deal-item bg-light p-4 rounded-2">
          <div className="col-12">
            <div className="row mb-4">
              <div className="col-9">
                <div className="title title text-gr fw-medium text-uppercase">
                  ĐƠN HÀNG
                </div>
              </div>
              <div className="col-3">
                <div className="title title text-gr fw-medium text-uppercase">
                  Trạng thái
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-items-done-deal">
            {dataState ? (
              <div className="wrap-items-done-deal">
                <div className=".item-done-deal">
                  <div className="my-3 border-bottom border-success-subtle py-2">
                    <div className="row my-2">
                      <div className="col-9">
                        <div className="customer-info d-flex gap-3 fs-14px">
                          <div className="customer-name ff-roboto ">
                            <span>Khách hàng: </span>
                            <span className="fw-medium">{data.fullname}</span>
                          </div>
                          <div className="customer-phone ff-roboto">
                            <span>SĐT: </span>{" "}
                            <span className="fw-medium">{data.phone}</span>
                          </div>
                          <div className="customer-address ff-roboto">
                            <span>Địa Chỉ: </span>{" "}
                            <span className="fw-medium">{data.address}</span>
                          </div>
                          <div className="customer-total-price ff-roboto">
                            <span>Tổng tiền: </span>{" "}
                            <span className="fw-medium">{data.price}</span>{" "}
                            <span>VND</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 d-flex">
                        <div className="status-box-value d-flex align-items-center fw-bold">
                          Chờ Lấy Hàng
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="none-item d-flex flex-column justify-content-center align-items-center">
                <div className="title fw-medium">Chưa có sản phẩm nào</div>
                <div className="icon text-gr fs-1">
                  <i className="bi bi-cart4" />
                </div>
              </div>
            )}
            <div className="item-done-deal d-none">
              <div className="my-3 border-bottom border-success-subtle py-2">
                <div className="row my-2">
                  <div className="col-8">
                    <div className="item-infor d-flex">
                      <div
                        className="img-wrap"
                        style={{ height: 100, width: "fit-content" }}
                      >
                        <img
                          src="./img/product-item.png"
                          className="img-fluid h-100"
                          alt=""
                        />
                      </div>
                      <div className="item-description d-flex flex-column justify-content-center align-items-center fs-14px">
                        <div className="item-name fw-medium">
                          Mèo Anh Lông Ngắn
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex">
                    <div className="status-box-value d-flex align-items-center fw-bold">
                      Chờ Lấy Hàng
                    </div>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="customer-info d-flex justify-content-between fs-14px">
                    <div className="customer-name ff-roboto">
                      Nguyễn Trọng Tân
                    </div>
                    <div className="customer-phone ff-roboto">0123456789</div>
                    <div className="customer-address ff-roboto">
                      12,Nguyễn Du, Hà Nội
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
