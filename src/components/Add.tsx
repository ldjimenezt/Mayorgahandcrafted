"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  // TEMPORALY
  const stock = 4

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left!
            <br /> {"Dont't"} miss it
          </div>
        </div>
        <button className="rounded-md bg-black border border-black text-white w-max text-xs hover:bg-transparent hover:text-black py-3 px-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
