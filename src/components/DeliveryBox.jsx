import React from "react";
import { makeStyles } from "@material-ui/core";
import { safka } from "../db/colors";
import { delivery } from "../db/delivery";
import { AiFillStar } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
  DB: {
    width: 368,
    height: "fit-content",
    border: "solid",
    borderWidth: 1,
    borderColor: safka.border,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    background: safka.white,
  },
  head: {
    width: 348,
    height: 21,
    borderBottom: "solid",
    borderBottomWidth: 1,
    borderBottomColor: safka.border,
    padding: 10,
    fontWeight: 600,
    fontSize: 14,
  },
  delivElt: {
    padding: "6px 12px 6px 12px",
    height: 72,
    width: 342,
    display: "flex",
    flexDirection: "row",
    border: "solid",
    borderWidth: 1,
    borderColor: safka.border,
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      borderColor: safka.secondary,
    },
  },
}));

const DeliveryBox = () => {
  const core = useStyles();
  return (
    <div className={core.DB}>
      <div className={core.head}>Delivery Services</div>
      {delivery.map((d, index) => (
        <div key={index} className={core.delivElt}>
          <img
            src={d.image}
            alt=""
            style={{
              marginRight: 3,
              width: 62,
              height: 62,
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
            <p style={{ fontSize: 16, fontWeight: 400 }}>{d.name}</p>
            <p
              style={{
                fontSize: 9,
                fontWeight: 400,
                color: safka.grey,
              }}
            >
              {d.localisation}
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
      ))}
    </div>
  );
};

export default DeliveryBox;
