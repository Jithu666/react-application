import React from "react";
import "../Styles/MyStyles.css";

const StyleSheet = (props) => {
  const { primary } = props;
  let ClassName = primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${ClassName} font-xl`}>Stylesheet</h1>
    </div>
  );
};

export default StyleSheet;
