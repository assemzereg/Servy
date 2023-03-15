import React from "react";
import Navbar from "../components/Navbar";
import TabMob from "../components/TabMob";
import data from "../db/productDB";
import { servy } from "../db/colors";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { makeStyles } from "@material-ui/core";
import { AiOutlineDelete } from "react-icons/ai";
import SourceStores from "../components/SourceStores";
import ProductsBox from "../components/ProductsBox";

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
const MobCart = () => {
  const core = useStyles();
  const productsL = data.products;
  const shops = data.shops;
  var total = 0;
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  const [changed, setChanged] = React.useState(false);
  const [products, setProducts] = React.useState(cart ? cart.content : []);
  var shopL = [];
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
      <Navbar />
      <div
        style={{
          width: "100%",
          backgroundColor: servy.primary[10],
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
          }}
        >
          <FiShoppingCart style={{ marginRight: 10 }} /> Card List
        </div>
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
              marginBottom: 20,
            }}
          >
            <img src="/cartt.png" alt="" style={{ width: "40%" }} />
            <p
              style={{
                fontSize: 16,
                marginTop: 10,
                color: servy.primaryShade[90],
              }}
            >
              You will find products you add to the cart here &#128564;
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
                    <AiOutlineDelete
                      style={{
                        marginLeft: 15,
                        color: servy.FourthRedSalsa[60],
                        fontSize: 23,
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
            <hr style={{ width: "99%", marginTop: 15, marginBottom: 15 }} />
            <p
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: servy.primaryShade[60],
                margin: 15,
                alignSelf: "flex-start",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Total{" "}
              <p
                style={{
                  marginLeft: 7,
                  color: servy.primaryShade[90],
                  fontSize: 24,
                }}
              >
                {total} DZA
              </p>
            </p>
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "95%",
                padding: "8px 12px",
                border: "1px solid",
                borderColor: servy.FourthRedSalsa[40],
                color: servy.FourthRedSalsa[0],
                borderRadius: 8,
                background: servy.white,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 18,
                marginBottom: 10,
              }}
              onClick={() => {
                sessionStorage.removeItem("cart");
                setProducts([]);
                setChanged(true);
              }}
            >
              <AiOutlineDelete style={{ marginRight: 7, fontSize: 24 }} />{" "}
              Delete All
            </button>
            <button
              style={{
                width: "95%",
                height: 48,
                padding: "8px 12px",
                backgroundColor: servy.primary[20],
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                border: 0,
                borderRadius: 8,
                cursor: "pointer",
                color: servy.black,
                fontWeight: 600,
                fontSize: 18,
                marginBottom: 10,
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
        )}
        {cart && cart.content.length !== 0 ? (
          <SourceStores props={shopL} width={"98%"} />
        ) : (
          <></>
        )}
        <ProductsBox
          name="Trendy On Servy"
          products={productsL}
          slides={{ toShow: 5.75 }}
          width={{ value: "98%" }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 74,
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          zIndex: 15,
        }}
      >
        <button
          style={{
            padding: 15,
            fontSize: 18,
            fontWeight: "bold",
            color: servy.white,
            backgroundColor: servy.secondary[0],
            borderWidth: 0,
            width: "95%",
            borderRadius: 12,
          }}
        >
          <FiShoppingCart style={{ marginRight: 5 }} /> Purchase Now
        </button>
      </div>
      <TabMob selected={"cart"} />
    </div>
  );
};

export default MobCart;
