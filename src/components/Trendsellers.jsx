import React from "react";
import "./components.css";
import { makeStyles } from "@material-ui/core";
import { AiFillStar } from "react-icons/ai";
import { safka, servy } from "../db/colors";
const useStyles = makeStyles((theme) => ({
  trendsellersbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: 284,
    height: "fit-content",
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor: servy.white,
    [theme.breakpoints.down("md")]: {
      width: "49%",
    },
  },
  trendheader: {
    height: 43,
    backgroundColor: servy.primary[10],
    fontSize: 14,
    fontWeight: 600,
    width: "100%",
    borderRadius: "10px 10px 0px 0px",
    display: "flex",
    alignItems: "center",
  },
  trendsellerslist: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  trendsellerselem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 65,

    cursor: "pointer",
    // "&:hover": {
    //   border: "0.5px solid",
    //   borderColor: safka.secondary,
    // },
  },
}));

const Trendsellers = ({ props }) => {
  const core = useStyles();
  const width = props.width ? props.width : 0;
  return (
    <div
      className={core.trendsellersbox}
      style={width !== 0 ? { width: width } : {}}
    >
      <div className={core.trendheader}>
        <p style={{ fontSize: 14, fontWeight: 600, marginLeft: 10 }}>
          {props.title}
        </p>
      </div>
      <div className={core.trendsellerslist}>
        {props.content.map((element, index) => {
          return (
            <div key={index} className={core.trendsellerselem}>
              {!element.shop ? (
                <img
                  src={element.image}
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 12,
                    marginRight: 12,
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <img
                  src={element.image}
                  alt=""
                  style={{ width: 55, height: 58 }}
                />
              )}
              <div>
                <p style={{ fontSize: 12 }}>{element.name}</p>
                {!element.shop ? (
                  <p style={{ fontSize: 6, color: safka.grey }}>
                    {element.location}
                  </p>
                ) : (
                  <div
                    style={{
                      paddingTop: 2,
                      width: "auto",
                      height: 10,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img
                      src={element.shop.profile}
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
                      {element.shop.name}
                    </p>
                  </div>
                )}

                {!element.shop ? (
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      color: safka.secondary,
                    }}
                  >
                    {element.rating} <AiFillStar />
                  </p>
                ) : (
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      color: servy.secondary[60],
                    }}
                  >
                    {element.price} Da
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trendsellers;
