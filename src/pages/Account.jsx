import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { servy } from "../db/colors";
import Profile from "../components/Profile";
import OrderHistory from "../components/OrderHistory";
import Parametres from "../components/Parametres";
import TabMob from "../components/TabMob";

const useStyles = makeStyles((theme) => ({
  AccountNav: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    display: "flex",
    height: 42,
    alignItems: "center",
  },
  Inside: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginBottom: 16,
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

const Account = () => {
  const core = useStyles();
  const [page, setPage] = React.useState("Profile");
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
      <Navbar />
      <div className={core.AccountNav}>
        <div
          style={{
            width: 268,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "5%",
          }}
        >
          <p
            style={
              page === "Profile"
                ? {
                    fontSize: 14,
                    fontWeight: 600,
                    color: servy.primary[90],
                    cursor: "pointer",
                  }
                : {
                    fontSize: 14,
                    color: servy.primaryShade[40],
                    cursor: "pointer",
                    fontWeight: 400,
                  }
            }
            onClick={() => {
              setPage("Profile");
            }}
          >
            Profile
          </p>
          <p
            style={
              page === "Order History"
                ? {
                    fontSize: 14,
                    fontWeight: 600,
                    color: servy.primary[90],
                    cursor: "pointer",
                  }
                : {
                    fontSize: 14,
                    color: servy.primaryShade[40],
                    cursor: "pointer",
                    fontWeight: 400,
                  }
            }
            onClick={() => {
              setPage("Order History");
            }}
          >
            Order History
          </p>
          <p
            style={
              page === "Parameters"
                ? {
                    fontSize: 14,
                    fontWeight: 600,
                    color: servy.primary[90],
                    cursor: "pointer",
                  }
                : {
                    fontSize: 14,
                    color: servy.primaryShade[40],
                    cursor: "pointer",
                    fontWeight: 400,
                  }
            }
            onClick={() => {
              setPage("Parameters");
            }}
          >
            Parameters
          </p>
        </div>
      </div>
      <div className={core.Inside}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            marginBottom: 20,
            display: "flex",
          }}
        >
          Account{" "}
          <p style={{ color: servy.secondary[40], margin: "0px 5px" }}>{">"}</p>{" "}
          {page}
        </p>
        {page === "Profile" ? (
          <Profile />
        ) : page === "Order History" ? (
          <OrderHistory />
        ) : page === "Paremeters" ? (
          <Parametres />
        ) : (
          <></>
        )}
      </div>
      {width < 415 ? <TabMob selected={"account"} /> : <></>}
    </div>
  );
};

export default Account;
