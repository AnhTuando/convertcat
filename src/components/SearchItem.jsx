import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
export function SearchItem({ id, name, price, img, path, onClick }) {
  return (
    <>
      <NavLink
        key={id}
        to={path}
        onClick={onClick}
        className="item text-decoration-none"
      >
        <div className="row d-flex justify-content-center py-2">
          <div className="col-6 img-wrap" style={{ height: 120 }}>
            <img src={img} className="img-fluid h-100" alt="" />
          </div>
          <div className="col-6 wrap-info d-flex flex-column justify-content-center gap-2">
            <div className="pr-name fs-5 fw-bold text-gr">{name}</div>

            <div className="pr-price fs-5 text-soft-bl">
              <span className="price-value ff-roboto">{price}</span>
              <span className="ff-roboto">VND</span>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

// set link by useState, handleClick
