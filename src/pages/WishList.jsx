import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { safka, servy } from "../db/colors";
import ProductsBox from "../components/ProductsBox";
import { AiOutlineDelete } from "react-icons/ai";
import data from "../db/productDB";
import Categories from "../components/Categories";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
const useStyles = makeStyles((theme) => ({
  boxCart: {
    width: "90%",
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
  },
  head: {
    width: "100%",
    height: 43,
    backgroundColor: servy.primary[10],
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px 10px 0px 0px",
  },
  input: {
    width: 38,
    height: 34,
    borderRadius: 5,
    borderWidth: 1,
    padding: "6px 5px",
    borderColor: safka.border,
    marginRight: 10,
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
    // cursor: "pointer",
    color: "gray",
    "&:hover": {
      color: servy.secondary[0],
    },
  },
}));

const WishList = () => {
  const core = useStyles();
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  const [changed, setChanged] = React.useState(false);
  const productsL = data.products;

  const [products, setProducts] = React.useState(cart ? cart.content : []);
  // let ps = [];
  // let p;
  // for (p in data.products.slice(0, 3)) {
  //   ps.push({ product: p, quantity: 3 });
  // }
  // const [products, setProducts] = React.useState(ps);
  React.useEffect(() => {
    setChanged(false);
  }, [changed]);
  return (
    <div>
      <Navbar page="list" />
      <Categories />
      <div className={core.boxCart}>
        <div className={core.insideBox}>
          <div className={core.boxC}>
            <div className={core.head}>
              <p
                style={{
                  margin: 10,
                  fontSize: 14,
                  color: servy.black,
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FiHeart style={{ marginRight: 10 }} /> Whishlist Products
              </p>
            </div>
            <div style={{ width: "100%", background: servy.white }}>
              <div style={{ width: "100%" }}>
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
                      You will find products you add to the wishlist here :)
                    </p>
                  </div>
                ) : (
                  products.map((p, index) => {
                    return (
                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            width: "100%",
                            height: 116,
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: 20,
                          }}
                        >
                          <img
                            src={p.product.Photos[0]}
                            alt=""
                            style={{ width: 96, height: 116 }}
                          />
                          <div
                            style={{
                              width: "100%",
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
                                height: 34,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              }}
                            >
                              <div>
                                <RiArrowDropUpLine
                                  style={{
                                    marginLeft: 16,
                                    marginTop: 1,
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
                                    marginTop: 13,
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
                                  backgroundColor: servy.secondary[0],
                                  color: "white",
                                  width: "20%",
                                  borderRadius: 5,
                                  border: 0,
                                  cursor: "pointer",
                                  marginRight: 4,
                                  height: "100%",
                                }}
                                onClick={() => {
                                  var cart = JSON.parse(
                                    sessionStorage.getItem("cart")
                                  );
                                  if (cart) {
                                    cart.content.push({
                                      product: p,
                                      quantity: p.quantity,
                                    });
                                    sessionStorage.setItem(
                                      "cart",
                                      JSON.stringify({ content: cart.content })
                                    );
                                  } else {
                                    cart = [];
                                    cart.push({ product: p, quantity: 1 });
                                    sessionStorage.setItem(
                                      "cart",
                                      JSON.stringify({ content: cart })
                                    );
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
                              <div
                                style={{
                                  width: 26,
                                  height: "100%",
                                  borderWidth: 0,
                                  color: servy.FourthRedSalsa[60],
                                  alignItems: "center",
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "flex-end",
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
                                <AiOutlineDelete />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
        <ProductsBox
          name="Similar Products"
          products={productsL}
          slides={{ toShow: 7.25 }}
          width={{ value: "100%" }}
        />
      </div>
    </div>
  );
};

export default WishList;
