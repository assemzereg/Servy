import React from "react";
import HorProduct from "./HorProduct";
import Pagination from "@mui/material/Pagination";
const ProductsList = ({ props }) => {
  const products = props.products;
  let i = 0,
    j,
    cptL = 0;
  let arrL = [];
  while (i < products.length) {
    j = 0;
    arrL.push([]);
    while (j < 4 && i < products.length) {
      arrL[cptL].push(products[i]);
      j++;
      i++;
    }
    cptL++;
  }
  const [pageToShow, setPageToShow] = React.useState(arrL[0]);
  const handleChange = (event, value) => {
    setPageToShow(arrL[value - 1]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 15,
      }}
    >
      {pageToShow.map((p, index) => {
        return (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <HorProduct
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
      <div style={{ width: 400 }}>
        <Pagination
          count={cptL}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          onChange={handleChange}
          size="large"
        />
      </div>
    </div>
  );
};

export default ProductsList;
