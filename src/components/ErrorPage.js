import React from "react";
import error from "./img/404.png";
import "../Error.css";

const ErrorPage = () => {
  return (
    <div className="error">
      <h3>Sorry page not found</h3>
      <img src={error} alt="404" />
    </div>
  );
};

export default ErrorPage;
