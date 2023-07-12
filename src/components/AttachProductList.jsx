import { useState } from "react";
import accessory from "/assets/accessory.png";

function AttachProduct({ active, onClick }) {
  return (
    <div
      className={`ds-pr-1 h-100 ${active ? "border-gr" : "border-none"} `}
      onClick={onClick}
    >
      <img src={accessory} className="img-fluid h-100" alt="" />
    </div>
  );
}

export default function AttachProductList({ attachProduct }) {
  const [isAttach, setIsAttach] = useState(false);
  const [buttons, setButtons] = useState([
    { button: <AttachProduct />, active: false },
    { button: <AttachProduct />, active: false },
    { button: <AttachProduct />, active: false },
  ]);

  const handleButtonClick = (index) => {
    const updatedButtons = buttons.map((button, i) => {
      if (i === index) {
        return {
          ...button,
          active: !button.active,
        };
      }
      return {
        ...button,
        active: false,
      };
    });

    setButtons(updatedButtons);
    const anyButtonActive = updatedButtons.some((button) => button.active);
    setIsAttach(anyButtonActive);
    attachProduct = isAttach;
    console.log(isAttach);
  };
  return (
    <div className="item d-flex">
      {buttons.map((button, index) => (
        <AttachProduct
          id={index}
          active={button.active}
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
}
