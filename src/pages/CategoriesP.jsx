//dependences
import React from "react";
import { useParams } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
import Trendsellers from "../components/Trendsellers";
import Categories from "../components/Categories";
import ProductsBox from "../components/ProductsBox";
// db
import { trendyStores } from "../db/trendyShops";
import { trendyProducts } from "../db/trendyProducts";
import data from "../db/productDB";
import SimpleSlider from "../components/SimpleSlider";

const CategoriesP = () => {
  const { id } = useParams();
  console.log(id);
  const products = data.products;
  const shops = data.shops;
  const shop = shops.find((e) => e.nomShop === "my_shirtsdz");
  const props1 = {
    title: "Trendy mobile Products",
    content: trendyProducts,
  };
  const props2 = {
    title: "Trendy mobile Sellers",
    content: trendyStores,
  };
  const categories = [
    "/categ/apple.svg",
    "/categ/samsung.svg",
    "/categ/nokia.svg",
    "/categ/huawei.svg",
    "/categ/lenovo.svg",
    "/categ/1+.svg",
    "/categ/xiaomi.svg",
    "/categ/apple.svg",
    "/categ/samsung.svg",
    "/categ/nokia.svg",
    "/categ/huawei.svg",
    "/categ/lenovo.svg",
    "/categ/1+.svg",
    "/categ/xiaomi.svg",
  ];
  // console.log("the categorie selected is " + cat);
  return (
    <div>
      <Navbar page="home" Account="" />
      <Categories props={{ cat: id }} />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "auto",
          marginTop: 10,
        }}
      >
        <div
          style={{
            width: "22%",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            marginLeft: 10,
          }}
        >
          <Trendsellers props={props1} />
          <img
            src="/Add.png"
            alt=""
            style={{ width: 282, height: 304, marginBottom: 8 }}
          />
          <Trendsellers props={props2} />
          <img
            src="/Add.png"
            alt=""
            style={{ width: 282, height: 304, marginBottom: 8 }}
          />
        </div>
        <div
          style={{
            width: "76%",
            display: "flex",
            height: "fit-content",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
          }}
        >
          <SimpleSlider
            props={{
              list: categories,
              slides: { toShow: 9.25, toScroll: 5 },
              shop: false,
              sizeBox: {
                width: 100,
                height: 100,
              },
            }}
          />
          <ProductsBox
            name="Trendy Products"
            products={products}
            slides={{ toShow: 6.75 }}
            width={{ value: "100%" }}
          />

          <ProductsBox
            name="From Shop"
            products={products}
            shop={shop}
            slides={{ toShow: 6.75 }}
            width={{ value: "100%" }}
          />
          <img src="/AddCat.png" alt="" style={{ width: "99%", height: 276 }} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesP;
