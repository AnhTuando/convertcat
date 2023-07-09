import "../checkout.css";
export default function CheckoutContent() {
  return (
    <section className="content mb-4 content-soft-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title fs-4 text-gr fw-bold d-lg-none text-center">
              Giỏ Hàng
            </div>
            <div className="title fs-1 text-gr fw-bold d-none d-lg-block text-center">
              Giỏ Hàng
            </div>
          </div>
          {/* check cart */}
          <div className="col-12 check-cart bg-light p-4 rounded-2 mb-2">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="wrap-update-title d-flex justify-content-between">
                  <div className="title text-gr fw-medium">SẢN PHẨM</div>
                </div>
                <div className="wrap-cart-items my-2">
                  <div className="item" data-id={1688143236016}>
                    <div className="d-flex w-100 py-3 justify-content-between position-relative my-3 border-bottom border-secondary-subtle">
                      <div
                        className="clear-cart-item-btn position-absolute fs-14px text-bg-danger py-1 px-2"
                        style={{ right: 10, bottom: 10 }}
                      >
                        <span>Xóa</span>
                      </div>
                      <div className="cart-item d-flex gap-3">
                        <div className="img-wrap" style={{ height: 100 }}>
                          <img
                            src="https://jsonserver-vercel.vercel.app/litters/C%C3%A1t%20V%E1%BB%87%20Sinh%204%20in%201.png"
                            className="img-fluid h-100"
                            alt=""
                          />
                        </div>
                        <div className="item-info-wrap fs-14px d-flex flex-column justify-content-center">
                          <div className="name fw-medium text-soft-bl">
                            Cát Vệ Sinh 4 in 1
                          </div>
                          <div className="price-box">
                            <span className="pr-value ff-roboto text-secondary">
                              150.000
                            </span>
                            <span className="ff-roboto text-secondary">
                              VND
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quantity-and-subtotal fs-14px d-flex flex-column gap-2">
                        <div className="quantity-wrap w-100 d-flex justify-content-between px-1 border border-success-subtle rounded-5">
                          <div className="minus-btn fs-5">
                            <i className="bi bi-dash" />
                          </div>
                          <div className="quantity-number d-flex justify-content-between align-items-center">
                            <span className="quantity-value">1</span>
                          </div>
                          <div className="plus-btn">
                            <i className="bi bi-plus fs-5" />
                          </div>
                        </div>
                        <div className="total">
                          <div className="total-wrap">
                            <span className="total-value ff-roboto">
                              150.000
                            </span>
                            <span className="ff-roboto">VND</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item" data-id={1688367884687}>
                    <div className="d-flex w-100 py-3 justify-content-between position-relative my-3 border-bottom border-secondary-subtle">
                      <div
                        className="clear-cart-item-btn position-absolute fs-14px text-bg-danger py-1 px-2"
                        style={{ right: 10, bottom: 10 }}
                      >
                        <span>Xóa</span>
                      </div>
                      <div className="cart-item d-flex gap-3">
                        <div className="img-wrap" style={{ height: 100 }}>
                          <img
                            src="https://jsonserver-vercel.vercel.app/litters/C%C3%A1t%20V%E1%BB%87%20Sinh%204%20in%201.png"
                            className="img-fluid h-100"
                            alt=""
                          />
                        </div>
                        <div className="item-info-wrap fs-14px d-flex flex-column justify-content-center">
                          <div className="name fw-medium text-soft-bl">
                            Cát Vệ Sinh 4 in 1
                          </div>
                          <div className="price-box">
                            <span className="pr-value ff-roboto text-secondary">
                              150.000
                            </span>
                            <span className="ff-roboto text-secondary">
                              VND
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quantity-and-subtotal fs-14px d-flex flex-column gap-2">
                        <div className="quantity-wrap w-100 d-flex justify-content-between px-1 border border-success-subtle rounded-5">
                          <div className="minus-btn fs-5">
                            <i className="bi bi-dash" />
                          </div>
                          <div className="quantity-number d-flex justify-content-between align-items-center">
                            <span className="quantity-value">1</span>
                          </div>
                          <div className="plus-btn">
                            <i className="bi bi-plus fs-5" />
                          </div>
                        </div>
                        <div className="total">
                          <div className="total-wrap">
                            <span className="total-value ff-roboto">
                              150.000
                            </span>
                            <span className="ff-roboto">VND</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="title text-gr fw-medium">THANH TOÁN</div>
                <div className="subtotal-items-wrap border border-success-subtle p-3 rounded-1">
                  <div className="customer-info d-flex flex-column gap-2">
                    <div className="customer-name fw-medium w-100">
                      <label className="w-100">
                        <div>Tên khách hàng</div>
                        <input
                          type="text"
                          className="w-100 border border-secondary-subtle px-2"
                        />
                      </label>
                    </div>
                    <div className="customer-phone fw-medium">
                      <label className="w-100">
                        <div>Số điện thoại</div>
                        <input
                          type="text"
                          className="w-100 border border-secondary-subtle px-2"
                        />
                      </label>
                    </div>
                    <div className="customer-address fw-medium">
                      <label className="w-100">
                        <div>Địa chỉ</div>
                        <input
                          type="text"
                          className="w-100 border border-secondary-subtle px-2"
                        />
                      </label>
                    </div>
                    <div className="wrap-update-cart-total d-flex justify-content-between">
                      <div className="subtotal-price fw-bold my-2">
                        <span className="text-soft-bl">Tổng:</span>
                        <span className="subtotal-price-value ff-roboto text-gr">
                          0
                        </span>
                        <span className="ff-roboto text-gr">VND</span>
                      </div>
                      <div className="update-cart-wrap">
                        <div className="update-cart-btn text-bg-warning px-2 py-1 fw-medium rounded-2">
                          Cập nhật giỏ hàng
                        </div>
                      </div>
                    </div>
                    <div className="payment-wrap d-flex justify-content-center">
                      <div
                        className="pay-btn green-bg text-light fw-bold py-1 px-2 rounded-2"
                        style={{ width: "fit-content" }}
                      >
                        Thanh Toán
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* done deal */}
          <div className="col-12 done-deal mb-4">
            <div className="row mb-1">
              <div className="col-12">
                <div className="title fs-4 text-gr fw-bold d-lg-none text-center">
                  Đơn Mua
                </div>
                <div className="title fs-1 text-gr fw-bold d-none d-lg-block text-center">
                  Đơn Mua
                </div>
              </div>
            </div>
            <div className="row wrap-done-deal-item bg-light p-4 rounded-2">
              <div className="col-12">
                <div className="row mb-4">
                  <div className="col-8">
                    <div className="title title text-gr fw-medium text-uppercase">
                      Sản Phẩm
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="title title text-gr fw-medium text-uppercase">
                      Trạng thái
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap-items-done-deal">
                <div className="none-item d-flex flex-column justify-content-center align-items-center">
                  <div className="title fw-medium">Chưa có sản phẩm nào</div>
                  <div className="icon text-gr fs-1">
                    <i className="bi bi-cart4" />
                  </div>
                </div>
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
                        <div className="customer-phone ff-roboto">
                          0123456789
                        </div>
                        <div className="customer-address ff-roboto">
                          12,Nguyễn Du, Hà Nội
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
