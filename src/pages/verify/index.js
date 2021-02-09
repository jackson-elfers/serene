import React from "react";
import axios from "axios";
import check from "check-types";
import { routes, api } from "../../config";
import { connect } from "../../redux";

function Main(props) {
  function verify() {}

  return (
    <div>
      <h1>Verify</h1>
      <hr />
      <div className="box">
        <p>Please type the code that's been emailed...</p>
      </div>
      <form id="formOne" onSubmit={verify}>
        <input type="text" name="code" placeholder="Code" />
        <input type="submit" value="Verify" />
      </form>
    </div>
  );
}
export default connect(Main);
