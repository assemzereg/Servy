import React from "react";
import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { safka, servy } from "../db/colors";
import Reviews from "./Reviews";
import { AiOutlineInfoCircle } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
  Disc: {
    width: "100%",
    background: "white",
    marginTop: 20,
    height: "fit-content",
  },
}));

const DiscProd = ({ props, width }) => {
  const core = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);
  const pro = props.Product;
  return (
    <div className={core.Disc}>
      <div>
        <Tabs
          // variant={"fullWidth"}
          value={tabIndex}
          onChange={(e, index) => setTabIndex(index)}
          style={{
            width: "fit-content",
            borderBottom: "solid",
            borderBottomColor: safka.border,
            borderBottomWidth: 1,
            margin: "10px 1px 1px 15px",
          }}
          indicatorColor="primary"
        >
          <Tab
            style={{ fontSize: 10, fontFamily: "Poppins" }}
            label={"Description"}
          />
          <Tab
            style={{ fontSize: 10, fontFamily: "Poppins" }}
            label={"Specifications"}
          />
          <Tab
            style={
              tabIndex === 2
                ? {
                    fontSize: 10,
                    fontFamily: "Poppins",
                    borderBottomColor: safka.main,
                  }
                : { fontSize: 10, fontFamily: "Poppins" }
            }
            label={"reviews"}
          />
        </Tabs>
        <div
          style={{
            width: "95%",
            margin: "10px 1px 30px 10px",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {tabIndex === 0 ? (
            <p>{pro.Description}</p>
          ) : tabIndex === 1 ? (
            <div>
              <ul></ul>
            </div>
          ) : (
            <div
              style={
                width < 835
                  ? {
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }
                  : {
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }
              }
            >
              <div style={width < 835 ? { width: "100%" } : { width: "25%" }}>
                <Reviews width={414} />
              </div>
              {width < 415 ? (
                <></>
              ) : (
                <div
                  style={
                    width < 835
                      ? {
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }
                      : {
                          width: "60%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: servy.ThirdGreenShade[40],
                        borderRadius: "50%",
                        marginRight: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiOutlineInfoCircle style={{ fontSize: 20 }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 12 }}>
                        How do I review this product?
                      </p>
                      <p style={{ width: 186, fontSize: 8 }}>
                        If you recently purchased this product from noon, you
                        can go to your Orders page and click on the Submit
                        Review button
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: servy.ThirdGreenShade[40],
                        borderRadius: "50%",
                        marginRight: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiOutlineInfoCircle style={{ fontSize: 20 }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 12 }}>
                        How do I review this product?
                      </p>
                      <p style={{ width: 186, fontSize: 8 }}>
                        If you recently purchased this product from noon, you
                        can go to your Orders page and click on the Submit
                        Review button
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscProd;
