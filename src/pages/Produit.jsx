import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import { makeStyles } from "@material-ui/core";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { safka, servy } from "../db/colors";
import DiscProd from "../components/DiscProd";
import data from "../db/productDB";
import Reviews from "../components/Reviews";
import TabMob from "../components/TabMob";
const useStyles = makeStyles((theme) => ({
  Inside: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginBottom: 16,
    justifyContent: "space-between",
    marginTop: 10,
  },
  Pro: {
    width: "100%",
    background: "white",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    height: "fit-content",
    minHeight: 542,
    padding: "15px 0px 15px 0px",
  },
  product: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    justifyContent: "space-between",
  },
  images: {
    width: "32%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  revDel: {
    width: "20%",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
  },
  description: {
    width: "60%",
    height: "100%",
  },
  delivElt: {
    height: 72,
    width: 342,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
  },
}));

const Produit = () => {
  const Product = data.products[0];
  const core = useStyles();
  const colors = [
    "/prod.png",
    "/download.jpeg",
    "/prod.png",
    "/download.jpeg",
    "/prod.png",
    "/download.jpeg",
  ];
  const [mainImage, setMainImage] = React.useState(Product.Photos[0]);
  const [im1, setIm1] = React.useState(Product.Photos[1]);
  const [im2, setIm2] = React.useState(Product.Photos[2]);
  const [im3, setIm3] = React.useState(Product.Photos[3]);
  const [Q, setQ] = React.useState(1);
  const [loved, setLoved] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div>
      <Navbar page="product" Account="" />
      {width < 415 ? <></> : <Categories />}

      <div className={core.Inside}>
        {width < 415 ? (
          <></>
        ) : (
          <p
            style={{
              fontSize: 12,
              fontWeight: 500,
              marginLeft: "5%",
            }}
          >
            {Product.Categorie} {">"} {Product.sousCategorie[0]}
          </p>
        )}
        <div
          className={core.Pro}
          style={
            width < 960
              ? {
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  padding: 5,
                }
              : {}
          }
        >
          <div
            className={core.product}
            style={
              width < 415
                ? { flexDirection: "column", width: "100%" }
                : width < 960
                ? { width: "100%" }
                : {}
            }
          >
            <div
              className={core.images}
              style={width < 415 ? { flexDirection: "row", width: "97%" } : {}}
            >
              <img
                style={
                  width < 415
                    ? { width: "70%" }
                    : { width: "100%", height: "76%" }
                }
                src={mainImage}
                alt=""
              />
              <div
                style={
                  width < 415
                    ? {
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }
                    : {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }
                }
              >
                <img
                  style={
                    width < 415
                      ? {
                          width: "100%",
                          height: "30%",
                          cursor: "pointer",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderRadius: "5%",
                          borderColor: servy.secondary[60],
                        }
                      : {
                          width: "30%",
                          height: "100%",
                          cursor: "pointer",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderRadius: "5%",
                          borderColor: servy.secondary[60],
                        }
                  }
                  src={im1}
                  alt=""
                  onClick={() => {
                    let i = im1;
                    setIm1(mainImage);
                    setMainImage(i);
                  }}
                />
                <img
                  style={
                    width < 415
                      ? {
                          width: "100%",
                          height: "30%",
                          cursor: "pointer",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderRadius: "5%",
                          borderColor: servy.secondary[60],
                        }
                      : {
                          width: "30%",
                          height: "100%",
                          cursor: "pointer",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderRadius: "5%",
                          borderColor: servy.secondary[60],
                        }
                  }
                  src={im2}
                  alt=""
                  onClick={() => {
                    let i = im2;
                    setIm2(mainImage);
                    setMainImage(i);
                  }}
                />
                <img
                  style={
                    width < 415
                      ? {
                          width: "100%",
                          height: "30%",
                          cursor: "pointer",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderRadius: "5%",
                          borderColor: servy.secondary[60],
                        }
                      : {
                          width: "30%",
                          height: "100%",
                          cursor: "pointer",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderRadius: "5%",
                          borderColor: servy.secondary[60],
                        }
                  }
                  src={im3}
                  alt=""
                  onClick={() => {
                    let i = im3;
                    setIm3(mainImage);
                    setMainImage(i);
                  }}
                />
              </div>
            </div>
            <div
              className={core.description}
              style={
                width < 415
                  ? {
                      width: "95%",
                      display: "flex",
                      flexDirection: "column",
                      alignSelf: "center",
                    }
                  : {}
              }
            >
              {width > 414 ? (
                <> </>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: 20,
                    marginBottom: 20,
                    alignSelf: "center",
                  }}
                >
                  <input
                    type="number"
                    min={1}
                    max={80}
                    value={Q}
                    style={{
                      width: "10%",
                      borderRadius: 5,
                      borderWidth: 1,
                      padding: "6px 10px",
                      height: "100%",
                      borderColor: safka.border,
                      marginRight: 4,
                    }}
                    onChange={(e) => {
                      setQ(e.target.value);
                    }}
                  />
                  <button
                    style={{
                      backgroundColor: servy.secondary[0],
                      color: "white",
                      width: "75%",
                      height: "100%",

                      borderRadius: 5,
                      border: 0,
                      cursor: "pointer",
                    }}
                  >
                    Add To Cart
                  </button>
                  <div
                    style={{
                      width: "5%",
                      height: "70%",
                      padding: "10px 13px 10px 13px",
                      cursor: "pointer",
                    }}
                    onClick={() => setLoved(!loved)}
                  >
                    {loved ? (
                      <AiFillHeart
                        style={{
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                          color: "#FF5129",
                        }}
                      />
                    ) : (
                      <AiOutlineHeart
                        style={{
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 24, fontWeight: 500 }}>
                  {Product.nomProduit}
                  <p
                    style={{
                      color: servy.secondary[0],
                      fontSize: 15,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    4.5 <AiFillStar style={{ marginLeft: 5 }} />
                  </p>
                </p>
                <div
                  style={{
                    width: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: 60,
                    marginTop: width < 415 ? 20 : 0,
                    marginBottom: width < 415 ? 20 : 0,
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      height: "25%",
                      color: servy.primaryShade[40],
                    }}
                  >
                    Sold By
                  </p>
                  <div
                    style={{
                      height: "55%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      padding: "4px 8px 4px 8px",
                      marginLeft: 10,
                      marginTop: 10,
                    }}
                  >
                    <img
                      style={{
                        marginRight: 3,
                        width: 35,
                        height: 35,
                        borderRadius: "50%",
                      }}
                      src="/person.jpeg"
                      alt=""
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-arround",
                        marginLeft: 3,
                      }}
                    >
                      <p style={{ fontSize: 14, fontWeight: 400 }}>
                        Shop Owner
                      </p>
                      <p
                        style={{
                          fontSize: 7,
                          fontWeight: 400,
                          color: servy.primaryShade[40],
                        }}
                      >
                        Shop Location
                      </p>
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: servy.primaryShade[40],
                  }}
                >
                  Price :{" "}
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      marginLeft: 4,
                      color: servy.primaryShade[90],
                    }}
                  >
                    {Product.prix} DZA
                  </p>
                </p>
                {width > 414 ? (
                  <div
                    style={{
                      width: "100%",
                      height: 34,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="number"
                      min={1}
                      max={80}
                      value={Q}
                      style={{
                        width: "10%",
                        borderRadius: 5,
                        borderWidth: 1,
                        padding: "6px 10px",
                        height: "100%",
                        borderColor: safka.border,
                        marginRight: 4,
                      }}
                      onChange={(e) => {
                        setQ(e.target.value);
                      }}
                    />
                    <button
                      style={{
                        backgroundColor: servy.secondary[0],
                        color: "white",
                        width: "75%",
                        height: "100%",

                        borderRadius: 5,
                        border: 0,
                        cursor: "pointer",
                      }}
                    >
                      Add To Cart
                    </button>
                    <div
                      style={{
                        width: "5%",
                        height: "70%",
                        padding: "10px 13px 10px 13px",
                        cursor: "pointer",
                      }}
                      onClick={() => setLoved(!loved)}
                    >
                      {loved ? (
                        <AiFillHeart
                          style={{
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                            color: "#FF5129",
                          }}
                        />
                      ) : (
                        <AiOutlineHeart
                          style={{
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div
                  style={width < 415 ? { marginTop: 20, marginBottom: 20 } : {}}
                >
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      width: "100%",
                      borderRadius: "10px 10px 0px 0px",
                      backgroundColor: servy.primary[10],
                    }}
                  >
                    <div
                      style={{
                        padding: 10,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <IoIosColorPalette
                        style={{ marginRight: 5, color: servy.primary[90] }}
                      />
                      Colors
                    </div>
                  </p>
                  <div>
                    {colors.map((c, index) => {
                      return (
                        <img
                          key={index}
                          style={{ width: 89, height: 112, borderRadius: 10 }}
                          src={c}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
                <div
                  className={core.revDel}
                  style={
                    width < 415
                      ? { display: "none" }
                      : width < 960
                      ? { width: "97%", margin: "auto" }
                      : { display: "none" }
                  }
                >
                  <Reviews width={414} />
                </div>
                {/* <img
                  style={{ width: "100%", height: 91 }}
                  src="/addProductP.png"
                  alt=""
                /> */}
              </div>
            </div>
            {/* separation */}
            <div
              style={{
                height: "95%",
                borderLeft: "solid",
                borderLeftWidth: 1,
                borderLeftColor: safka.border,
                margin: 5,
                // marginTop: 15,
                width: 1,
                marginRight: 10,
              }}
            ></div>
          </div>
          <div
            className={core.revDel}
            style={
              width < 415
                ? { width: "97%", margin: "auto" }
                : width < 960
                ? { display: "none" }
                : {}
            }
          >
            <Reviews width={414} />
          </div>
        </div>
        <DiscProd props={{ Product }} width={width} />
      </div>
      {width < 415 ? <TabMob selected={"products"} /> : <></>}
    </div>
  );
};

export default Produit;
