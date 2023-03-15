import React from "react";
import { makeStyles } from "@material-ui/core";
import { servy } from "../db/colors";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { FiUpload } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  signupbox: {
    width: 560,
    display: "flex",
    borderRadius: 10,
    flexDirection: "column",
    margin: "auto",
    marginTop: 62,
    backgroundColor: servy.white,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 0,
    },
  },
}));
const SignupC = () => {
  const core = useStyles();
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const [genderError, setGenderError] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [image, setImage] = React.useState();
  const [imagePath, setImagePath] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [phoneNumberError, setPhoneNumberError] = React.useState();
  const [Address, setAddress] = React.useState();
  const [AddressError, setAddressError] = React.useState();
  const [Password, setPassword] = React.useState();
  const [PasswordError, setPasswordError] = React.useState();
  const [PasswordConfirm, setPasswordConfirm] = React.useState();
  const [PasswordConfirmError, setPasswordConfirmError] = React.useState();
  const [ShowPwd, setShowPwd] = React.useState(false);
  const [ShowPwdConf, setShowPwdConf] = React.useState(false);

  const next = async (e) => {
    e.preventDefault();
    if (!name || name.trim().length < 3) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }
    if (
      !email ||
      !RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$").test(email)
    ) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }
    if (!gender) {
      setGenderError(true);
      return;
    } else {
      setGenderError(false);
    }
    const data = { name: name, email: email, gender: gender };
    sessionStorage.setItem(
      "data",
      JSON.stringify({ name: name, email: email, gender: gender })
    );
    setStep(2);
  };
  console.log("pathName  " + imagePath);
  return (
    <div className={core.signupbox}>
      <div style={{ padding: 24 }}>
        {step === 1 && (
          <p
            style={{
              fontSize: 33,
              fontWeight: 700,
              color: servy.primary[0],
              marginBottom: 40,
            }}
          >
            Create New Account
          </p>
        )}
        {step === 2 && (
          <p
            style={{
              fontSize: 33,
              fontWeight: 700,
              color: servy.primary[0],
              marginBottom: 40,
            }}
          >
            Create Account
          </p>
        )}
        <div>
          {step === 1 && (
            <form noValidate onSubmit={next}>
              <div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: servy.primaryShade[90],
                    marginBottom: 4,
                  }}
                >
                  Name
                </p>
                <input
                  type="text"
                  placeholder="Your full name"
                  style={{
                    width: "100%",
                    border: "solid",
                    borderRadius: 5,
                    borderWidth: "thin",
                    borderColor: servy.primaryShade[90],
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {nameError && (
                  <p
                    style={{
                      color: servy.FourthRedSalsa[60],
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    Please Enter A Name
                  </p>
                )}
              </div>
              <div style={{ marginTop: 13 }}>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: servy.primaryShade[90],
                    marginBottom: 4,
                  }}
                >
                  Email
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
                {emailError && (
                  <p
                    style={{
                      color: servy.FourthRedSalsa[60],
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    Please Enter An E-mail
                  </p>
                )}
              </div>
              <div style={{ marginTop: 13 }}>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: servy.primaryShade[90],
                    marginBottom: 0,
                  }}
                >
                  Gender
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="radio"
                      style={{ marginRight: 5, cursor: "pointer" }}
                      checked={gender === "male"}
                      onClick={() => setGender("male")}
                    />
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: servy.primaryShade[80],
                        marginBottom: 1,
                      }}
                    >
                      Male
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 16,
                    }}
                  >
                    <input
                      type="radio"
                      style={{ marginRight: 5, cursor: "pointer" }}
                      checked={gender === "female"}
                      onClick={() => setGender("female")}
                    />
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: servy.primaryShade[80],
                        marginBottom: 1,
                      }}
                    >
                      Female
                    </p>
                  </div>
                </div>
                {genderError && (
                  <p
                    style={{
                      color: servy.FourthRedSalsa[60],
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    Please Choose A Gender
                  </p>
                )}
              </div>
              <button
                style={{
                  width: "100%",
                  padding: 12,
                  backgroundColor: servy.primary[0],
                  color: servy.white,
                  fontSize: 14,
                  fontWeight: "bold",
                  borderWidth: 0,
                  borderRadius: 5,
                  cursor: "pointer",
                  marginTop: 24,
                }}
                type="submit"
              >
                Sign up
              </button>
            </form>
          )}
          {step === 2 && (
            <div>
              <Tabs
                variant={"fullWidth"}
                value={tabIndex}
                onChange={(e, index) => setTabIndex(index)}
                style={{
                  borderBottom: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: servy.primaryShade[40],
                }}
                indicatorColor="primary"
              >
                <Tab style={{ fontSize: 10 }} label={"Buyer"} />
                <Tab style={{ fontSize: 10 }} label={"Seller"} />
                <Tab style={{ fontSize: 10 }} label={"Business"} />
              </Tabs>
              {tabIndex === 0 ? (
                <form noValidate>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 15,
                    }}
                  >
                    {!image ? (
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          backgroundColor: "#c4c4c4",
                          borderRadius: "50%",
                        }}
                      ></div>
                    ) : (
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        style={{
                          width: 64,
                          height: 64,
                          backgroundColor: "#c4c4c4",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    <label
                      htmlFor="inputFile"
                      style={{
                        fontSize: 14,
                        color: servy.primary[0],
                        backgroundColor: servy.white,
                        border: "solid",
                        borderWidth: "thin",
                        borderColor: servy.primary[0],
                        borderRadius: 5,
                        padding: "6px 12px",
                        marginLeft: 15,
                        cursor: "pointer",
                      }}
                    >
                      <FiUpload style={{ marginRight: 5 }} />
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="inputFile"
                      hidden
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        setImagePath(e.target.value);
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      color: servy.primaryShade[90],
                      marginBottom: 4,
                    }}
                  >
                    Phone Number
                  </p>
                  <input
                    type="text"
                    placeholder="+213-00-00-00-00"
                    style={{
                      width: "100%",
                      border: "solid",
                      borderRadius: 5,
                      borderWidth: "thin",
                      borderColor: servy.primaryShade[90],
                    }}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  {emailError && (
                    <p
                      style={{
                        color: servy.FourthRedSalsa[60],
                        fontSize: 12,
                        marginTop: 3,
                      }}
                    >
                      Please Enter An E-mail
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      color: servy.primaryShade[90],
                      marginBottom: 4,
                      marginTop: 10,
                    }}
                  >
                    Address
                  </p>
                  <input
                    type="text"
                    placeholder="City, Wilaya, Country"
                    style={{
                      width: "100%",
                      border: "solid",
                      borderRadius: 5,
                      borderWidth: "thin",
                      borderColor: servy.primaryShade[90],
                    }}
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  {emailError && (
                    <p
                      style={{
                        color: servy.FourthRedSalsa[60],
                        fontSize: 12,
                        marginTop: 3,
                      }}
                    >
                      Please Enter An E-mail
                    </p>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: " 49%" }}>
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
                          marginLeft: 225,
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
                    </div>
                    <div style={{ width: " 49%" }}>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 400,
                          color: servy.primaryShade[90],
                          marginBottom: 4,
                          marginTop: 10,
                        }}
                      >
                        Confirm Password
                      </p>
                      <i
                        style={{
                          position: "absolute",
                          color: "gray",
                          marginLeft: 225,
                          marginTop: 8,
                          fontSize: 18,
                          cursor: "pointer",
                        }}
                        onClick={() => setShowPwdConf(!ShowPwdConf)}
                      >
                        {ShowPwdConf ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
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
                    </div>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      padding: 12,
                      backgroundColor: servy.primary[0],
                      color: servy.white,
                      fontSize: 14,
                      fontWeight: "bold",
                      borderWidth: 0,
                      borderRadius: 5,
                      cursor: "pointer",
                      marginTop: 24,
                    }}
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
              ) : tabIndex === 1 ? (
                <form noValidate>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 15,
                    }}
                  >
                    {!image ? (
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          backgroundColor: "#c4c4c4",
                          borderRadius: "50%",
                        }}
                      ></div>
                    ) : (
                      <img
                        src={URL.createObjectURL(image)}
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    <label
                      htmlFor="inputFile"
                      style={{
                        fontSize: 14,
                        color: servy.primary[0],
                        backgroundColor: servy.white,
                        border: "solid",
                        borderWidth: "thin",
                        borderColor: servy.primary[0],
                        borderRadius: 5,
                        padding: "6px 12px",
                        marginLeft: 15,
                        cursor: "pointer",
                      }}
                    >
                      <FiUpload style={{ marginRight: 5 }} />
                      Upload Shop Image
                    </label>
                    <input
                      type="file"
                      id="inputFile"
                      hidden
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "49%" }}>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 400,
                          color: servy.primaryShade[90],
                          marginBottom: 4,
                        }}
                      >
                        Shop Phone Number
                      </p>
                      <input
                        type="text"
                        placeholder="+213-00-00-00-00"
                        style={{
                          width: "100%",
                          border: "solid",
                          borderRadius: 5,
                          borderWidth: "thin",
                          borderColor: servy.primaryShade[90],
                        }}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                      {emailError && (
                        <p
                          style={{
                            color: servy.FourthRedSalsa[60],
                            fontSize: 12,
                            marginTop: 3,
                          }}
                        >
                          Please Enter An E-mail
                        </p>
                      )}
                    </div>
                    <div style={{ width: "49%" }}>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 400,
                          color: servy.primaryShade[90],
                          marginBottom: 4,
                        }}
                      >
                        Shop Category
                      </p>
                      <input
                        type="text"
                        placeholder="Select"
                        style={{
                          width: "100%",
                          border: "solid",
                          borderRadius: 5,
                          borderWidth: "thin",
                          borderColor: servy.primaryShade[90],
                        }}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                      {emailError && (
                        <p
                          style={{
                            color: servy.FourthRedSalsa[60],
                            fontSize: 12,
                            marginTop: 3,
                          }}
                        >
                          Please Enter An E-mail
                        </p>
                      )}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      color: servy.primaryShade[90],
                      marginBottom: 4,
                      marginTop: 10,
                    }}
                  >
                    Shop Address
                  </p>
                  <input
                    type="text"
                    placeholder="City, Wilaya, Country"
                    style={{
                      width: "100%",
                      border: "solid",
                      borderRadius: 5,
                      borderWidth: "thin",
                      borderColor: servy.primaryShade[90],
                    }}
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  {emailError && (
                    <p
                      style={{
                        color: servy.FourthRedSalsa[60],
                        fontSize: 12,
                        marginTop: 3,
                      }}
                    >
                      Please Enter An E-mail
                    </p>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: " 49%" }}>
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
                          marginLeft: 225,
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
                    </div>
                    <div style={{ width: " 49%" }}>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 400,
                          color: servy.primaryShade[90],
                          marginBottom: 4,
                          marginTop: 10,
                        }}
                      >
                        Confirm Password
                      </p>
                      <i
                        style={{
                          position: "absolute",
                          color: "gray",
                          marginLeft: 225,
                          marginTop: 8,
                          fontSize: 18,
                          cursor: "pointer",
                        }}
                        onClick={() => setShowPwdConf(!ShowPwdConf)}
                      >
                        {ShowPwdConf ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
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
                    </div>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      padding: 12,
                      backgroundColor: servy.primary[0],
                      color: servy.white,
                      fontSize: 14,
                      fontWeight: "bold",
                      borderWidth: 0,
                      borderRadius: 5,
                      cursor: "pointer",
                      marginTop: 24,
                    }}
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 20,
                    width: "70%",
                    margin: "auto",
                  }}
                >
                  <img src="/SignBusiness.png" alt="" style={{ width: 150 }} />
                  <p
                    style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}
                  >
                    The Business Feature is on Build, we will send you Mail soon
                    when it drops, stay tooned.
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      marginTop: 10,
                      color: servy.primary[0],
                      cursor: "pointer",
                    }}
                  >
                    Read more about it...
                  </p>
                </div>
              )}
            </div>
          )}
          <p
            style={{
              fontSize: 14,
              color: servy.primaryShade[80],
              width: "60%",
              margin: "auto",
              textAlign: "center",
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            By clicking on sign up, you are accepting the simple{" "}
            <a href="" style={{ color: servy.primary[40] }}>
              terms of use
            </a>{" "}
            and{" "}
            <a href="" style={{ color: servy.primary[40] }}>
              privacy policy
            </a>
          </p>
          <hr style={{ width: "100%" }} />
          <p
            style={{
              fontSize: 14,
              color: servy.primaryShade[80],
              margin: "auto",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            you have an account ?{" "}
            <a href="/login" style={{ color: servy.primary[40] }}>
              log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupC;
