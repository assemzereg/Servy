import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Product from "./Product";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles((theme) => ({
  A: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    justifyItems: "center",
    width: "100%",
    marginBottom: 15,
  },
}));

const ProductsGrid = ({ props }) => {
  const core = useStyles();
  const products = props.products;
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  let i = 0,
    j,
    cpt = 0;
  let arrG = [];
  while (i < products.length) {
    j = 0;
    arrG.push([]);
    if (width < 415) {
      while (j < 4 && i < products.length) {
        arrG[cpt].push(products[i]);
        j++;
        i++;
      }
    } else {
      while (j < 18 && i < products.length) {
        arrG[cpt].push(products[i]);
        j++;
        i++;
      }
    }
    cpt++;
  }
  const [pageToShow, setPageToShow] = React.useState(arrG[0]);
  const handleChange = (event, value) => {
    setPageToShow(arrG[value - 1]);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 15,
      }}
    >
      <div
        className={core.A}
        style={width < 415 ? { gridTemplateColumns: "repeat(2, 1fr)" } : {}}
      >
        {pageToShow.map((p, index) => {
          return (
            <div key={index}>
              <Product
                width={width < 415 ? 150 : 169}
                props={p}
                shop={{
                  id_shop: "safjdoHODGHJOSDGNGOSGOSDJGHOPISDFsdg",
                  photo: "/person.jpeg",
                  nomShop: "OYA Store",
                  type: "store",
                  location: "Alger",
                  rating: 2.0,
                }}
              />
            </div>
          );
        })}
      </div>
      <Pagination
        count={cpt}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={handleChange}
        size="large"
      />
    </div>
  );
};

export default ProductsGrid;
