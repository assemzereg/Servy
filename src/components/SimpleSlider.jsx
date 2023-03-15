import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { safka, servy } from "../db/colors";
import { AiFillStar } from "react-icons/ai";

const SimpleSlider = ({ props }) => {
  // la liste des shops a afficher ou bien des categories
  const List = props.list;
  const settings = {
    infinite: false,
    speed: 500,
    // la taille de le box soit de shop en cas de page home view mobile ou bien de page categories
    slidesToShow: props.slides.toShow,
    // combien de box on va afficher dans le slider dans l'attributs toShow et combien on va slider dans ToScroll
    slidesToScroll: props.slides.toScroll,
    arrows: false,
  };
  // un boolean si on va afficher un shop ou bien les categorie pour avoir une flexibiliter meillieur
  const shop = props.shop;

  return (
    <div style={{ width: "100%", height: "fit-content", marginBottom: 10 }}>
      <Slider {...settings}>
        {List.map((element, index) => {
          if (shop) {
            return (
              <div>
                <div
                  key={index}
                  style={{
                    width: props.sizeBox.width,
                    height: props.sizeBox.height,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "solid",
                    borderWidth: "thin",
                    borderRadius: 10,
                    borderColor: servy.primary[20],
                    justifyContent: "space-around",
                    padding: "10px 2px 2px 2px",
                  }}
                >
                  <img
                    src={element.photo}
                    alt=""
                    style={{ borderRadius: "50%", height: 40, width: 40 }}
                  />
                  <p style={{ fontSize: 10, color: servy.primaryShade[90] }}>
                    {element.nomShop}
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      color: "#6C7980",
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: 3,
                      alignItems: "center",
                    }}
                  >
                    {element.location}{" "}
                    <p
                      style={{
                        marginLeft: 4,
                        color: servy.secondary[0],
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      {element.rating}
                      <AiFillStar style={{ marginLeft: 2 }} />
                    </p>
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <div
                  key={index}
                  style={{
                    width: props.sizeBox.width,
                    height: props.sizeBox.height,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: safka.white,
                    border: "solid",
                    borderWidth: 1,
                    borderColor: safka.border,
                  }}
                >
                  <img src={element} alt="" style={{ width: 50, height: 50 }} />
                </div>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
