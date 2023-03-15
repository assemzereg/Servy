//dependences
import React from "react";
import Navbar from "../components/Navbar";
import LoginC from "../components/LoginC";
//css
import "./pages.css";
//components
const Login = () => {
  return (
    <div>
      <Navbar page="account" Account="" />
      <div
        style={{
          // width: 1000,
          display: "flex",
          flexDirection: "row",
          marginBottom: 35,
          marginTop: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div
          style={{
            width: 510,
            height: 465,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ fontWeight: 600, fontSize: 33 }}>
              The Best Place To Buy {"&"} Sell
            </p>
            <p style={{ fontWeight: 400, fontSize: 19 }}>
              Safka will give you the best e-commerce experience in Algeria.
            </p>
          </div>
          <img src="/logSign.png" alt="" style={{ width: 510, height: 276 }} />
        </div> */}
        <LoginC />
      </div>
    </div>
  );
};

export default Login;
