import "../index.css";
import CatHead from "/assets/special/catHead.png";
import Confirm from "/assets/special/confirm.png";
import Delivery from "/assets/special/delivery-truck.png";
import Needle from "/assets/special/needle.png";

export default function Special() {
  return (
    <section className="special my-5">
      <div className="title text-center fw-bold fs-4 text-gr my-2 d-block d-lg-none">
        Ưu Đãi Tại <span className="text-special">THECAT</span>
      </div>
      <div className="title text-center fw-bold fs-1 text-gr my-2 d-none d-lg-block">
        Ưu Đãi Tại <span className="text-special">THECAT</span>
      </div>
      <div className="container d-block d-lg-none">
        <div className="row my-4">
          <div className="col-6">
            <div className="special-item special-bg p-4 rounded-2">
              <div
                className="sp-img d-flex justify-content-center"
                style={{ height: 100 }}
              >
                <img src={Delivery} className="img-fluid" alt="" />
              </div>
              <div className="sp-info text-center fw-bold fs-6 text-soft-bl my-2">
                Miễn phí vận chuyển nội thành
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="special-item special-bg p-4 rounded-2">
              <div
                className="sp-img d-flex justify-content-center"
                style={{ height: 100 }}
              >
                <img src={Needle} className="img-fluid" alt="" />
              </div>
              <div className="sp-info text-center fw-bold fs-6 text-soft-bl my-2">
                Chứng nhận tiêm chủng đầy đủ
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-6">
            <div className="special-item special-bg p-4 rounded-2">
              <div
                className="sp-img d-flex justify-content-center"
                style={{ height: 100 }}
              >
                <img src={Confirm} className="img-fluid" alt="" />
              </div>
              <div className="sp-info text-center fw-bold fs-6 text-soft-bl my-2">
                Bảo đảm chất lượng sản phẩm
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="special-item special-bg p-4 rounded-2">
              <div
                className="sp-img d-flex justify-content-center"
                style={{ height: 100 }}
              >
                <img src={CatHead} className="img-fluid" alt="" />
              </div>
              <div className="sp-info text-center fw-bold fs-6 text-soft-bl my-2">
                Hoàn tiền, bảo hành trong 1 năm
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-none d-lg-block">
        <div className="row">
          <div className="col-3">
            <div className="special-item p-4 special-bg">
              <div
                className="sp-img d-flex justify-content-center"
                style={{ height: 140 }}
              >
                <img src={Delivery} className="img-fluid" alt="" />
              </div>
              <div className="sp-info text-center fw-medium fs-4 text-soft-bl my-2 px-4">
                Miễn phí vận chuyển nội thành
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="special-item p-4 special-bg">
              <div
                className="sp-img d-flex justify-content-center"
                style={{ height: 140 }}
              >
                <img src={Confirm} className="img-fluid" alt="" />
              </div>
              <div className="sp-info text-center fw-medium fs-4 text-soft-bl my-2 px-4">
                Bảo đảm chất lượng sản phẩm
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="special-item p-4 special-bg">
              <div
                className="sp-img d-flex justify-content-center"
                style={{ height: 140 }}
              >
                <img src={Needle} className="img-fluid" alt="" />
              </div>
              <div className="sp-info text-center fw-medium fs-4 text-soft-bl my-2 px-4">
                Chứng nhận tiêm chủng đầy đủ
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="special-item p-4 special-bg">
              <div
                className="sp-img d-flex justify-content-center"
                style={{ height: 140 }}
              >
                <img src={CatHead} className="img-fluid" alt="" />
              </div>
              <div className="sp-info text-center fw-medium fs-4 text-soft-bl my-2 px-4">
                Hoàn tiền, bảo hành trong 1 năm
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
