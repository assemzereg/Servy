import React from "react";
import Navbar from "../components/Navbar";
import SimpleSlider from "../components/SimpleSlider";
import TabMob from "../components/TabMob";
import data from "../db/productDB";
import Trendsellers from "../components/Trendsellers";
import { trendyProducts } from "../db/trendyProducts";
import ProductsBox from "../components/ProductsBox";

const MobHome = () => {
  const props1 = {
    title: "Trendy Products",
    content: trendyProducts,
    width: "98%",
  };
  const shops = data.shops;
  const products = data.products;
  const add = "/AddCat.png";
  return (
    <div>
      <Navbar />
      <div style={{ margin: "10px 7px" }}>
        <SimpleSlider
          props={{
            list: shops,
            shop: true,
            slides: { toShow: 3.1, toScroll: 1 },
            sizeBox: { width: 103, height: 100 },
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Trendsellers props={props1} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ProductsBox
          name="Trendy On Servy"
          products={products}
          slides={{ toShow: 5.75 }}
          width={{ value: "98%" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ProductsBox
          name="Trendy On Servy"
          products={products}
          slides={{ toShow: 5.75 }}
          width={{ value: "98%" }}
        />
      </div>
      <img src={add} alt="" style={{ width: "98%", alignSelf: "center" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ProductsBox
          name="Trendy On Servy"
          products={products}
          slides={{ toShow: 2.1 }}
          width={{ value: "98%" }}
        />
      </div>
      <TabMob selected={"home"} />
    </div>
  );
};

export default MobHome;
