import React, { useState, useEffect } from "react";
import "primeflex/primeflex.css";
import { InputText } from "primereact/inputtext";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import { FaRegUser } from "react-icons/fa";
import { safka, servy } from "../db/colors";
import { BsTranslate } from "react-icons/bs";
const popUpAccount = () => {
  return (
    <div
      style={{
        padding: 5,
        width: 125,
        height: 51,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fbfbfb",
        position: "absolute",
        justifyContent: "space-around",
        marginTop: 34,
        marginLeft: 41,
      }}
    >
      <p
        style={{ fontSize: 12, fontWeight: 500, cursor: "pointer" }}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }}
      >
        Login
      </p>
      <hr style={{ backgroundColor: safka.main, height: 1, borderWidth: 0 }} />
      <p
        style={{ fontSize: 12, fontWeight: 500, cursor: "pointer" }}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.location.href = "/signup";
          }
        }}
      >
        Create Account
      </p>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  choices: {
    margin: 10,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "gray",
    cursor: "pointer",
    justifyContent: "center",
  },
  navbar: {
    height: "10vh",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "hazy",
  },
  mainDiv: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: "auto",
  },
}));
const Navbar = ({ page, Account }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [Search, setSearch] = useState("");
  const [accountPopUp, setAccountPopUp] = useState(false);
  const core = useStyles();
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const hhh = async (e) => {
    e.preventDefault();
    if (!Search) {
      return;
    }
    console.log("you Searched for" + Search);
  };
  return (
    <div
      style={
        width < 415
          ? {
              backgroundColor: servy.primary[10],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }
          : { display: "flex", flexDirection: "column", alignItems: "center" }
      }
    >
      <img
        src="/top_Pub.png"
        alt=""
        style={
          width < 415
            ? { width: "100%", height: 43 }
            : { width: "90%", height: 43 }
        }
      />
      <nav
        className={core.navbar}
        style={
          width < 415
            ? { backgroundColor: servy.primary[10], width: "100%" }
            : {}
        }
      >
        <div
          style={
            width < 415
              ? {
                  display: "flex",
                  flexDirection: "row",
                  justifyItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  padding: 10,
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  justifyItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }
          }
        >
          <img
            src="/logoNav.png"
            alt="logo Safka"
            style={{ width: 102, height: 32, cursor: "pointer" }}
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/";
              }
            }}
          />
          {width < 415 ? (
            <div
              style={{
                width: "15%",
                fontSize: 23,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AiOutlineSearch />
              <BsTranslate />
            </div>
          ) : (
            <>
              {page === "products" ? (
                <></>
              ) : (
                <form
                  onSubmit={hhh}
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.location.href = "/products";
                    }
                  }}
                >
                  <span
                    style={{ width: "100%" }}
                    className="p-input-icon-left"
                    type="submit"
                  >
                    <i
                      className="pi pi-search"
                      style={{
                        position: "absolute",
                        padding: 6,
                        paddingTop: 10.9,
                        width: 13,
                        height: 13,
                        color: "gray",
                      }}
                    >
                      <AiOutlineSearch />
                    </i>
                    <InputText
                      placeholder="Search"
                      style={{
                        width: "100%",
                        // height: 34,
                        height: 40,
                        paddingLeft: 25,
                        borderRadius: 5,
                        borderColor: safka.border,
                        borderWidth: 1,
                        cursor: "pointer",
                      }}
                      onSubmit={(e) => {
                        console.log(e);
                        setSearch(e.target.value);
                      }}
                      type="search"
                    />
                  </span>
                </form>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "fit-content",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  className={core.choices}
                  style={
                    page === "cart"
                      ? { color: "black", fontWeight: "bold" }
                      : {}
                  }
                  onClick={() => {
                    if (page !== "cart") {
                      if (typeof window !== "undefined") {
                        window.location.href = "/cart";
                      }
                    }
                  }}
                >
                  <FiShoppingCart />
                  <p
                    style={{
                      fontSize: 16,
                      paddingLeft: 3,
                    }}
                  >
                    Cart
                  </p>
                </div>
                <div
                  style={{
                    height: 16,
                    borderLeft: "solid",
                    borderLeftWidth: 1,
                    borderLeftColor: "gray",
                    margin: 5,
                    marginTop: 15,
                    width: 1,
                  }}
                ></div>
                <div
                  className={core.choices}
                  style={
                    page === "list"
                      ? { color: "black", fontWeight: "bold" }
                      : {}
                  }
                  onClick={() => {
                    if (page !== "list") {
                      if (typeof window !== "undefined") {
                        window.location.href = "/wishlist";
                      }
                    }
                  }}
                >
                  <AiOutlineHeart />
                  <p
                    style={{
                      fontSize: 16,
                      paddingLeft: 3,
                    }}
                  >
                    List
                  </p>
                </div>
                <div
                  style={{
                    height: 16,
                    borderLeft: "solid",
                    borderLeftWidth: 1,
                    borderLeftColor: "gray",
                    margin: 5,
                    marginTop: 15,
                    width: 1,
                  }}
                ></div>
                <div
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className={core.choices}
                    style={
                      page === "account"
                        ? { color: "black", fontWeight: "bold" }
                        : {}
                    }
                    onClick={() => {
                      setAccountPopUp(!accountPopUp);
                      if (page !== "account") {
                        console.log("account page");
                      }
                    }}
                  >
                    <FaRegUser style={{ marginRight: 4 }} />
                    <p
                      style={
                        Account === "" || Account === undefined
                          ? { fontSize: 16 }
                          : { fontSize: 12 }
                      }
                    >
                      {Account === "" || Account === undefined
                        ? "Account"
                        : Account.split(" ")[1]
                        ? Account.split(" ")[0] + " " + Account.split(" ")[1]
                        : Account.split(" ")[0]}
                    </p>
                  </div>
                  {Account === "" || Account === undefined ? (
                    accountPopUp && popUpAccount()
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  style={{
                    height: 16,
                    borderLeft: "solid",
                    borderLeftWidth: 1,
                    borderLeftColor: "gray",
                    margin: 5,
                    marginTop: 15,
                    width: 1,
                  }}
                ></div>
                <div
                  className={core.choices}
                  onClick={() => console.log("change language")}
                >
                  <p
                    style={{
                      fontSize: 16,
                    }}
                  >
                    English
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
