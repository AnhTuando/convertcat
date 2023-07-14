import "../cats.css";
import { useState } from "react";
export default function CatSubInfo({
  onMouseEnter,
  onMouseLeave,
  color,
  furr,
  furrLoss,
  size,
  isHovered,
  trueId,
}) {
  return (
    <div
      className={`sub-info position-absolute ${
        trueId ? "" : "d-none"
      } z-1 top-0 text-dark bg-white border px-2 py-3 d-flex flex-column gap-3`}
      style={{ width: "fit-content" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="color">
        <span>Kiểu màu: </span> {color}
      </div>
      <div className="furr">
        {" "}
        <span>Kiểu lông: </span>
        {furr}
      </div>
      <div className="furr-loss">
        {" "}
        <span>Rụng lông: </span>
        {furrLoss}
      </div>
      <div className="size">
        <span>Kích cỡ: </span>
        {size}
      </div>
    </div>
  );
}
