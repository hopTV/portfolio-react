import React, { useContext } from "react";
import "./toggle.css";

import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";

import { themeContext } from "../../Comtext";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClickChangeTheme = () => {
      theme.dispatch({type: "toggle"})

  }

  return (
    <div className="toggle">
      <Moon />
      <Sun />
      <div
        className="t__btn"
        onClick={handleClickChangeTheme}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
