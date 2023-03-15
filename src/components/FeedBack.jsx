import React from "react";
import { makeStyles } from "@mui/styles";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const useStyles = makeStyles((theme) => ({
  main: {
    width: 488,
    height: 366,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    marginLeft: 30,
    marginBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 24,
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 0,
  },
  box: {
    width: 488,
    height: 284,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
const FeedBack = () => {
  const core = useStyles();
  const [Email, setEmail] = React.useState("");
  const [Name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const Send = async (e) => {
    e.preventDefault();

    if (!Email) {
      return;
    }
    if (!Name) {
      return;
    }
    if (!message) {
      return;
    }

    // axios
    //   .post("/token", loginData)
    //   .then((res) => {
    //     if (res.status === 200) {

    //     }
    //   })
    //   .catch((error) => {

    //   });
    console.log("it works");
  };
  return (
    <div className={core.main}>
      <p style={{ fontSize: 36, color: "#1c0f04" }}>Feedback</p>
      <form nonValidate className={core.box} onSubmit={Send}>
        <div
          style={{
            width: 488,
            height: 242,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 488,
              height: 56,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: 240 }}>
              <p
                style={{
                  color: "#6c7980",
                  width: 40,
                  height: 18,
                  fontSize: 12,
                }}
              >
                Name
              </p>
              <InputText
                type="text"
                style={{
                  padding: "8px 12px 12px 8px",
                  width: 217,
                  borderRadius: 5,
                  borderWidth: 0.5,
                  borderColor: "#8e8e8e",
                }}
                placeholder="Text Here"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div style={{ width: 240 }}>
              <p
                style={{
                  color: "#6c7980",
                  width: 40,
                  height: 18,
                  fontSize: 12,
                }}
              >
                E-mail
              </p>
              <InputText
                type="email"
                style={{
                  padding: "8px 12px 12px 8px",
                  width: 217,
                  borderRadius: 5,
                  borderWidth: 0.5,
                  borderColor: "#8e8e8e",
                }}
                placeholder="Text Here"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div style={{ width: 488, height: 175 }}>
            <p
              style={{ color: "#6c7980", width: 40, height: 18, fontSize: 12 }}
            >
              Message
            </p>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: "#8e8e8e",
                width: 464,
                height: 136,
                padding: "8px 12px 12px 10px",
              }}
              placeholder="Text Here"
            />
          </div>
        </div>
        <button
          style={{
            width: 117,
            height: 30,
            backgroundColor: "#32d823",
            color: "white",
            fontSize: 12,
            borderRadius: 5,
            borderWidth: 0,
            cursor: "pointer",
          }}
          type="submit"
        >
          Send Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedBack;
