import React from "react";
import axios from "axios";
import check from "check-types";
import { Back, LoggedIn } from "../../components";
import { routes, api } from "../../config";
import errors from "../../errors";
import { connect } from "../../redux";

function Main(props) {
  async function updatePassword(e) {
    e.preventDefault();
    const form = document.getElementById("formOne");
    const data = { password: form.password.value };
    try {
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  return (
    <div>
      <LoggedIn />
      <h1>Update Password</h1>
      <hr />
      <form id="formOne" onSubmit={updatePassword}>
        <input type="password" name="password" placeholder="password" />
        <input type="password" name="confirm" placeholder="password confirm" />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
export default connect(Main);
