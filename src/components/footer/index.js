import React from "react";
import { routes } from "../../config";
import { Link } from "react-router-dom";
import bonfire from "../../assets/images/bonfire.gif";

function Main(props) {
  return (
    <div>
      <img style={{ "margin-left": "25%", width: "50%" }} src={bonfire} />
    </div>
  );
}
export default Main;
