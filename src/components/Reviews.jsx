import React from "react";
import { makeStyles } from "@material-ui/core";
import { safka, servy } from "../db/colors";
import { AiFillStar, AiOutlineInfoCircle } from "react-icons/ai";
import LinearProgress from "@mui/material/LinearProgress";
import { Rating } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  ShopRatingBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 10,
    border: "solid",
    borderWidth: 0,
    background: servy.white,
  },
  headReviews: {
    height: 23,
    backgroundColor: servy.primary[10],
    fontSize: 14,
    fontWeight: 600,
    padding: 10,
    borderRadius: "10px 10px 0px 0px",
    display: "flex",
    alignItems: "center",
  },
}));

const Reviews = ({ width }) => {
  const core = useStyles();
  const [rate, setRate] = React.useState();
  // const [rates, setRates] = React.useState({
  //   1: 3,
  //   2: 5,
  //   3: 3,
  //   4: 1,
  //   5: 7,
  // });
  const rates = {
    1: 3,
    2: 5,
    3: 3,
    4: 1,
    5: 7,
  };
  // const [moy, setMoy] = React.useState(0);

  let i = 1,
    somme = 0;
  while (i < 6) {
    somme = somme + rates[i];
    i++;
  }
  const val = (
    (rates[1] + 2 * rates[2] + 3 * rates[3] + 4 * rates[4] + 5 * rates[5]) /
    somme
  ).toFixed(1);
  // console.log("somme" + somme);
  // console.log("rate[5] " + rates[5]);
  // setMoy(
  //   (rates[1] + 2 * rates[2] + 3 * rates[3] + 4 * rates[4] + 5 * rates[5]) /
  //     somme
  // );
  // const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {}, [rate]);
  return (
    <div className={core.ShopRatingBox}>
      <div className={core.headReviews}>
        <AiFillStar style={{ marginRight: 4, color: servy.secondary[0] }} />
        <p style={{ fontSize: 16, fontWeight: 600 }}>
          {width < 415 ? <>Seller Reviews</> : <>Your Reviews</>}
        </p>
        {/* <p
          style={{
            fontWeight: 600,
            fontSize: 11,
            display: "flex",
            alignItems: "center",
            color: "#f29036",
          }}
        >
          {(
            (rates[1] +
              2 * rates[2] +
              3 * rates[3] +
              4 * rates[4] +
              5 * rates[5]) /
            somme
          ).toFixed(1)}{" "}
          <AiFillStar style={{ marginLeft: 4 }} />
        </p> */}
      </div>
      {width < 415 ? (
        <div style={{ padding: 10 }}>
          <div
            style={{
              color: servy.secondary[0],
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: 5 }}>
              {(
                (rates[1] +
                  2 * rates[2] +
                  3 * rates[3] +
                  4 * rates[4] +
                  5 * rates[5]) /
                somme
              ).toFixed(1)}
            </p>
            <Rating
              name="simple-controlled"
              value={val}
              // onChange={(e) => setVal1(e.value)}
              size="small"
              defaultValue={val}
              // disabled
              // color="inherit"
            />
          </div>
          <p>{somme} reviews</p>
          <p
            style={{
              fontSize: 8,
              color: servy.secondary[0],
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <AiOutlineInfoCircle style={{ marginRight: 5 }} /> You can give your
            review too!
          </p>
        </div>
      ) : (
        <>
          <div style={{ padding: 10 }}>
            <div
              style={{
                fontSize: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id="5"
                name="5"
                value={5}
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                checked={rate === "5"}
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
              <p>5</p>
              <div style={{ color: servy.secondary[40], width: "80%" }}>
                <LinearProgress
                  variant="determinate"
                  value={
                    rate === "5"
                      ? ((rates[5] + 1) * 100) / (somme + 1)
                      : (rates[5] * 100) / somme
                  }
                  style={{
                    width: "100%",
                    marginLeft: 5,
                    borderRadius: 5,
                  }}
                  color="inherit"
                />
              </div>
            </div>
            <div
              style={{
                fontSize: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id="4"
                name="4"
                value={4}
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                checked={rate === "4"}
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
              <p>4</p>
              <div style={{ color: servy.secondary[40], width: "80%" }}>
                <LinearProgress
                  variant="determinate"
                  value={
                    rate === "4"
                      ? ((rates[4] + 1) * 100) / (somme + 1)
                      : (rates[4] * 100) / somme
                  }
                  style={{
                    width: "100%",
                    marginLeft: 5,
                    borderRadius: 5,
                  }}
                  color="inherit"
                />
              </div>
            </div>
            <div
              style={{
                fontSize: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id="3"
                name="3"
                value={3}
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                checked={rate === "3"}
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
              <p>3</p>
              <div style={{ color: servy.secondary[40], width: "80%" }}>
                <LinearProgress
                  variant="determinate"
                  value={
                    rate === "3"
                      ? ((rates[3] + 1) * 100) / (somme + 1)
                      : (rates[3] * 100) / somme
                  }
                  style={{ width: "100%", marginLeft: 5, borderRadius: 5 }}
                  color="inherit"
                />
              </div>
            </div>
            <div
              style={{
                fontSize: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id="2"
                name="2"
                value={2}
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                checked={rate === "2"}
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
              <p>2</p>
              <div style={{ color: servy.secondary[40], width: "80%" }}>
                <LinearProgress
                  variant="determinate"
                  value={
                    rate === "2"
                      ? ((rates[2] + 1) * 100) / (somme + 1)
                      : (rates[2] * 100) / somme
                  }
                  style={{ width: "100%", marginLeft: 5, borderRadius: 5 }}
                  color="inherit"
                />
              </div>
            </div>
            <div
              style={{
                fontSize: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id="1"
                name="1"
                value={1}
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                checked={rate === "1"}
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
              <p>1</p>
              <div style={{ color: servy.secondary[40], width: "80%" }}>
                <LinearProgress
                  variant="determinate"
                  value={
                    rate === "1"
                      ? ((rates[1] + 1) * 100) / (somme + 1)
                      : (rates[1] * 100) / somme
                  }
                  style={{ width: "100%", marginLeft: 8, borderRadius: 5 }}
                  color="inherit"
                />
              </div>
            </div>
          </div>
          <button
            style={{
              width: "90%",
              // height: 36,
              borderRadius: 5,
              borderWidth: 0,
              backgroundColor: safka.success,
              color: "white",
              cursor: "pointer",
              height: 27,
              marginTop: 10,
              alignSelf: "center",
            }}
          >
            Publish your Review
          </button>
        </>
      )}
    </div>
  );
};

export default Reviews;
