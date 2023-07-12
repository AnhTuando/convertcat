import "../cats.css";
import CatsContentFilter from "./CatsContentFilter";
import CatsContentProducts from "./CatContentProducts";
import { useState } from "react";
export default function CatsContent() {
  const [catData, setCatData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <section className="pc-content">
      <div className="container">
        <div className="row">
          <CatsContentFilter
            setCatData={setCatData}
            setIsUpdate={setIsUpdate}
          />

          <div className="products col-12 col-lg-9 my-3">
            <CatsContentProducts catObject={catData} isUpdate={isUpdate} />
          </div>
        </div>
      </div>
    </section>
  );
}
