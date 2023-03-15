//dependences
import React from "react";

//CSS
import "./pages.css";
import { makeStyles } from "@material-ui/core";

// Components
import Navbar from "../components/Navbar";
import Trendsellers from "../components/Trendsellers";
import Helloo from "../components/Categories";
import ProductsBox from "../components/ProductsBox";
// db
import { trendyStores } from "../db/trendyShops";
import { trendyProducts } from "../db/trendyProducts";
import data from "../db/productDB";
const useStyle = makeStyles((theme) => ({
  home1: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    marginTop: 10,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  homeSellers: {
    width: "22%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 10,
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      width: "99%",
    },
  },
  homeProducts: {
    width: "76%",
    display: "flex",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      width: "99%",
    },
  },
  addDesk: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  addTab: {
    width: "99%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const Home = () => {
  const products = data.products;
  const shops = data.shops;
  const shop = shops.find((e) => e.nomShop === "my_shirtsdz");
  const props1 = {
    title: "Trendy Products",
    content: trendyProducts,
  };
  const props2 = {
    title: "Trendy Sellers",
    content: trendyStores,
  };
  const core = useStyle();
  // const shop = {
  //   image: "/person.jpeg",
  //   name: "Malux Digital Shop",
  //   location: "Alger",
  // };
  return (
    <div>
      <Navbar page="home" Account="" />
      <Helloo />
      <div className={core.home1}>
        <div className={core.homeSellers}>
          <Trendsellers props={props1} />
          <img
            src="/Add.png"
            alt=""
            style={{ width: 282, height: 304, marginBottom: 8 }}
            className={core.addDesk}
          />
          <Trendsellers props={props2} />
          <img
            src="/Add.png"
            alt=""
            style={{ width: 282, height: 304, marginBottom: 8 }}
            className={core.addDesk}
          />
        </div>
        <div className={core.homeProducts}>
          <ProductsBox
            name="Trendy On Servy"
            products={products}
            slides={{ toShow: 5.75 }}
            width={{ value: "100%" }}
          />
          <ProductsBox
            name="Based on your Prefrences"
            products={products}
            slides={{ toShow: 5.75 }}
            width={{ value: "100%" }}
          />
          <ProductsBox
            name="From Shop"
            products={products}
            shop={shop}
            slides={{ toShow: 5.75 }}
            width={{ value: "100%" }}
          />
        </div>
        <img src="/AddCat.png" alt="" className={core.addTab} />
      </div>
    </div>
  );
};

export default Home;
