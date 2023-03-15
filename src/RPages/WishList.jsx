import React, { useState, useEffect } from "react";
import MobWishList from "../pages/MobWishList";
import DeskWishList from "../pages/WishList";
const WishList = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return <div>{width < 415 ? <MobWishList /> : <DeskWishList />}</div>;
};

export default WishList;
