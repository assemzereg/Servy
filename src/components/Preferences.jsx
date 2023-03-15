import React from "react";
import { useState } from "react";
import "./components.css";

const Preferences = (props) => {
  const Item = ({ title }) => {
    const [active, setActive] = useState(false);
    return (
      <button
        className={active ? "pre-type-click" : "pre-type"}
        onClick={() => setActive(!active)}
      >
        {title}
      </button>
    );
  };

  const pref = props.Preferencelist;
  const listprefs = pref.map((prfs) => <Item title={prfs} />);

  return (
    <div className="preference-box">
      <div className="Pre-title">Choose your Preferences</div>
      <div className="Pre-text">
        You can edit and change your preferences later in your Account &gt;
        Preferences
      </div>
      <hr />
      <div className="Pre-info">
        This request will helps you find everything you need, so you don&apos;t
        get fraustruted from the Quantite of products
      </div>
      <div className="Pre_box">{listprefs}</div>
    </div>
  );
};

export default Preferences;
