import CustomerInput from "./CustomerInput";
export default function CheckoutPayment() {
  return (
    <>
      <div className="col-12 col-lg-6 payment bg-light p-4 rounded-2 mb-2">
        <div className="row">
          <div className="wrap-update-title d-flex justify-content-between mb-2">
            <div className="title text-gr fw-medium">THANH TOÁN</div>
          </div>
          <div className="subtotal-items-wrap border border-success-subtle p-3 rounded-1">
            <div className="customer-info d-flex flex-column gap-2">
              <CustomerInput label={"Tên Khách Hàng"} type={"text"} />
              <CustomerInput label={"Số Điện Thoại"} type={"number"} />
              <CustomerInput label={"Địa Chỉ"} type={"text"} />

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
    </>
  );
}
