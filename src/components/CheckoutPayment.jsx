import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { DataContext } from "./CheckoutContent";

export default function CheckoutPayment() {
  const { data, customerData, setCustomerData } = useContext(DataContext);

  const [updateCartPrice, setUpdateCartPrice] = useState(0);

  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (value) => {
    let customerItem = {
      ...value,
      price: updateCartPrice.toLocaleString("vi-VN"),
    };
    setCustomerData([...customerData, customerItem]);
    console.log(customerData);
  };
  const totalValue = () => {
    let total = 0;
    let itemTotal = 0;
    data.map((item) => {
      if (item.attachProduct) {
        itemTotal = item.price.replace(/\./g, "") * item.quantity + 126000;
      } else {
        itemTotal = item.price.replace(/\./g, "") * item.quantity;
      }
      total += itemTotal;
    });
    setUpdateCartPrice(total);
  };
  // console.log(totalValue());
  // localStorage.removeItem("Customer");

  return (
    <div className="col-12 col-lg-6 payment bg-light p-4 rounded-2 mb-2">
      <div className="row">
        <div className="wrap-update-title d-flex justify-content-between mb-2">
          <div className="title text-gr fw-medium">THANH TOÁN</div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="subtotal-items-wrap border border-success-subtle p-3 rounded-1"
        >
          <div className="customer-info d-flex flex-column gap-2">
            <div className="customer-name fw-medium w-100">
              <label className="w-100">
                <div>Tên khách hàng</div>
                <input
                  {...register("fullname")}
                  type="text"
                  className="w-100 border border-secondary-subtle px-2"
                />
              </label>
            </div>
            <div className="customer-name fw-medium w-100">
              <label className="w-100">
                <div>Địện thoại</div>
                <input
                  {...register("phone")}
                  type="number"
                  className="w-100 border border-secondary-subtle px-2"
                />
              </label>
            </div>
            <div className="customer-name fw-medium w-100">
              <label className="w-100">
                <div>Địa chỉ</div>
                <input
                  {...register("address")}
                  type="text"
                  className="w-100 border border-secondary-subtle px-2"
                />
              </label>
            </div>
            <div className="wrap-update-cart-total d-flex justify-content-between">
              <div className="subtotal-price fw-bold my-2">
                <span className="text-soft-bl">Tổng:</span>
                <span className="subtotal-price-value ff-roboto text-gr">
                  {updateCartPrice.toLocaleString("vi-VN")}
                </span>
                <span className="ff-roboto text-gr">VND</span>
              </div>
              <div className="update-cart-wrap" onClick={totalValue}>
                <div className="update-cart-btn text-bg-warning px-2 py-1 fw-medium rounded-2">
                  Cập nhật giỏ hàng
                </div>
              </div>
            </div>
            <div className="payment-wrap d-flex justify-content-center">
              <button
                className="pay-btn green-bg text-light fw-bold py-1 px-2 rounded-2 border-none"
                style={{ width: "fit-content" }}
              >
                Thanh Toán
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
