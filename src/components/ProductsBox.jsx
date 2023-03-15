import React from "react";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import { safka, servy } from "../db/colors";
import data from "../db/productDB";
const useStyles = makeStyles((theme) => ({
  box: {
    width: 681,
    backgroundColor: servy.ThirdGreenShade[20],
    marginBottom: 8,
    borderRadius: 10,
  },
  head: {
    height: 23,
    backgroundColor: servy.primary[10],
    fontSize: 14,
    fontWeight: 600,
    padding: 10,
    borderRadius: "10px 10px 0px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const ProductsBox = ({ products, name, shop, slides, width }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slides.toShow,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: slides.toShow - 2.75,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: slides.toShow - 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: slides.toShow - 0.75,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: slides.toShow - 3.65,
        },
      },
    ],
  };
  const core = useStyles();
  const productlist =
    shop === undefined || shop === ""
      ? products
      : products.filter((e) => e.Ref_Shop === shop.nomShop);
  const shops = data.shops;
  return (
    <div className={core.box} style={width ? { width: width.value } : null}>
      <div className={core.head}>
        <div>
          {shop === undefined || shop === "" ? (
            name
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                width: "fit-content",
              }}
            >
              From
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  marginLeft: 5,
                }}
              >
                <img
                  src={shop.photo}
                  alt=""
                  style={{ width: 24, height: 24, borderRadius: "50%" }}
                />
                <div style={{ marginLeft: 3 }}>
                  <p style={{ fontSize: 12 }}>{shop.nomShop}</p>
                  <p style={{ fontSize: 6, color: safka.grey }}>
                    {shop.location}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <a
          href="/products"
          style={{ fontSize: 10, fontWeight: 500, color: servy.primary[0] }}
        >
          See More
        </a>
      </div>
      <div style={{ padding: "10px 5px" }}>
        <Slider {...settings}>
          {productlist.map((product, index) => {
            return (
              <div key={index} style={{ margin: 20 }}>
                <Product
                  props={product}
                  shop={shops.find((e) => e.nomShop === product.Ref_Shop)}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsBox;
