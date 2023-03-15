import React from "react";
import Navbar from "../components/Navbar";
import TabMob from "../components/TabMob";
import { servy } from "../db/colors";
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { makeStyles } from "@material-ui/core";
import ProductsBox from "../components/ProductsBox";
import data from "../db/productDB";
const useStyles = makeStyles((theme) => ({
  input: {
    width: 38,
    height: 42,
    borderRadius: 5,
    borderWidth: 1,
    padding: "6px 5px",
    borderColor: servy.primaryShade[90],
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
const MobWishList = () => {
  const core = useStyles();
  const productsL = data.products;
  var wish = JSON.parse(sessionStorage.getItem("cart"));
  const [changed, setChanged] = React.useState(false);
  const [products, setProducts] = React.useState(wish ? wish.content : []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          // backgroundColor: servy.primary[10],
          marginTop: 10,
        }}
      >
        <div
          style={{
            padding: 20,
            fontSize: 18,
            fontWeight: "bold",
            color: servy.primaryShade[90],
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: servy.primary[10],
          }}
        >
          <AiOutlineHeart style={{ marginRight: 10 }} /> Wish List
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {products === null ||
          products === undefined ||
          products.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <img src="/cartt.png" alt="" style={{ width: "40%" }} />
              <p
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  color: servy.primaryShade[90],
                }}
              >
                You will find products you add to the wish list here &#128564;
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
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: "center",
                      backgroundColor: servy.white,
                      width: "100%",
                      marginBottom: 5,
                    }}
                  >
                    <img
                      src={p.product.Photos[0]}
                      alt=""
                      style={{ width: "30%", alignSelf: "center" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: 10,
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
                            if (PS[index].quantity < p.product.Quantite) {
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
                          padding: 12,
                          fontSize: 18,
                          fontWeight: "bold",
                          color: servy.white,
                          backgroundColor: servy.secondary[0],
                          borderWidth: 0,
                          width: "70%",
                          borderRadius: 12,
                          marginLeft: 10,
                        }}
                      >
                        <FiShoppingCart style={{ marginRight: 5 }} /> Add To
                        Cart
                      </button>
                      <AiFillHeart
                        style={{
                          marginLeft: 15,
                          color: servy.FourthRedSalsa[60],
                          fontSize: 26,
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
                      />
                    </div>
                    <p
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: servy.primaryShade[90],
                        margin: 15,
                      }}
                    >
                      {p.product.nomProduit}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: servy.primaryShade[60],
                        margin: 15,
                      }}
                    >
                      Price :
                    </p>
                    <p
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: servy.primaryShade[90],
                        margin: 15,
                        marginTop: 0,
                      }}
                    >
                      {p.product.prix} DZA
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          <ProductsBox
            name="Trendy On Servy"
            products={productsL}
            slides={{ toShow: 5.75 }}
            width={{ value: "98%" }}
          />
        </div>
      </div>

      <TabMob selected={"wishList"} />
    </div>
  );
};

export default MobWishList;
