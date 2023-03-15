import React, { useState, useEffect } from "react";
import MobHome from "../pages/MobHome";
import DeskHome from "../pages/Home";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return <div>{width < 415 ? <MobHome /> : <DeskHome />}</div>;
};

export default Home;
