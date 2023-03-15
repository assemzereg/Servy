import React from "react";
import { makeStyles } from "@material-ui/core";
import { safka, servy } from "../db/colors";
import { AiFillStar } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  DB: {
    width: "25%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    background: servy.white,
  },
  head: {
    // width: "100%",
    height: 21,
    padding: 10,
    fontWeight: 700,
    fontSize: 14,
    borderRadius: "10px 10px 0px 0px",
    backgroundColor: servy.primary[10],
  },
  delivElt: {
    padding: "6px 12px 6px 12px",
    height: 72,
    // width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
  },
}));

const SourceStores = ({ props, width }) => {
  const core = useStyles();

  return (
    <div className={core.DB} style={width ? { width } : {}}>
      <div style={{ width: "100%" }}>
        <div className={core.head}>Your Product are from </div>
      </div>
      {props.map((d, index) => (
        <div style={{ width: "100%", backgroundColor: servy.white }}>
          <div key={index} className={core.delivElt}>
            <img
              src={d.photo}
              alt=""
              style={{
                marginRight: 3,
                width: 40,
                height: 40,
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-around",
                marginLeft: 10,
              }}
            >
              <p style={{ fontSize: 16, fontWeight: 400 }}>{d.nomShop}</p>
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 400,
                  color: safka.grey,
                }}
              >
                {d.location}
              </p>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  color: "#f29036",
                  marginTop: 4,
                }}
              >
                {d.rating} <AiFillStar style={{ marginLeft: 4 }} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SourceStores;
