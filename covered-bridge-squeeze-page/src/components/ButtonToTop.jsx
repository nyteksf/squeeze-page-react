import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./button-to-top.css";

const ButtonToTop = ({ isVisible }) => {

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      className={`btn--ToTop ${isVisible ? "btn--toTop-opaque" : ""}`}
      onClick={scrollToTop}
    >
      <div>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </a>
  );
};

export default ButtonToTop;
