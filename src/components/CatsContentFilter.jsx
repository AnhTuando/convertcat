import "../cats.css";

export default function CatsContentFilter() {
  return (
    <div className="d-none d-lg-block filter-pc col-3 my-3 p-3 border border-success-subtle filter-scroll bg-light">
      <div className="filter-pc-box">
        {/*PC color filter */}
        <div className="row g-2 mb-3">
          <div className="title fs-5 fw-medium">Chọn Màu Sắc</div>
          <div className="color">
            <div className="color-choose d-flex gap-2">
              <label className="fw-medium mix-color">
                <input
                  type="radio"
                  defaultValue="Nhiều màu"
                  name="color"
                  id=""
                />
                <span className="color-value">Nhiều màu</span>
              </label>
              <label className="fw-medium single-color">
                <input type="radio" defaultValue="Đơn sắc" name="color" id="" />
                <span className="color-value">Đơn sắc</span>
              </label>
            </div>
          </div>
        </div>
        {/*end color filter */}
        {/* size filter */}
        <div className="row g-2 mb-3">
          <div className="title fs-5 fw-medium">Chọn Kích Cỡ</div>
          <div className="size">
            <div className="size-choose d-flex gap-2">
              <label className="fw-medium small">
                <input type="radio" defaultValue="Nhỏ" name="size" id="" />
                <span className="size-value">Nhỏ</span>
              </label>
              <label className="fw-medium medium">
                <input
                  type="radio"
                  defaultValue="Trung bình"
                  name="size"
                  id=""
                />
                <span className="size-value">Trung bình</span>
              </label>
              <label className="fw-medium big">
                <input type="radio" defaultValue="To" name="size" id="" />
                <span className="size-value">To</span>
              </label>
            </div>
          </div>
        </div>
        {/*end size filter */}
        {/* fur style filter */}
        <div className="row g-2 mb-3">
          <div className="title fs-5 fw-medium">Chọn Kiểu Lông</div>
          <div className="fur-style">
            <div className="fur-style-choose d-flex gap-2">
              <label className="fw-medium short">
                <input type="radio" defaultValue="Ngắn" name="size" id="" />
                <span className="fur-value">Ngắn</span>
              </label>
              <label className="fw-medium long">
                <input type="radio" defaultValue="Dài" name="size" id="" />
                <span className="fur-value">Dài</span>
              </label>
              <label className="fw-medium less">
                <input type="radio" defaultValue="Ít" name="size" id="" />
                <span className="fur-value">Ít</span>
              </label>
            </div>
          </div>
        </div>
        {/*end fur style filter */}
        {/* fur loss filter */}
        <div className="row g-2 mb-3">
          <div className="title fs-5 fw-medium">Rụng Lông</div>
          <div className="fur-loss">
            <div className="fur-loss-choose">
              <label className="fw-medium hairy">
                <input type="radio" defaultValue="Nhiều" name="size" id="" />
                <span className="fur-loss-value">Nhiều</span>
              </label>
              <label className="fw-medium less">
                <input type="radio" defaultValue="Ít" name="size" id="" />
                <span className="fur-loss-value">Ít</span>
              </label>
            </div>
          </div>
        </div>
        {/*end fur loss filter */}
        {/* price filter */}
        <div className="row price-filter-wrap g-2 mb-2">
          <div className="wrap-show-price d-flex fs-5">
            <div className="title fw-medium">Giá</div>
            <div className="ms-3 d-flex align-items-center gap-1 show-price fw-bold fs-6">
              <span className="fw-bold">~</span>
              <span className="show-price-value">3</span>
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
              defaultValue={3}
              min={1}
              max={10}
            />
          </div>
          <div className="wrap-btn d-flex justify-content-center">
            <div
              className="filter-btn-price fw-bold fs-5 filter-bg d-inline-block rounded-2 text-light py-1 px-3"
              style={{ width: "fit-content" }}
            >
              Lọc giá
            </div>
          </div>
        </div>
        {/*End price filter */}
      </div>
    </div>
  );
}
