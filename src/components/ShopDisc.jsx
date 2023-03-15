import React from "react";
import { makeStyles } from "@material-ui/core";
import { safka, servy } from "../db/colors";
import { FiMoreVertical } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  ShopDiscBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "0px 0px 10px 10px",
    background: "white",
  },
  Disc: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "11px 15px",
  },
  shopHead: {
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
const ShopDisc = ({ shop, width }) => {
  const core = useStyles();
  // const [width, setWidth] = React.useState(window.innerWidth);
  // const updateDimensions = () => {
  //   setWidth(window.innerWidth);
  // };
  // React.useEffect(() => {
  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);
  return (
    <div style={{ width: "100%" }}>
      <div className={core.shopHead}>
        Shop
        <FiMoreVertical
          style={{
            fontSize: 15,
            fontWeight: 400,
            color: safka.grey,
            cursor: "pointer",
          }}
        />
      </div>
      <div className={core.ShopDiscBox}>
        <div style={{ width: "100%" }}>
          <div
            className={core.Disc}
            style={width < 415 ? { width: "90%" } : {}}
          >
            <img
              src={shop.photo}
              alt=""
              style={{
                marginRight: 8,
                width: 128,
                height: 128,
                borderRadius: "50%",
              }}
            />
            <div
              style={
                width < 415
                  ? {
                      width: "90%",
                      display: "flex",
                      flexDirection: "column",
                      padding: "6px 0px 6px 12px",
                      justifyContent: "space-between",
                    }
                  : {
                      width: "60%",
                      display: "flex",
                      flexDirection: "column",
                      padding: "6px 0px 6px 12px",
                      justifyContent: "space-between",
                    }
              }
            >
              <div>
                <p style={{ fontSize: 25, fontWeight: 400 }}>{shop.nomShop}</p>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    color: servy.primaryShade[40],
                  }}
                >
                  {shop.location}
                </p>
              </div>
              <div
                style={{
                  width: 49,
                  height: 18,
                  border: "solid",
                  borderWidth: 1,
                  borderColor: "#8E8E8E",
                  fontSize: 12,
                  fontWeight: 500,
                  borderRadius: 5,
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {shop.type}
              </div>
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <button
                  style={{
                    width: "30%",
                    // height: 36,
                    borderRadius: 5,
                    borderWidth: 0,
                    backgroundColor: servy.primary[0],
                    color: "white",
                    cursor: "pointer",
                    // height: 27,
                    minWidth: 65,
                    padding: 7,
                  }}
                >
                  Follow
                </button>
                <button
                  style={{
                    width: "65%",
                    border: "solid",
                    borderColor: servy.secondary[40],
                    borderWidth: 1,
                    color: servy.secondary[0],
                    borderRadius: 5,
                    background: "white",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 12,
                    // height: 27,
                    padding: 7,
                    minWidth: 140,
                    marginLeft: 5,
                  }}
                >
                  View Orders History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDisc;
