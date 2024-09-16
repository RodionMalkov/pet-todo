import React from "react";
import "./styles.scss";
const Container = ({ children, addClass }) => (
  <div className={`container ${addClass ? addClass : ""}`}>{children}</div>
);

export default Container;
