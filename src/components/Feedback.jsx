import "../index.css";
import Swiper from "swiper";
import "swiper/css";
import Tan from "/assets/feedback/Tan.jpg";
import Khoi from "/assets/feedback/Khoi.jpg";
import PhuongPhat from "/assets/feedback/Phuong&Phat.jpg";
import Zouma from "/assets/feedback/zouma.png";
import { useEffect } from "react";

export default function Feedback() {
  useEffect(() => {
    // Swiper
    // PC
    let swiperPc = new Swiper(".mySwiper-PC", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // Mobile
    let swiperPC = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
  return (
    <secion className="feedback my-5">
      <div className="container">
        <div className="title text-center fw-bold fs-4 text-gr mt-2 d-block d-sm-none">
          FEEDBACK
        </div>
        <div className="title text-center fw-bold fs-1 text-gr my-2 d-none d-lg-block">
          FEEDBACK
        </div>
        {/* Slider Pc */}
        <div
          className="swiper mySwiper-PC d-none d-lg-block swiper-initialized swiper-horizontal swiper-backface-hidden"
          style={{ padding: 15 }}
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-cf80a63d118a10ce2"
            aria-live="polite"
          >
            <div
              className="swiper-slide my-2 rounded-3 custom-shadow swiper-slide-active"
              role="group"
              aria-label="1 / 4"
              style={{ width: 282, marginRight: 30 }}
            >
              <div className="rate-item">
                <div className="p-4 gap-2 d-flex flex-column justify-content-between align-items-center h-100">
                  <div className="img-wrap w-50">
                    <img
                      src={Tan}
                      className="img-fluid rounded-5 w-100"
                      alt=""
                    />
                  </div>
                  <div className="fb-name text-info fw-bold fs-4">
                    Nguyễn Trọng Tân
                  </div>
                  <div
                    className="fb-des fs-5 fw-medium text-center"
                    style={{ height: 160 }}
                  >
                    " Bạn nhân viên nữ tư vấn nhiệt tình, không gian mua sắm
                    thoải mái, bé mèo mua về ăn lắm ỉa nhiều, lông mượt "
                  </div>
                  <div className="rate d-flex fs-4 gap-4">
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide my-2 rounded-3 custom-shadow swiper-slide-next"
              role="group"
              aria-label="2 / 4"
              style={{ width: 282, marginRight: 30 }}
            >
              <div className="rate-item">
                <div className="p-4 gap-2 d-flex flex-column justify-content-between align-items-center h-100">
                  <div className="img-wrap w-50">
                    <img src={Zouma} className="img-fluid rounded-5" alt="" />
                  </div>
                  <div className="fb-name text-info fw-bold fs-4">
                    Kurt Zouma
                  </div>
                  <div
                    className="fb-des fs-5 fw-medium text-center"
                    style={{ height: 160 }}
                  >
                    " The support that I receive from my team-mates from the
                    staff, everyone at the club and even from the fans, it's
                    been unreal "
                  </div>
                  <div className="rate d-flex fs-4 gap-4">
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide my-2 rounded-3 custom-shadow"
              role="group"
              aria-label="3 / 4"
              style={{ width: 282, marginRight: 30 }}
            >
              <div className="rate-item">
                <div className="p-4 gap-2 d-flex flex-column justify-content-between align-items-center h-100">
                  <div className="img-wrap w-50">
                    <img
                      src={PhuongPhat}
                      className="img-fluid rounded-5 w-100"
                      alt=""
                    />
                  </div>
                  <div className="fb-name text-info fw-bold fs-4">
                    Phương &amp; Phát
                  </div>
                  <div
                    className="fb-des fs-5 fw-medium text-center"
                    style={{ height: 160 }}
                  >
                    " They're just a cat !! they don't do much "
                  </div>
                  <div className="rate d-flex fs-4 gap-4">
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide my-2 rounded-3 custom-shadow"
              role="group"
              aria-label="4 / 4"
              style={{ width: 282, marginRight: 30 }}
            >
              <div className="rate-item">
                <div className="p-4 gap-2 d-flex flex-column justify-content-between align-items-center h-100">
                  <div className="img-wrap w-50">
                    <img
                      src={Khoi}
                      className="img-fluid w-100 rounded-5"
                      alt=""
                    />
                  </div>
                  <div className="fb-name text-info fw-bold fs-4">
                    Hồ Anh Khôi
                  </div>
                  <div
                    className="fb-des fs-5 fw-medium text-center"
                    style={{ height: 160 }}
                  >
                    " Cỏ mèo mà Shop bán không những chỉ dùng cho mèo mà còn
                    dùng được với người "
                  </div>
                  <div className="rate d-flex fs-4 gap-4">
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="star text-warning">
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
                aria-current="true"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
              />
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        {/*End Slider Pc */}
        {/* Mobile Slider */}
        <div
          className="swiper mySwiper d-lg-none swiper-initialized swiper-horizontal swiper-backface-hidden"
          style={{ padding: 15 }}
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-d3c6c866e2e6bdf2"
            aria-live="polite"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <div
              className="swiper-slide swiper-slide-active"
              role="group"
              aria-label="1 / 4"
              style={{ width: 666, marginRight: 30 }}
            >
              <div className="row custom-shadow py-3 my-3">
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <div className="fb-img">
                    <img src={Tan} className="img-fluid rounded-5" alt="" />
                  </div>
                </div>
                <div className="col-9 d-flex flex-column gap-2">
                  <div className="fb-name text-info fw-bold fs-5">
                    Nguyễn Trọng Tân
                  </div>
                  <div
                    className="fb-des fw-medium d-flex justify-content-center align-items-center"
                    style={{ height: 80 }}
                  >
                    " Bạn nhân viên nữ tư vấn nhiệt tình, không gian mua sắm
                    thoải mái, bé mèo mua về ăn lắm ỉa nhiều, lông mượt "
                  </div>
                  <div className="rate d-flex gap-3">
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              role="group"
              aria-label="2 / 4"
              style={{ width: 666, marginRight: 30 }}
            >
              <div className="row custom-shadow py-3 my-3">
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <div className="fb-img">
                    <img src={Zouma} className="img-fluid rounded-5" alt="" />
                  </div>
                </div>
                <div className="col-9 d-flex flex-column gap-2">
                  <div className="fb-name text-info fw-bold fs-5">
                    Kurt Zouma
                  </div>
                  <div
                    className="fb-des fw-medium d-flex justify-content-center align-items-center"
                    style={{ height: 80 }}
                  >
                    " The support that I receive from my team-mates from the
                    staff, everyone at the club and even from the fans, it's
                    been unreal "
                  </div>
                  <div className="rate d-flex gap-3">
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              role="group"
              aria-label="3 / 4"
              style={{ width: 666, marginRight: 30 }}
            >
              <div className="row custom-shadow py-3 my-3">
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <div className="fb-img">
                    <img
                      src={PhuongPhat}
                      className="img-fluid rounded-5"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-9 d-flex flex-column gap-2">
                  <div className="fb-name text-info fw-bold fs-5">
                    Phương &amp; Phát
                  </div>
                  <div
                    className="fb-des fw-medium d-flex align-items-center"
                    style={{ height: 80 }}
                  >
                    " They're just a cat !! they don't do much "
                  </div>
                  <div className="rate d-flex gap-3">
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              role="group"
              aria-label="4 / 4"
              style={{ width: 666, marginRight: 30 }}
            >
              <div className="row custom-shadow py-3 my-3">
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <div className="fb-img">
                    <img src={Khoi} className="img-fluid rounded-5" alt="" />
                  </div>
                </div>
                <div className="col-9 d-flex flex-column gap-2">
                  <div className="fb-name text-info fw-bold fs-5">
                    Hồ Anh Khôi
                  </div>
                  <div
                    className="fb-des fw-medium d-flex justify-content-center align-items-center"
                    style={{ height: 80 }}
                  >
                    " Cỏ mèo mà Shop bán không những chỉ dùng cho mèo mà còn
                    dùng được với người "
                  </div>
                  <div className="rate d-flex gap-3">
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                    <div className="star">
                      <i className="bi bi-star-fill text-warning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
                aria-current="true"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 3"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 4"
              />
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        {/* End Mobile Slider */}
        {/* End Slider Pc */}
      </div>
    </secion>
  );
}
