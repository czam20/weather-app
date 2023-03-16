import React from "react";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";
//styles
import "../styles/styles.css";

export const Error = () => {
  return (
    <div className="container">
      <FontAwesomeIcon icon={faFaceSadCry} size="4x" />
      <h2 className="subtitle-m">Oops!</h2>
      <span className="content">{"Something went wrong"}</span>
    </div>
  );
};
