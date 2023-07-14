import { useState } from "react";
import accessory from "/assets/accessory.png";

export default function AttachProduct({ active, onClick }) {
   
  return (
    <div
      className={`ds-pr-1 h-100 ${active ? "border-gr" : "border-none"} `}
      onClick={onClick}
    >
      <img src={accessory} className="img-fluid h-100" alt="" />
    </div>
  );
}
