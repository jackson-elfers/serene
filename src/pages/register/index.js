import React, { useState, useEffect } from "react";
import axios from "axios";
import { routes, api } from "../../config";
import errors from "../../errors";
import { connect } from "../../redux";

function Main(props) {
  async function register(data) {
    try {
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <hr />
      <form id="formOne" onSubmit={register}>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="confirm" placeholder="Confirm" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
export default connect(Main);
