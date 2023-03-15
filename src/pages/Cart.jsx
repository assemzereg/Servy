import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import { makeStyles } from "@material-ui/core";
import { safka, servy } from "../db/colors";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import ProductsBox from "../components/ProductsBox";
import { AiOutlineDelete } from "react-icons/ai";
import SourceStores from "../components/SourceStores";
import data from "../db/productDB";
import { FiShoppingCart } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  boxCart: {
    width: "89%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: 20,
  },
  insideBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
    marginBottom: 20,
  },
  cart: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    width: 1000,
  },
  boxC: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  head: {
    width: "100%",
    height: 43,
    borderRadius: "10px 10px 0px 0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: servy.primary[10],
  },
  input: {
    width: 38,
    height: 42,
    borderRadius: 5,
    borderWidth: 1,
    padding: "6px 5px",
    borderColor: safka.border,
    color: "gray",
    "&::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  arrow: {
    fontSize: 21,
    fontWeight: 200,
    position: "absolute",
    cursor: "pointer",
    color: "gray",
    "&:hover": {
      color: servy.secondary[0],
    },
  },
}));
const Cart = () => {
  // const props1 = {
  //   title: "Trendy Products",
  //   content: trendyProducts,
  // };
  const productsL = data.products;
  const shops = data.shops;
  var total = 0;
  const core = useStyles();
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  const [changed, setChanged] = React.useState(false);
  const [products, setProducts] = React.useState(cart ? cart.content : []);
  var shopL = [];
  console.log("shops : ", shops);
  console.log("products : ", products);
  if (products.length > 0) {
    shops.forEach((s) => {
      products.forEach((p) => {
        if (s.nomShop === p.product.Ref_Shop) {
          shopL.push(s);
          console.log("i am here with the shop", s);
        }
      });
    });
  }

  React.useEffect(() => {
    // alert("executed");
    setChanged(false);
  }, [changed]);
  return (
    <div>
      <Navbar page="cart" />
      <Categories />
      <div className={core.boxCart}>
        <div className={core.insideBox}>
          <div className={core.cart}>
            <div className={core.boxC}>
              <div className={core.head}>
                <p
                  style={{
                    margin: 6,
                    fontSize: 18,
                    color: servy.black,
                    fontWeight: 600,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FiShoppingCart
                    style={{
                      marginLeft: 5,
                      marginRight: 10,
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  />{" "}
                  Cart List
                </p>
              </div>
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    background: servy.white,
                  }}
                >
                  {products === null ||
                  products === undefined ||
                  products.length === 0 ? (
                    <div
                      style={{
                        margin: "15px 0px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="/cartt.png"
                        alt=""
                        style={{ width: 220, height: 220 }}
                      />
                      <p style={{ fontSize: 20, color: "black" }}>
                        You will find products you add to the cart here
                        &#128564;
                      </p>
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      {products.map((p, index) => {
                        total = total + p.product.prix * p.quantity;
                        return (
                          <div
                            style={{
                              width: "95%",
                              height: 116,
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 10,
                              marginBottom: 10,
                            }}
                          >
                            <img
                              src={p.product.Photos[0]}
                              alt=""
                              style={{ width: "10%", height: 116 }}
                            />
                            <div
                              style={{
                                width: "90%",
                                height: 114,
                                padding: "1px 16px ",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                              }}
                            >
                              <p style={{ fontWeight: 600 }}>
                                {p.product.nomProduit}
                              </p>
                              <p>{p.product.prix} DZA</p>
                              <div
                                style={{
                                  width: "100%",
                                  height: 26,
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  <RiArrowDropUpLine
                                    style={{
                                      marginLeft: 16,
                                      marginTop: 5,
                                    }}
                                    className={core.arrow}
                                    onClick={() => {
                                      var PS = [];
                                      PS = products;
                                      if (
                                        PS[index].quantity < p.product.Quantite
                                      ) {
                                        PS[index].quantity =
                                          parseInt(PS[index].quantity) + 1;
                                        sessionStorage.setItem(
                                          "cart",
                                          JSON.stringify({ content: PS })
                                        );
                                        setProducts(PS);
                                        setChanged(true);
                                      }
                                    }}
                                  />
                                  <RiArrowDropDownLine
                                    style={{
                                      marginTop: 17,
                                      marginLeft: 16,
                                    }}
                                    className={core.arrow}
                                    onClick={() => {
                                      var PS = [];
                                      PS = products;
                                      if (PS[index].quantity > 1) {
                                        PS[index].quantity =
                                          parseInt(PS[index].quantity) - 1;
                                        sessionStorage.setItem(
                                          "cart",
                                          JSON.stringify({ content: PS })
                                        );
                                        setProducts(PS);
                                        setChanged(true);
                                      }
                                    }}
                                  />
                                  <input
                                    type="number"
                                    min={1}
                                    max={p.product.Quantite}
                                    value={p.quantity}
                                    className={core.input}
                                    onChange={(event) => {
                                      var PS = [];
                                      PS = products;
                                      if (event.target.value < 1) {
                                      } else {
                                        PS[index].quantity = event.target.value;
                                        sessionStorage.setItem(
                                          "cart",
                                          JSON.stringify({ content: PS })
                                        );
                                        setProducts(PS);
                                        setChanged(true);
                                      }
                                    }}
                                  />
                                </div>
                                <button
                                  style={{
                                    width: 42,
                                    height: 48,
                                    borderWidth: 0,
                                    backgroundColor: "transparent",
                                    color: servy.FourthRedSalsa[40],
                                    alignItems: "center",
                                    padding: "4px 12px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    var Ps = products;
                                    Ps.splice(index, 1);
                                    sessionStorage.setItem(
                                      "cart",
                                      JSON.stringify({
                                        content: Ps,
                                      })
                                    );
                                    setProducts(Ps);
                                    setChanged(true);
                                  }}
                                >
                                  <AiOutlineDelete
                                    style={{ fontSize: 20, fontWeight: 800 }}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <hr style={{ marginTop: 10 }} />
              </div>
              <div
                style={{
                  width: "97%",
                  height: 40,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 24,
                }}
              >
                <p
                  style={{
                    display: "flex",
                    fontSize: 14,
                    color: "#c5bdb6",
                    fontWeight: 600,
                    alignItems: "flex-end",
                    marginTop: 33,
                  }}
                >
                  <p style={{ marginBottom: 3 }}> Total :</p>
                  <p
                    style={{
                      marginLeft: 8,
                      fontSize: 24,
                      color: "#000000",
                      fontWeight: 600,
                    }}
                  >
                    {total} DZA
                  </p>
                </p>
                <div
                  style={{
                    width: "55%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px 12px",
                      width: "70%",
                      background: servy.secondary[0],
                      borderRadius: 5,
                      borderWidth: 0,
                      cursor: "pointer",
                      color: servy.white,
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                  >
                    <FiShoppingCart style={{ marginRight: 10, fontSize: 16 }} />{" "}
                    Purchase Now
                  </button>
                  <button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "25%",
                      padding: "8px 12px",
                      border: "1px solid",
                      borderColor: servy.FourthRedSalsa[40],
                      color: servy.FourthRedSalsa[0],
                      borderRadius: 5,
                      background: servy.white,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                    onClick={() => {
                      sessionStorage.removeItem("cart");
                      setProducts([]);
                      setChanged(true);
                    }}
                  >
                    <AiOutlineDelete style={{ marginRight: 7, fontSize: 16 }} />{" "}
                    Delete All
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "97%",
                display: "flex",
                flexDirection: "row",
                marginBottom: 15,
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 40,
              }}
            >
              <p style={{ fontSize: 18, fontWeight: 700 }}>
                Get Back to Home Page
              </p>

              <hr
                style={{
                  width: "65%",
                }}
              />
              <button
                style={{
                  width: "15%",
                  height: 34,
                  padding: "8px 12px",
                  backgroundColor: servy.primary[20],
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  border: 0,
                  borderRadius: 5,
                  cursor: "pointer",
                  color: servy.black,
                  fontWeight: 600,
                  fontSize: 12,
                }}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = "/";
                  }
                }}
              >
                Contine Shopping{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          margin: "auto",
        }}
      >
        {cart && cart.content.length !== 0 ? (
          <>
            <SourceStores props={shopL} />
            <ProductsBox
              name="Similar Products"
              products={productsL}
              slides={{ toShow: 4.25 }}
              width={{ value: "70%" }}
            />
          </>
        ) : (
          <ProductsBox
            name="Similar Products"
            products={productsL}
            slides={{ toShow: 6.75 }}
            width={{ value: "100%" }}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
