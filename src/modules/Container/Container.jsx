import React from "react";
import "./Container.scss";
const Container = ({ children, addClass }) => (
  <div className={`container ${addClass ? addClass : ""}`}>{children}</div>
);

export default Container;
