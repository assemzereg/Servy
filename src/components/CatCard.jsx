import React from "react";
import { makeStyles } from "@material-ui/core";
import { servy } from "../db/colors";
import { BiGridAlt } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

const useStyles = makeStyles((theme) => ({
  CatCardBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "0px 0px 10px 10px",
    background: servy.white,
    marginBottom: 54,
  },
  CatCardHead: {
    height: 23,
    backgroundColor: servy.primary[10],
    fontSize: 14,
    fontWeight: 600,
    padding: 10,
    borderRadius: "10px 10px 0px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
  },
}));
const CatCard = ({ width }) => {
  const core = useStyles();

  const cats = [
    { name: "Tablets", quantity: 2100 },
    { name: "Personal Computer", quantity: 2100 },
    { name: "Phones", quantity: 2100 },
    { name: "Accessoire", quantity: 80 },
    { name: "Apps", quantity: 200 },
    { name: "Casque", quantity: 700 },
    { name: "Protector", quantity: 80 },
  ];
  let total = 0;
  for (let i = 0; i < cats.length; i++) {
    total = total + cats[i].quantity;
  }
  return (
    <div
      className={core.CatCardBox}
      style={width < 415 ? { marginBottom: 0 } : {}}
    >
      <div className={core.CatCardHead}>
        <BiGridAlt
          style={{ color: servy.primary[0], fontSize: 15, marginRight: 8 }}
        />
        Categories
      </div>
      <div style={{ padding: 8, width: "90%" }}>
        <div
          style={
            width < 415
              ? {
                  width: "90%",
                  display: "flex",
                  flexDirection: "row",
                  margin: "auto",
                  justifyContent: "space-between",
                  fontSize: 12,
                  fontWeight: 500,
                }
              : {
                  width: "90%",
                  display: "flex",
                  flexDirection: "row",
                  margin: "auto",
                  justifyContent: "space-between",
                  fontSize: 12,
                  fontWeight: 500,
                  marginBottom: 10,
                }
          }
        >
          <p>All</p>
          <p>{total}</p>
          {width < 415 ? (
            <GoTriangleDown style={{ color: servy.primaryShade[30] }} />
          ) : (
            <></>
          )}
        </div>
        {width < 415 ? (
          <></>
        ) : (
          <>
            {cats.map((c, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "row",
                    margin: "auto",
                    justifyContent: "space-between",
                    fontSize: 12,
                    fontWeight: 500,
                    color: servy.primaryShade[40],
                    marginBottom: 10,
                  }}
                >
                  <p>{c.name}</p>
                  <p>{c.quantity}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default CatCard;
