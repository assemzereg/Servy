//dependences
import React from "react";
import Navbar from "../components/Navbar";
import { servy } from "../db/colors";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { makeStyles } from "@material-ui/core";
import TabMob from "../components/TabMob";
const useStyle = makeStyles((theme) => ({
  mob: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    forgetpass: {
      width: 379,
      height: "fit-content",
      backgroundColor: "white",
      borderRadius: 8,
      borderWidth: 0,
      display: "flex",
      flexDirection: "column",
      margin: 5,
      padding: 24,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
}));
//css
//components
const ForgetPass = () => {
  const core = useStyle();
  const [Step, setStep] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState([false, ""]);
  const [Code, setCode] = React.useState("");
  const [CodeError, setCodeError] = React.useState([false, ""]);
  const [Password, setPassword] = React.useState();
  const [PasswordError, setPasswordError] = React.useState([false, ""]);
  const [PasswordConfirm, setPasswordConfirm] = React.useState();
  const [PasswordConfirmError, setPasswordConfirmError] = React.useState([
    false,
    "",
  ]);
  const [ShowPwd, setShowPwd] = React.useState(false);
  const [ShowPwdConf, setShowPwdConf] = React.useState(false);
  const first = async (e) => {
    e.preventDefault();
    if (
      !email ||
      !RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$").test(email)
    ) {
      setEmailError([true, "please enter a valid email"]);
      return;
    } else {
      setEmailError([false, ""]);
    }
    setStep(2);
  };
  const second = async (e) => {
    e.preventDefault();
    if (!Code) {
      setCodeError([true, "please enter the Code"]);
      return;
    } else {
      setCodeError([false, ""]);
    }
    setStep(3);
  };
  const last = async (e) => {
    e.preventDefault();
    if (!Code) {
      setCodeError([true, "please enter the Code"]);
      return;
    } else {
      setCodeError([false, ""]);
    }
    setStep(3);
  };

  return (
    <div>
      <Navbar page="account" Account="" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 35,
          marginTop: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            padding: 24,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: servy.ThirdGreenTea[90],
            }}
          >
            {(Step === 1 || Step === 2) && <>Password Assistant </>}
            {Step === 3 && <>New Password</>}
          </div>
          <p style={{ fontSize: 14, color: servy.primaryShade[70] }}>
            {Step === 1 && (
              <>Enter the associated Email or Number with your Servy Account.</>
            )}
            {(Step === 2 || Step === 3) && (
              <>Check your Email and put the Valide Code from your inbox </>
            )}
          </p>
          <div
            style={{
              width: "100%",
              marginTop: 48,
            }}
          >
            {Step === 1 && (
              <form noValidate onSubmit={first}>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: servy.primaryShade[90],
                    marginBottom: 4,
                  }}
                >
                  E-mail
                </p>
                <input
                  type="email"
                  placeholder="xyz@xyz.xyz"
                  style={{
                    width: "100%",
                    border: "solid",
                    borderRadius: 5,
                    borderWidth: "thin",
                    borderColor: servy.primaryShade[90],
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError[0] && (
                  <p
                    style={{
                      color: servy.FourthRedSalsa[60],
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    {emailError[1]}
                  </p>
                )}
                <button
                  style={{
                    width: "100%",
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
                  Continue
                </button>
              </form>
            )}
            {Step === 2 && (
              <form noValidate onSubmit={second}>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: servy.primaryShade[90],
                    marginBottom: 4,
                  }}
                >
                  Email Code
                </p>
                <input
                  type="number"
                  placeholder="XXXXXXXX"
                  style={{
                    width: "100%",
                    border: "solid",
                    borderRadius: 5,
                    borderWidth: "thin",
                    borderColor: servy.primaryShade[90],
                  }}
                  value={Code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
                {CodeError[0] && (
                  <p
                    style={{
                      color: servy.FourthRedSalsa[60],
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    {CodeError[1]}
                  </p>
                )}
                <button
                  style={{
                    width: "100%",
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
                  Continue
                </button>
              </form>
            )}
            {Step === 3 && (
              <form noValidate onSubmit={last}>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: servy.primaryShade[90],
                    marginBottom: 4,
                    marginTop: 10,
                  }}
                >
                  Password
                </p>
                <i
                  style={{
                    position: "absolute",
                    color: "gray",
                    marginLeft: 350,
                    marginTop: 8,
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPwd(!ShowPwd)}
                >
                  {ShowPwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </i>
                <input
                  type={ShowPwd ? "text" : "password"}
                  placeholder="XXXXXXXX"
                  style={{
                    width: "100%",
                    border: "solid",
                    borderRadius: 5,
                    borderWidth: "thin",
                    borderColor: servy.primaryShade[90],
                  }}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: servy.primaryShade[90],
                    marginBottom: 4,
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  Confirm Password{" "}
                  <p
                    style={{
                      marginLeft: 2,
                      color: servy.primaryShade[60],
                      fontSize: 10,
                    }}
                  >
                    (so you don’t forget it)
                  </p>
                </p>
                <i
                  style={{
                    position: "absolute",
                    color: "gray",
                    marginLeft: 350,
                    marginTop: 8,
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPwdConf(!ShowPwdConf)}
                >
                  {ShowPwdConf ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </i>
                <input
                  type={ShowPwdConf ? "text" : "password"}
                  placeholder="XXXXXXXX"
                  style={{
                    width: "100%",
                    border: "solid",
                    borderRadius: 5,
                    borderWidth: "thin",
                    borderColor: servy.primaryShade[90],
                  }}
                  value={PasswordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
                <button
                  style={{
                    width: "100%",
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
                  Confirm and let’s go
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className={core.mob}>
        <TabMob selected={"account"} />
      </div>
    </div>
  );
};

export default ForgetPass;
