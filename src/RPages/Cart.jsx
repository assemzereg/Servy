import React, { useState, useEffect } from "react";
import MobCart from "../pages/MobCart";
import DeskCart from "../pages/Cart";

const Cart = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return <div>{width < 415 ? <MobCart /> : <DeskCart />}</div>;
};

export default Cart;
