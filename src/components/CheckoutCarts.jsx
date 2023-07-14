import { useState, useEffect } from "react";
import CheckoutItems from "./CheckoutItems";
export default function CheckoutCarts() {
  let locaDatas = JSON.parse(localStorage.getItem("myArray")) || [];
  const [localData, setLocalData] = useState(locaDatas);
  console.log(locaDatas);
  const handleDeleleProduct = (id) => {
    const filteredData = localData.filter((item) => item.id !== id);
    setLocalData(filteredData);
    localStorage.setItem("myArray", JSON.stringify(filteredData));
  };
  const handleIncrease = (id) => {
    const updatedData = localData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1, // Tăng giá trị quantity lên 1
        };
      }
      return item;
    });
    setLocalData(updatedData);
    localStorage.setItem("myArray", JSON.stringify(updatedData));
  };
  const handleDecrease = (id) => {
    const updatedData = localData.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return {
            ...item,

            quantity: item.quantity - 1, // Tăng giá trị quantity lên 1
          };
        }
      }
      return item;
    });
    setLocalData(updatedData);
    localStorage.setItem("myArray", JSON.stringify(updatedData));
  };
  // localStorage.removeItem("myArray");

  return (
    <div className="col-12 col-lg-6 check-cart bg-light p-4 rounded-2 mb-2">
      <div className="row">
        <div className="wrap-update-title d-flex justify-content-between">
          <div className="title text-gr fw-medium">SẢN PHẨM</div>
        </div>
        <div className="wrap-cart-items my-2">
          {localData.map((item) => (
            <CheckoutItems
              name={item.name}
              img={item.img}
              price={item.price}
              attachProduct={item.attachProduct}
              key={item.id}
              quantity={item.quantity}
              handleDelete={() => handleDeleleProduct(item.id)}
              handleIncrease={() => handleIncrease(item.id)}
              handleDecrease={() => handleDecrease(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
