import "../index.css";
import CarouselLogo1 from "/assets/carosel1.png";
import CarouselLogo2 from "/assets/carosel2.png";
import CarouselLogo3 from "/assets/carosel3.png";
import { Carousel } from "bootstrap";
export default function CarouselIndex() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={CarouselLogo1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={CarouselLogo2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={CarouselLogo3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev text-success fs-2"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <i class="bi bi-chevron-left d-none d-sm-block" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next text-success fs-2 "
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <i class="bi bi-chevron-right d-none d-sm-block" aria-hidden="true" />

        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
