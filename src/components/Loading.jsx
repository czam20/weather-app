import React from "react";
import "../styles/loading.css"
import "../styles/styles.css"

export const Loading = () => {
  return (
    <div className="container">
      <div className="loading">
        <p className="loading__p">Loading</p>
        <span className="loading__progress"></span>
      </div>
    </div>
  );
};
