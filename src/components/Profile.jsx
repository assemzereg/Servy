import React from "react";
import { servy } from "../db/colors";
import { makeStyles } from "@material-ui/core";
import { FaPen } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  prefContainer: {
    width: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    padding: 26,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(7, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  pref: {
    padding: "8px 12px 8px 12px",
    border: "solid",
    borderWidth: 1,
    borderColor: servy.primaryShade[0],
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 5,
    marginLeft: 5,
    MarginRight: 5,
    color: servy.primaryShade[0],
    // width: "fit-content",
  },
  personalInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: 26,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    justifyItems: "center",
  },
}));

const Profile = () => {
  const core = useStyles();
  var user = {
    email: "assem.zereg0@gmail.com",
    name: "Assem Zereg",
    address: "37, city Greatness, Batna",
    telephone: "0500000000",
    listprefs: ["Electronics", "Phones", "Cars"],
  };
  const listprefs = [
    "Everything",
    "Electronics",
    "Phones",
    "Cars",
    "Fashion",
    "Beautiy",
    "Sport",
    "Home",
    "Books",
    "Houses",
    "Medical",
    "Marriage",
    "Babies",
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
            justifyContent: "space-between",
            padding: 10,
            borderRadius: "10px 10px 0px 0px",
            backgroundColor: servy.primary[10],
            height: 30,
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
        <div style={{ width: "100%" }}>
          <div className={core.personalInfo}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontWeight: 500, fontSize: 14 }}>Email</p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: servy.primaryShade[60],
                }}
              >
                {user.email}
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 500, fontSize: 14 }}>Name</p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: servy.primaryShade[60],
                }}
              >
                {user.name}
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 500, fontSize: 14 }}>Address</p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: servy.primaryShade[60],
                }}
              >
                {user.address}
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 500, fontSize: 14 }}>Telephone</p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: servy.primaryShade[60],
                }}
              >
                {user.telephone}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: "10px 10px 0px 0px",
            backgroundColor: servy.primary[10],
            height: 30,
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 14, fontWeight: 600 }}>Your Preferences</p>
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
              Edit Preferences
            </a>
          </div>
        </div>
        <div className={core.prefContainer}>
          {listprefs.map((p, index) => {
            return (
              <div
                key={index}
                className={core.pref}
                onClick={() => {
                  user.listprefs.push(p);
                  console.log(user);
                }}
                style={
                  user.listprefs.findIndex((e) => e === p) > -1
                    ? {
                        backgroundColor: servy.secondary[0],
                        color: "white",
                        borderWidth: 0,
                      }
                    : {}
                }
              >
                {p}
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: "10px 10px 0px 0px",
            backgroundColor: servy.primary[10],
            height: 30,
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 14, fontWeight: 600 }}>Security Informations</p>
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
              Change Password
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 26,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontWeight: 500, fontSize: 14 }}>Password</p>
            <p style={{ fontWeight: 400, fontSize: 14, color: "#7E8285" }}>
              ****************
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
