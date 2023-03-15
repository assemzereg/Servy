import React from "react";
import { safka, servy } from "../db/colors";
import { FaPen } from "react-icons/fa";

const OrderHistory = () => {
  const Orders = [
    {
      id: "#1006H",
      date: ["02 jun 2021", "17:32"],
      shop: "Amiro Tech",
      total: "20000",
      status: "Done",
    },
    {
      id: "#1006H",
      date: ["02 jun 2021", "17:32"],
      shop: "Amiro Tech",
      total: "20000",
      status: "Denied",
    },
    {
      id: "#1006H",
      date: ["02 jun 2021", "17:32"],
      shop: "Amiro Tech",
      total: "20000",
      status: "onDelivery",
    },
  ];
  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: 30,
            justifyContent: "space-between",
            padding: 10,
            borderRadius: "10px 10px 0px 0px",
            backgroundColor: servy.primary[10],
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 14, fontWeight: 600 }}>General informations</p>
          <div
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: servy.primary[0],
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaPen style={{ marginRight: 5, fontSize: 9 }} />
            <a href="" style={{ color: servy.primary[0] }}>
              Edit Data
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "16px 10px 16px 10px",
              width: "20%",
            }}
          >
            Order
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "16px 10px 16px 10px",
              width: "20%",
            }}
          >
            Date
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "16px 10px 16px 10px",
              width: "20%",
            }}
          >
            Shops
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "16px 10px 16px 10px",
              width: "20%",
            }}
          >
            Total Price
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "16px 10px 16px 10px",
              width: "20%",
            }}
          >
            Status
          </div>
        </div>
        {Orders.map((ord, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "16px 10px 16px 10px",
                  width: "20%",
                }}
              >
                {ord.id}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "16px 10px 16px 10px",
                  width: "20%",
                }}
              >
                <div>{ord.date[0]}</div>
                <div>{ord.date[1]}</div>
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "16px 10px 16px 10px",
                  width: "20%",
                }}
              >
                {ord.shop}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  padding: "16px 10px 16px 10px",
                  width: "20%",
                }}
              >
                <p style={{ fontWeight: 600, marginRight: 2, fontSize: 18 }}>
                  {ord.total}
                </p>{" "}
                DZA
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "16px 10px 16px 10px",
                  width: "20%",
                }}
              >
                <div
                  style={
                    ord.status === "Done"
                      ? {
                          border: "solid",
                          borderRadius: 5,
                          borderColor: servy.primaryShade[90],
                          borderWidth: "0.5px",
                          backgroundColor: servy.ThirdGreenTea[90],
                          color: "white",
                          padding: "0px 6px 0px 6px",
                          height: 18,
                        }
                      : ord.status === "Denied"
                      ? {
                          border: "solid",
                          borderRadius: 5,
                          borderColor: servy.primaryShade[90],
                          borderWidth: "0.5px",
                          backgroundColor: servy.FourthRedSalsa[60],
                          color: "white",
                          padding: "0px 6px 0px 6px",
                          height: 18,
                        }
                      : {
                          border: "solid",
                          borderRadius: 5,
                          borderColor: servy.primaryShade[90],
                          borderWidth: "0.5px",
                          backgroundColor: servy.secondary[40],
                          color: "white",
                          padding: "0px 6px 0px 6px",
                          height: 18,
                        }
                  }
                >
                  {ord.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;
