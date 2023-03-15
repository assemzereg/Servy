import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { servy } from "../db/colors";
import "primeflex/primeflex.css";
// import { axios } from "../axios";
const LoginC = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [remember, setremember] = useState(true);
  const [showPsw, setshowPsw] = useState(false);
  // const handleClickShowPassword = () => {
  //   setshowPsw(!showPsw);
  // };
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  const login = async (e) => {
    e.preventDefault();

    if (!Email) {
      return;
    }
    if (!Password) {
      return;
    }

    // const loginData = {
    //   Email: Email,
    //   password: Password,
    // };
    // axios
    //   .post("/token", loginData)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log(res);

    //     }
    //   })
    //   .catch((error) => {

    //     console.error("there is an error : ", error);
    //   });
    console.log("it works");
  };
  return (
    <div
      style={{
        width: 379,
        height: "fit-content",
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 0,
        display: "flex",
        flexDirection: "column",
        margin: 5,
        padding: 15,
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          marginLeft: 16,
          color: servy.ThirdGreenTea[90],
        }}
      >
        Welcome Back !
      </div>
      <div
        style={{
          width: 347,
          height: 254,
          marginRight: 16,
          marginLeft: 16,
          marginTop: 20,
          justifySelf: "end",
          justifyItems: "right",
        }}
      >
        <form noValidate onSubmit={login}>
          <div>
            <p style={{ color: "gray", width: 40, height: 18, fontSize: 12 }}>
              E-mail
            </p>
            <InputText
              type="email"
              style={{
                blockSize: 34,
                width: "100%",
                paddingLeft: 10,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: "#8e8e8e",
              }}
              placeholder="xyz@xyz.xyz"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <p style={{ color: "gray", width: 58, height: 18, fontSize: 12 }}>
              Password
            </p>
            <div>
              <i
                style={{
                  position: "absolute",
                  color: "gray",
                  marginLeft: 320,
                  marginTop: 8,
                  fontSize: 18,
                  cursor: "pointer",
                }}
                onClick={() => setshowPsw(!showPsw)}
              >
                {showPsw ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </i>
              <InputText
                type={showPsw ? "text" : "password"}
                style={{
                  blockSize: 34,
                  width: "100%",
                  paddingLeft: 10,
                  borderRadius: 5,
                  borderWidth: 0.3,
                  boxShadow: 2,
                  borderColor: "#8e8e8e",
                }}
                placeholder="XXXXXXXX"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      paddingRight: 0,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <RadioButton
                      style={{
                        color: "#6C7980",
                        display: "flex",
                        flexDirection: "row",
                        marginRight: 2,
                        fontSize: 0,
                      }}
                      // name="remember"
                      // onChange={() => {
                      //   console.log("first : " + remember);
                      //   setremember(!remember);

                      //   console.log("second : " + remember);
                      // }}
                    ></RadioButton>
                    <div style={{ padding: 0, color: "#6C7980", fontSize: 10 }}>
                      Remember me
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      paddingLeft: 0,
                      placeContent: "flex-start",
                      textAlign: "start",
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: 10,
                      paddingLeft: 0,
                    }}
                  >
                    <a
                      href="/resetPass"
                      style={{
                        fontSize: 12,
                        color: servy.ThirdGreenTea[80],
                        cursor: "pointer",
                      }}
                    >
                      Forget Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            style={{
              width: 346,
              height: 36,
              borderRadius: 5,
              borderWidth: 0,
              backgroundColor: servy.ThirdGreenTea[90],
              color: "white",
              marginTop: 24,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 700,
            }}
            type="submit"
          >
            Log In
          </button>
        </form>
        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <hr />
          <div
            style={{
              // width: 293,
              height: 15,
              fontSize: 10,
              margin: "auto",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            You Don't Have An Account ?{" "}
            <a
              href="/signup"
              style={{
                color: servy.ThirdGreenTea[90],
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginC;
