import React from "react";
import classes from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <div>
      <button className={classes.pushButton}>{text}</button>
    </div>
  );
};

export default Button;
