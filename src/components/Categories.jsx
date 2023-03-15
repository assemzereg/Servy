import React from "react";
// import { generatePath } from "react-router-dom";

import "./components.css";
import { safka } from "../db/colors";
import data from "./data";
import { makeStyles } from "@material-ui/core";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

const useStyles = makeStyles((theme) => ({
  element: {
    fontSize: 12,
    fontWeight: 600,
    paddingLeft: 30,
    paddingTop: 6,
    paddingBottom: 6,
    cursor: "pointer",
    width: "100%",
    "&:hover": {
      color: safka.secondary,
    },
  },
}));
const CategoriesMenu = (
  props,
  subMenu,
  contentSM,
  setSubMenu,
  setContentSM,
  core
) => {
  return (
    <div
      style={{
        width: "37.6%",
        height: "fit-content",
        zIndex: 11,
        position: "absolute",
        background: "#ffffff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 43,
      }}
      onMouseLeave={() => {
        setSubMenu(false);
        setContentSM();
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "fit-content",
          fontSize: 12,
          // width: 192,
          width: "100%",
        }}
      >
        {props.products.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className={core.element}
                onMouseOver={() => {
                  setSubMenu(true);
                  setContentSM({
                    categ_name: product.categ_name,
                    subCatgs: { mostTypes: [""], TopSellers: [""] },
                  });
                }}
              >
                {product.categ_name}
              </div>
            </>
          );
        })}
      </div>
      {subMenu && (
        <div
          style={{
            // width: 228,
            width: "76.5%",
            height: 224,
            padding: "0px 16px",
            backgroundColor: "#f0eec2",
          }}
          // onMouseLeave={() => {
          //   setSubMenu(false);
          //   setContentSM();
          // }}
        >
          {contentSM.categ_name}
          <hr
            style={{ backgroundColor: safka.main, height: 1, borderWidth: 0 }}
          />
          <div
            style={{
              // width: 206,
              width: "100%",
              height: 181,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                // width: 81,
                width: "40%",
                backgroundColor: "red",
              }}
            ></div>
            <div
              style={{
                // width: 76,
                width: "40%",
                backgroundColor: "blue",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

const Categories = ({ props }) => {
  const core = useStyles();
  const [subMenu, setSubMenu] = React.useState(false);
  const [contentSM, setContentSM] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  // const history = useHistory();

  const selected =
    props !== undefined && props.valueOf.length !== 0 ? props.cat : "";
  return (
    <div className="categorie-box">
      <div className="categorie-nav-style">
        <button className="all-categories" onClick={() => setMenu(!menu)}>
          All Categories{" "}
          {!menu ? (
            <GoTriangleRight style={{ marginLeft: 5 }} />
          ) : (
            <GoTriangleDown style={{ marginLeft: 5 }} />
          )}
        </button>
        {menu &&
          CategoriesMenu(
            data,
            subMenu,
            contentSM,
            setSubMenu,
            setContentSM,
            core
          )}
        <div style={{ display: "flex", alignItems: "center" }}>
          {data.products.map((element, index) => {
            return (
              <div
                key={index}
                style={
                  selected === element.categ_name && selected !== undefined
                    ? {
                        paddingLeft: 15,
                        paddingRight: 20,
                        cursor: "pointer",
                        fontWeight: 400,
                        fontSize: 12,
                        height: "-webkit-fill-available",
                        display: "flex",
                        alignItems: "center",
                        borderBottom: "solid 1px " + safka.secondary,
                      }
                    : {
                        paddingLeft: 15,
                        paddingRight: 20,
                        cursor: "pointer",
                        fontWeight: 400,
                        fontSize: 12,
                        height: "-webkit-fill-available",
                        display: "flex",
                        alignItems: "center",
                      }
                }
                onClick={() =>
                  (window.location = "/categories/" + element.categ_name)
                }
                // onClick={() => {
                //   history.push(
                //     generatePath("/products/:cat", element.categ_name)
                //   );
                // }}
              >
                {element.categ_name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
