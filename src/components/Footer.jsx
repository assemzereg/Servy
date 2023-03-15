import React from "react";
import { makeStyles } from "@material-ui/core";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { safka, servy } from "../db/colors";
import { Preferencelist } from "../db/Preferencelist";
const useStyles = makeStyles((theme) => ({
  F: {
    width: "100%",
    minHeight: 465,
    display: "flex",
    flexDirection: "column",
  },
  Headd: {
    width: "100%",
    height: 91,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottom: "solid",
    borderBottomColor: safka.border,
    background: "white",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  Inside: {
    marginTop: "auto",
    marginBottom: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    justifyItems: "center",
    justifyContent: "space-around",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  Foot: {
    width: "100%",
    height: 90,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTop: "solid",
    borderTopColor: safka.border,
    background: "white",
    fontWeight: 500,
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 65,
      fontSize: 9,
    },
  },
  logoF: {
    width: 100,
    [theme.breakpoints.down("sm")]: {
      width: 56,
    },
  },
}));
const Footer = () => {
  const core = useStyles();
  const TopSellers = [
    "MAjdi Shop",
    "Flex Lux",
    "Motori",
    "Ouled Mousaa",
    "Dz Fashioni",
  ];
  return (
    <div className={core.F}>
      <div className={core.Headd}>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "100%",
            cursor: "pointer",
          }}
        >
          <AiOutlineInfoCircle
            style={{ marginRight: 10, color: servy.primary[0] }}
          />
          Report a Spam or a Fake Shop
        </p>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "100%",
            cursor: "pointer",
          }}
        >
          <MdAlternateEmail
            style={{ marginRight: 10, color: servy.primary[0] }}
          />
          contactSpam@servy.dz
        </p>
      </div>
      <div>
        <div className={core.Inside}>
          <div>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Top Categories
            </p>
            {Preferencelist.map((c) => {
              return (
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      cursor: "pointer",
                      color: servy.primaryShade[80],
                      marginBottom: 10,
                    }}
                  >
                    {c.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Top Sellers
            </p>
            {TopSellers.map((ts) => {
              return (
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      cursor: "pointer",
                      color: servy.primaryShade[80],
                      marginBottom: 10,
                    }}
                  >
                    {ts}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Social Media
            </p>

            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Instagram
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Facebook
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                LinkedIn
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Twitter
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                TikTok
              </p>
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Servy Details
            </p>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Co-Team
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Invest in Servy !
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Build a Shop !
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Live-Chat
              </p>
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Join Us
            </p>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Delivary
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Local Points
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Influencers
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  color: servy.primaryShade[80],
                  marginBottom: 10,
                }}
              >
                Jobs at Servy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={core.Foot}>
        <img src="/blackLogo.png" alt="" className={core.logoF} />
        <p style={{ cursor: "pointer", color: servy.primaryShade[60] }}>
          Policy {"&"} Privacy
        </p>
        <p style={{ cursor: "pointer", color: servy.primaryShade[60] }}>
          2022 Rights Reserved
        </p>
        <p style={{ cursor: "pointer", color: servy.primaryShade[60] }}>
          Contact
        </p>
        <p style={{ cursor: "pointer", color: servy.primaryShade[60] }}>
          Rights {"&"} Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
