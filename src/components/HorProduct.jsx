import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEye,
  AiFillStar,
} from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { servy } from "../db/colors";

const useStyles = makeStyles((theme) => ({
  HP: {
    width: "97.5%",
    height: 211,
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "white",
    alignItems: "center",
  },
  Image: {
    padding: "4px 10px 0px 10px",
    width: "14%",
    height: "98%",
  },
  LL: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productDisc: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "95%",
    marginLeft: 10,
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
          justifyContent: "space-between",
          width: 80,
          cursor: "pointer",
        }}
      >
        <AiOutlineEye />
        View Product
      </div>
      <div
        style={{
          fontSize: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: 68,
          cursor: "pointer",
        }}
      >
        <AiOutlineEye />
        View Seller
      </div>
      <div
        style={{
          fontSize: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: 90,
          cursor: "pointer",
        }}
      >
        <MdReportProblem />
        Report Product
      </div>
    </div>
  );
};

const HorProduct = ({ props, shop }) => {
  const core = useStyles();
  const [loved, setloved] = React.useState(false);
  const [popUpMenu, setpopUpMenu] = React.useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div
      className={core.HP}
      style={width < 415 ? { width: "100%", height: 205 } : {}}
    >
      <div className={core.Image} style={width < 415 ? { width: "35%" } : {}}>
        <div className={core.LL}>
          <IoIosMore
            style={{ cursor: "pointer", color: "#C5BDB6" }}
            onClick={() => setpopUpMenu(!popUpMenu)}
          />
          {popUpMenu && PopUpMenu()}
          <div
            style={{ width: 16, height: 16, cursor: "pointer" }}
            onClick={() => setloved(!loved)}
            // onClick={() => {
            //   setloved(!loved);
            //   var wishList = JSON.parse(sessionStorage.getItem("wishList"));
            //   if (!loved) {
            //     if (wishList) {
            //       wishList.content.push({ product: props, quantity: 1 });
            //       sessionStorage.setItem(
            //         "wishList",
            //         JSON.stringify({ content: wishList.content })
            //       );
            //     } else {
            //       wishList = [];
            //       wishList.push({ product: props, quantity: 1 });
            //       sessionStorage.setItem(
            //         "wishList",
            //         JSON.stringify({ content: wishList })
            //       );
            //     }
            //   } else {
            //     if (wishList) {
            //       wishList.content.every((pro, index) => {
            //         if (pro.product === props) {
            //           var WL = wishList;
            //           WL.splice(index, 1);
            //           sessionStorage.setItem(
            //             "wishList",
            //             JSON.stringify({
            //               content: WL,
            //             })
            //           );
            //           return false;
            //         }
            //         return true;
            //       });
            //     }
            //   }
            //   if (typeof window !== "undefined") {
            //     console.log(window.location);
            //     if (window.location.pathname === "/wishlist") {
            //       window.location.reload();
            //     }
            //   }
            // }}
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
          style={{ width: "100%", position: "relative", height: "89%" }}
        />
      </div>
      <div
        className={core.productDisc}
        // style={width < 415 ? { width: "70%" } : {}}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "75%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "35%",
              marginTop: 5,
            }}
          >
            <p
              style={{
                fontSize: 19,
                fontWeight: 400,
                color: servy.primaryShade[90],
                fontWeight: "bold",
              }}
            >
              {props.nomProduit}
            </p>
            <div
              style={{
                paddingTop: 2,
                width: "auto",
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
                  width: 17,
                  height: 17,
                  borderRadius: "50%",
                }}
              />
              <p
                style={{
                  width: "auto",
                  fontSize: 10,
                  color: servy.primaryShade[70],
                }}
              >
                {shop.nomShop}
              </p>
            </div>
          </div>
          <p
            style={
              width < 415
                ? {
                    fontSize: 8,
                    fontWeight: 400,
                    color: servy.primaryShade[40],
                  }
                : {
                    fontSize: 12,
                    fontWeight: 400,
                    color: servy.primaryShade[40],
                  }
            }
          >
            {props.Description}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 19,
                fontWeight: 600,
                marginRight: 10,
                display: "flex",
                alignItems: "center",
                color: servy.primaryShade[90],
              }}
            >
              {24000}{" "}
              <p
                style={{
                  fontSize: 14,

                  fontWeight: 400,
                  marginLeft: 5,
                }}
              >
                Da
              </p>
            </p>
            <p
              style={{
                color: servy.secondary[70],
                fontSize: 11,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
              }}
            >
              4.5 <AiFillStar style={{ marginLeft: 5 }} />
            </p>
          </div>
        </div>
        <button
          style={
            width < 415
              ? {
                  backgroundColor: servy.secondary[0],
                  color: "white",
                  width: "80%",
                  height: 30,
                  borderRadius: 5,
                  border: 0,
                  cursor: "pointer",
                  marginBottom: 12,
                }
              : {
                  backgroundColor: servy.secondary[0],
                  color: "white",
                  width: "20%",
                  height: 30,
                  borderRadius: 5,
                  border: 0,
                  cursor: "pointer",
                  marginBottom: 12,
                }
          }
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

export default HorProduct;
