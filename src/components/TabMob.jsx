import React from "react";
import { VscHome } from "react-icons/vsc";
import { BiGridAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { servy } from "../db/colors";

const TabMob = ({ selected }) => {
  return (
    <div
      style={{
        width: "100%",
        boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
        position: "fixed",
        bottom: -1,
        backgroundColor: servy.white,
        zIndex: 15,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "11px 19px 11px 19px",
        }}
      >
        <div
          style={
            selected === "home" || selected === "products"
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primary[90],
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primaryShade[40],
                }
          }
          onClick={() => {
            if (selected !== "home") {
              window.location.href = "/";
            }
          }}
        >
          <VscHome style={{ fontSize: 23, marginBottom: 3 }} />
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Home</p>
        </div>
        <div
          style={
            selected === "categories"
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primary[90],
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primaryShade[40],
                }
          }
        >
          <BiGridAlt style={{ fontSize: 23, marginBottom: 3 }} />
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Categories</p>
        </div>
        <div
          style={
            selected === "cart"
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primary[90],
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primaryShade[40],
                }
          }
          onClick={() => {
            if (selected !== "cart") {
              window.location.href = "/cart";
            }
          }}
        >
          <FiShoppingCart style={{ fontSize: 20, marginBottom: 3 }} />
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Cart</p>
        </div>
        <div
          style={
            selected === "wishList"
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primary[90],
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primaryShade[40],
                }
          }
          onClick={() => {
            if (selected !== "wishList") {
              window.location.href = "/wishList";
            }
          }}
        >
          <AiOutlineHeart style={{ fontSize: 20, marginBottom: 3 }} />
          <p style={{ fontSize: 12, fontWeight: "bold" }}>List</p>
        </div>
        <div
          style={
            selected === "account"
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primary[90],
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: servy.primaryShade[40],
                }
          }
        >
          <FaRegUser style={{ fontSize: 20, marginBottom: 3 }} />
          <p
            style={{ fontSize: 12, fontWeight: "bold" }}
            onClick={() => {
              if (selected !== "account") {
                window.location.href = "/account";
              }
            }}
          >
            Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabMob;
