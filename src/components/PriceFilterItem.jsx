export function PriceFilterItem({ showPrice, value, min, max, onChange }) {
  return (
    <div className="row price-filter-wrap g-2 mb-2">
      <div className="wrap-show-price d-flex fs-5">
        <div className="title fw-medium">Giá</div>
        <div className="ms-3 d-flex align-items-center gap-1 show-price fw-bold fs-6">
          <span className="fw-bold">~</span>
          <span className="show-price-value">{showPrice}</span>
          <span>Triệu</span>
        </div>
      </div>
      <div
        className="price-filter-box position-relative"
        style={{ height: 50 }}
      >
        <div className="start-price position-absolute start-0 bottom-0 fw-medium">
          1 Triệu
        </div>
        <div className="start-price position-absolute end-0 bottom-0 fw-medium">
          10 Triệu
        </div>
        <input
          type="range"
          className="price-filter-input w-100"
          value={value}
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
