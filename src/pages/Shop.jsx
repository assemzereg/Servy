import React from "react";
import Navbar from "../components/Navbar";
import ProductsBox from "../components/ProductsBox";
import data from "../db/productDB";
import { makeStyles } from "@material-ui/core";
import ShopDisc from "../components/ShopDisc";
import Reviews from "../components/Reviews";
import CatCard from "../components/CatCard";
import TabMob from "../components/TabMob";

const useStyles = makeStyles((theme) => ({
  p: {
    width: "96%",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    marginBottom: 16,
    justifyContent: "space-between",
  },
}));

const Shop = () => {
  const core = useStyles();
  const productsL = data.products;
  const shops = data.shops;
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div>
      <Navbar />
      <div className={core.p} style={width < 415 ? { marginTop: 20 } : {}}>
        <ShopDisc shop={shops[0]} width={width} />
      </div>

      <div
        style={
          width < 415
            ? {
                width: "97%",
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
            : {
                width: "98%",
                marginLeft: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }
        }
      >
        <div
          style={
            width < 415
              ? {
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 15,
                }
              : { width: "15%", display: "flex", flexDirection: "column" }
          }
        >
          <div style={width < 415 ? { width: "48%" } : { width: "95%" }}>
            <CatCard width={width} />
          </div>
          <div style={width < 415 ? { width: "48%" } : { width: "95%" }}>
            <Reviews width={width} />
          </div>
        </div>
        <div
          style={
            width < 415
              ? {
                  width: " 98%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }
              : {
                  width: " 85%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }
          }
        >
          <ProductsBox
            name="Featured Products"
            products={productsL}
            slides={width < 415 ? { toShow: 2.12 } : { toShow: 6.75 }}
            width={{ value: "100%" }}
          />
          <ProductsBox
            name="Featured Products"
            products={productsL}
            slides={width < 415 ? { toShow: 2.12 } : { toShow: 6.75 }}
            width={{ value: "100%" }}
          />
        </div>
      </div>
      {width < 415 ? <TabMob selected={"products"} /> : <></>}
    </div>
  );
};

export default Shop;
