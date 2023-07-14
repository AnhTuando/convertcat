const localData = JSON.parse(localStorage.getItem("myArray")) || [];

export default function CheckoutItems({
  id,
  name,
  img,
  price,
  attachProduct,
  handleDelete,
  handleDecrease,
  handleIncrease,
  quantity,
}) {
  return (
    <div
      className="d-flex w-100 py-3 justify-content-between position-relative my-3 border-bottom border-secondary-subtle"
      key={id}
    >
      <div
        className="clear-cart-item-btn position-absolute fs-14px text-bg-danger py-1 px-2"
        style={{ right: 10, bottom: 10 }}
        onClick={handleDelete}
      >
        <span>Xóa</span>
      </div>
      <div className="cart-item d-flex gap-3">
        <div className="img-wrap" style={{ height: 100 }}>
          <img src={img} className="img-fluid h-100" alt="" />
        </div>
        <div className="item-info-wrap fs-14px d-flex flex-column justify-content-center">
          <div className="name fw-medium text-soft-bl">{name}</div>
          <div className="price-box">
            <span className="pr-value ff-roboto text-secondary">{price}</span>
            <span className="ff-roboto text-secondary">VND</span>
          </div>
          <div className={`attach-pr ${attachProduct ? "" : "d-none"}`}>
            <div className="text-soft-bl fw-medium">Mũ Sừng</div>
            <div className="attach-price-box">
              <span className="attach-price-value ff-roboto text-secondary">
                126.000
              </span>
              <span className="ff-roboto text-secondary">VND</span>
            </div>
          </div>
        </div>
      </div>
      <div className="quantity-and-subtotal fs-14px d-flex flex-column gap-2">
        <div className="quantity-wrap w-100 d-flex justify-content-between px-1 border border-success-subtle rounded-5">
          <div className="minus-btn fs-5" onClick={handleDecrease}>
            <i className="bi bi-dash" />
          </div>
          <div className="quantity-number d-flex justify-content-between align-items-center">
            <span className="quantity-value">{quantity}</span>
          </div>
          <div className="plus-btn" onClick={handleIncrease}>
            <i className="bi bi-plus fs-5" />
          </div>
        </div>
        <div className="total">
          <div className="total-wrap">
            <span className="total-value ff-roboto">
              {attachProduct
                ? (price.replace(/\./g, "") * quantity + 126000).toLocaleString(
                    "vi-VN"
                  )
                : (price.replace(/\./g, "") * quantity).toLocaleString("vi-VN")}
            </span>
            <span className="ff-roboto">VND</span>
          </div>
        </div>
      </div>
    </div>
  );
}
