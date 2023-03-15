import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { IoIosMore } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";
import { safka, servy } from "../db/colors";
const useStyles = makeStyles((theme) => ({
  pCard: {
    width: 142,
    height: 270,
    backgroundColor: "white",
    display: "flex",
    flexWrap: "wrap",
    margin: 2,
    borderRadius: 5,
    padding: "4px 8px 8px 8px",
  },
  pCard_1: {
    padding: "4px 10px 10px",
    width: "100%",
    height: 153,
  },
  LL: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pCard_2: {
    width: "100%",
    height: 91,
    display: "flex",
    padding: "4px 8px 8px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    fontSize: 10,
    display: "flex",
    width: "inherit",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  PName: {
    fontSize: 11,
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      fontSize: 11,
      fontWeight: "bold",
      cursor: "pointer",
      color: safka.secondary,
    },
  },
}));
const PopUpMenu = () => {
  return (
    <div
      style={{
        listStyle: "none",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "12px 8px",
        width: 100,
        height: 83,
        background: "#ffffff",
        boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
        borderRadius: 4,
        position: "absolute",
        justifyContent: "space-around",
        zIndex: 10,
        marginLeft: 6,
        marginTop: 11,
      }}
    >
      <div
        style={{
          fontSize: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <AiOutlineEye style={{ marginRight: "10%" }} />
        View Product
      </div>
      <div
        style={{
          fontSize: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <AiOutlineEye style={{ marginRight: "10%" }} />
        View Seller
      </div>
      <div
        style={{
          fontSize: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <MdReportProblem style={{ marginRight: "10%" }} />
        Report Product
      </div>
    </div>
  );
};

const Product = ({ props, shop, width }) => {
  const [popUpMenu, setpopUpMenu] = useState(false);
  const [loved, setloved] = useState(false);
  const w = width;
  const core = useStyles();
  // const shops = React.useContext(ShopContext);
  // const shop = data.shops.find((element) => element.nomShop === props.Ref_Shop);
  return (
    <div className={core.pCard} style={w ? { width: w } : {}}>
      <div className={core.pCard_1}>
        <div className={core.LL}>
          <IoIosMore
            style={{ cursor: "pointer" }}
            onClick={() => setpopUpMenu(!popUpMenu)}
          />
          {popUpMenu && PopUpMenu()}
          <div
            style={{ width: 16, height: 16, cursor: "pointer" }}
            onClick={() => {
              setloved(!loved);
              var wishList = JSON.parse(sessionStorage.getItem("wishList"));
              if (!loved) {
                if (wishList) {
                  wishList.content.push({ product: props, quantity: 1 });
                  sessionStorage.setItem(
                    "wishList",
                    JSON.stringify({ content: wishList.content })
                  );
                } else {
                  wishList = [];
                  wishList.push({ product: props, quantity: 1 });
                  sessionStorage.setItem(
                    "wishList",
                    JSON.stringify({ content: wishList })
                  );
                }
              } else {
                if (wishList) {
                  wishList.content.every((pro, index) => {
                    if (pro.product === props) {
                      var WL = wishList;
                      WL.splice(index, 1);
                      sessionStorage.setItem(
                        "wishList",
                        JSON.stringify({
                          content: WL,
                        })
                      );
                      return false;
                    }
                    return true;
                  });
                }
              }
              if (typeof window !== "undefined") {
                if (window.location.pathname === "/wishlist") {
                  window.location.reload();
                }
              }
            }}
          >
            {loved ? (
              <AiFillHeart style={{ color: "#FF5129" }} />
            ) : (
              <AiOutlineHeart style={{ color: "gray" }} />
            )}
          </div>
        </div>
        <img
          src={props.Photos[0]}
          alt="product image"
          style={{ width: "100%", height: 135, position: "relative" }}
          // style={{ width: "100%", position: "relative" }}
        />
      </div>
      <div className={core.pCard_2}>
        <div
          style={{
            width: 124,
            height: 52,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: 124, height: 27 }}>
            <p
              className={core.PName}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = "/product";
                }
              }}
            >
              {!props.nomProduit ? <br /> : ""}
              {props.nomProduit.length <= 20
                ? props.nomProduit
                : props.nomProduit.substring(0, 20) + "..."}
            </p>
            <div
              style={{
                paddingTop: 2,
                width: "auto",
                height: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = "/shop";
                }
              }}
            >
              <img
                src={shop.photo}
                alt="person"
                style={{
                  marginRight: 3,
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                }}
              />
              <p
                style={{
                  width: "auto",
                  fontSize: 7,
                  color: "gray",
                }}
              >
                {shop.nomShop}
              </p>
            </div>
          </div>
          <p
            style={{
              color: "gray",
              fontSize: 8,
              width: 48,
              height: 17,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              color: servy.secondary[60],
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              {props.prix}
            </p>
            Da
          </p>
        </div>
        <button
          style={{
            backgroundColor: servy.secondary[0],
            color: servy.white,
            width: "100%",
            height: 30,
            borderRadius: 10,
            border: 0,
            cursor: "pointer",
          }}
          onClick={() => {
            var cart = JSON.parse(sessionStorage.getItem("cart"));
            if (cart) {
              cart.content.push({ product: props, quantity: 1 });
              sessionStorage.setItem(
                "cart",
                JSON.stringify({ content: cart.content })
              );
            } else {
              cart = [];
              cart.push({ product: props, quantity: 1 });
              sessionStorage.setItem("cart", JSON.stringify({ content: cart }));
            }
            if (typeof window !== "undefined") {
              console.log(window.location);
              if (window.location.pathname === "/cart") {
                window.location.reload();
              }
            }
            alert("product added to cart successfully");
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
