import React from "react";
import { routes } from "../../config";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <Link to={`${routes.Home}`}>
        <h1>Serene</h1>
      </Link>
      <div style={{ height: "50px" }}>
        <Link to={`${routes.Menu}`}>
          <button style={{ float: "right" }}>...</button>
        </Link>
      </div>
    </div>
  );
}
export default Main;
