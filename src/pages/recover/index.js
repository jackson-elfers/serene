import React, { useState, useEffect } from "react";
import axios from "axios";
import check from "check-types";
import { routes, api } from "../../config";
import errors from "../../errors";
import { connect } from "../../redux";

function Main(props) {
  async function recover(data) {
    try {
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  return (
    <div>
      <h1>Recover</h1>
      <hr />
      <form id="formOne" onSubmit={recover}>
        <input type="text" name="email" placeholder="Email" />
        <input type="submit" value="Recover" />
      </form>
    </div>
  );
}
export default connect(Main);
