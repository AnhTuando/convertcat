import "../cats.css";
import CatsContentFilter from "./CatsContentFilter";
import CatsContentProducts from "./CatContentProducts";
export default function CatsContent() {
  return (
    <section className="pc-content">
      <div className="container">
        <div className="row">
          <CatsContentFilter />

          <div className="products col-12 col-lg-9 my-3">
            <CatsContentProducts />
          </div>
        </div>
      </div>
    </section>
  );
}
