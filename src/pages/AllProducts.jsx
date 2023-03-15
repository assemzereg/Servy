import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import ProductsGrid from "../components/ProductsGrid";
import ProductsList from "../components/ProductsList";
import { GoTriangleDown } from "react-icons/go";
import { servy } from "../db/colors";
import data from "../db/productDB";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { AiOutlineSearch } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import { MdOutlineTableRows } from "react-icons/md";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import TabMob from "../components/TabMob";
import { CgSortAz } from "react-icons/cg";
import { ImDrawer } from "react-icons/im";
import Modal from "@mui/material/Modal";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
    height: 42,
    borderRadius: 5,
    borderWidth: 1,
    padding: "6px 5px",
    borderColor: servy.primaryShade[90],
    color: "gray",
    "&::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  arrow: {
    fontSize: 21,
    fontWeight: 200,
    position: "absolute",
    cursor: "pointer",
    color: "gray",
    "&:hover": {
      color: servy.secondary[0],
    },
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: servy.white,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  height: "100%vh",
};
const AllProducts = () => {
  const [grid, setgrid] = useState("grid");
  // const options = ["grid", "list"];
  const core = useStyles();
  const handleChange = (event, newAlignment) => {
    setgrid(newAlignment);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div>
      <Navbar page={"products"} />
      {width < 415 ? (
        <>
          <div
            style={{
              width: "100%",
              backgroundColor: servy.white,
              margin: "10px 0px",
            }}
          >
            <div
              style={{
                padding: 10,
                // width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ width: "80%" }}>
                <AiOutlineSearch
                  style={{
                    position: "absolute",
                    marginTop: 7,
                    fontSize: 16,
                    color: "gray",
                    marginLeft: 2,
                  }}
                />
                <input
                  type="search"
                  name=""
                  id=""
                  style={{
                    height: "inherit",
                    borderWidth: 0,
                    width: "100%",
                    borderRadius: "5px 0px 0px 5px",
                    paddingLeft: 20,
                  }}
                  placeholder="Search"
                />
              </div>
              <ToggleButtonGroup
                value={grid}
                exclusive
                onChange={handleChange}
                style={{ width: 81, height: 35 }}
              >
                <ToggleButton
                  value="list"
                  style={
                    grid === "list" ? { background: servy.primary[0] } : {}
                  }
                >
                  <MdOutlineTableRows style={{ width: 17.5, height: 17.5 }} />
                </ToggleButton>
                <ToggleButton
                  value="grid"
                  style={
                    grid === "grid" ? { background: servy.primary[0] } : {}
                  }
                >
                  <BiGridAlt style={{ width: 17.5, height: 17.5 }} />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div style={style}>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: 19,
                  fontWeight: "bold",
                  margin: 5,
                }}
              >
                <IoIosArrowBack
                  style={{ marginRight: 5, fontSize: 26, marginTop: 1 }}
                  onClick={handleClose}
                />{" "}
                Filter
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  width: "90%",
                  margin: "8px 0px",
                  justifyContent: "space-between",
                  alignSelf: "center",
                  marginTop: 25,
                }}
              >
                <p>Category</p>
                <IoMdArrowDropdown style={{ fontSize: 22 }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  width: "90%",
                  margin: "8px 0px",
                  justifyContent: "space-between",
                  alignSelf: "center",
                }}
              >
                <p>Size</p>
                <IoMdArrowDropdown style={{ fontSize: 22 }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  width: "90%",
                  margin: "8px 0px",
                  justifyContent: "space-between",
                  alignSelf: "center",
                }}
              >
                <p>Colors</p>
                <IoMdArrowDropdown style={{ fontSize: 22 }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  width: "90%",
                  margin: "8px 0px",
                  justifyContent: "space-between",
                  alignSelf: "center",
                }}
              >
                <p>Label</p>
                <IoMdArrowDropdown style={{ fontSize: 22 }} />
              </div>
              <div
                style={{
                  width: "90%",
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Price
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <div style={{ width: "49%" }}>
                    <RiArrowDropUpLine
                      style={{
                        marginLeft: 137,
                        marginTop: 5,
                      }}
                      className={core.arrow}
                      onClick={() => {}}
                    />
                    <RiArrowDropDownLine
                      style={{
                        marginTop: 17,
                        marginLeft: 137,
                      }}
                      className={core.arrow}
                      onClick={() => {}}
                    />
                    <input
                      type="number"
                      min={1}
                      className={core.input}
                      onChange={(event) => {}}
                      placeholder="0"
                    />
                  </div>
                  <div style={{ width: "49%" }}>
                    <RiArrowDropUpLine
                      style={{
                        marginLeft: 137,
                        marginTop: 5,
                      }}
                      className={core.arrow}
                      onClick={() => {}}
                    />
                    <RiArrowDropDownLine
                      style={{
                        marginTop: 17,
                        marginLeft: 137,
                      }}
                      className={core.arrow}
                      onClick={() => {}}
                    />
                    <input
                      type="number"
                      min={1}
                      className={core.input}
                      onChange={(event) => {}}
                      placeholder="000"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  borderBottomWidth: 0,
                  position: "absolute",
                  bottom: 0,
                  border: "solid",
                  borderTopColor: "#C4C4C4",
                  borderTopWidth: "1px",
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <button
                    style={{
                      borderWidth: 1,
                      borderColor: servy.ThirdGreenShade[90],
                      backgroundColor: servy.white,
                      fontSize: 16,
                      fontWeight: "bold",
                      padding: "10px 14px 10px 14px",
                      color: servy.ThirdGreenShade[90],
                      borderRadius: 8,
                      marginRight: 5,
                    }}
                  >
                    Reset
                  </button>
                  <button
                    style={{
                      borderWidth: 0,
                      backgroundColor: servy.ThirdGreenTea[90],
                      color: servy.white,
                      fontSize: 16,
                      fontWeight: "bold",
                      padding: "10px 14px 10px 14px",
                      borderRadius: 8,
                    }}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <Categories />
          {/* searching */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: 38,
              width: "88%",
              margin: "auto",
              marginTop: 20,

              borderRadius: 5,
            }}
          >
            <input
              type="search"
              name=""
              id=""
              style={{
                height: "inherit",

                borderWidth: 0,

                width: "76%",
                borderRadius: "5px 0px 0px 5px",
              }}
              placeholder="Search"
            />
            <button
              style={{
                display: "flex",
                alignItems: "center",
                height: "inherit",
                padding: " 10px 16px",
                fontSize: 14,
                fontWeight: 500,
                borderWidth: 0,

                background: "white",
                width: "8%",
                cursor: "pointer",
              }}
            >
              Brand{" "}
              <GoTriangleDown style={{ marginLeft: 16, color: "#8E8E8E" }} />
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                height: "inherit",
                padding: " 10px 16px",
                fontSize: 14,
                fontWeight: 500,
                borderWidth: 0,

                background: "white",
                width: "8%",
                cursor: "pointer",
              }}
            >
              Seller{" "}
              <GoTriangleDown style={{ marginLeft: 16, color: "#8E8E8E" }} />
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                height: "inherit",
                padding: " 10px 16px",
                fontSize: 14,
                fontWeight: 500,
                borderWidth: 0,
                background: "white",
                width: "8%",
                cursor: "pointer",
                borderRadius: 5,
              }}
            >
              Arrival{" "}
              <GoTriangleDown style={{ marginLeft: 16, color: "#8E8E8E" }} />
            </button>
          </div>
          {/*filtring*/}
          <div
            style={{
              width: "86%",
              background: "#ffffff",
              margin: "auto",
              marginBottom: 20,
              marginTop: 20,
              padding: "8px 12px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: servy.primaryShade[90],
              }}
            >
              Filter by
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Categorie
              <GoTriangleDown style={{ marginLeft: 5 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Size
              <GoTriangleDown style={{ marginLeft: 5 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Color
              <GoTriangleDown style={{ marginLeft: 5 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Label
              <GoTriangleDown style={{ marginLeft: 5 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Rating
              <GoTriangleDown style={{ marginLeft: 5 }} />
            </div>
            {/*select showing*/}
            {/* <SelectButton
          value={grid}
          options={options}
          onChange={(e) => setgrid(e.value)}
        /> */}
            <ToggleButtonGroup
              value={grid}
              exclusive
              onChange={handleChange}
              style={{ width: 81, height: 35 }}
            >
              <ToggleButton
                value="list"
                style={grid === "list" ? { background: servy.primary[0] } : {}}
              >
                <MdOutlineTableRows style={{ width: 17.5, height: 17.5 }} />
              </ToggleButton>
              <ToggleButton
                value="grid"
                style={grid === "grid" ? { background: servy.primary[0] } : {}}
              >
                <BiGridAlt style={{ width: 17.5, height: 17.5 }} />
              </ToggleButton>
            </ToggleButtonGroup>
            {/*  min max filtering */}
            <div
              style={{
                width: 155,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input
                type="number"
                name=""
                id=""
                placeholder="0"
                style={{ width: 75 }}
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="000"
                style={{ width: 75 }}
              />
            </div>

            {/* Apply */}
            <button
              style={{
                fontSize: 13,
                fontWeight: 400,
                background: servy.primary[0],
                borderRadius: 5,
                borderWidth: "thin",
                borderColor: servy.primary[0],
                color: "white",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>
        </>
      )}
      <div style={width < 415 ? {} : { width: "90%", margin: "auto" }}>
        {grid === "grid" ? (
          <ProductsGrid props={{ products: data.products }} />
        ) : (
          <ProductsList props={{ products: data.products }} />
        )}
      </div>
      {width < 415 ? (
        <>
          {" "}
          <TabMob selected={"products"} />
          <div
            style={{
              position: "fixed",
              bottom: 74,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: servy.ThirdGreenTea[0],
                color: servy.primaryShade[90],
                borderWidth: 0,
                fontSize: 12,
                fontWeight: "bold",
                padding: 10,
                boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
              }}
            >
              Sort by
              <ImDrawer
                style={{
                  marginLeft: 5,
                  color: servy.primary[80],
                  fontSize: 16,
                  marginBottom: 2,
                }}
              />
            </button>
            <button
              style={{
                marginLeft: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: servy.ThirdGreenTea[0],
                color: servy.primaryShade[90],
                borderWidth: 0,
                fontSize: 12,
                fontWeight: "bold",
                padding: 10,
                boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
              }}
              onClick={handleOpen}
            >
              Filter by
              <CgSortAz
                style={{
                  marginLeft: 5,
                  color: servy.primary[80],
                  fontSize: 20,
                }}
              />
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AllProducts;
