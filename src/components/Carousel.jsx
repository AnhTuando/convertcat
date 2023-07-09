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
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
