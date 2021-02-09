import React from "react";
import axios from "axios";
import check from "check-types";
import { LoggedIn } from "../../components";
import { routes, api } from "../../config";
import { connect } from "../../redux";

function Main(props) {
  async function deleteAccount(e) {
    e.preventDefault();
    const form = document.getElementById("formOne");
    try {
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  return (
    <div>
      <LoggedIn />
      <h1>Remove Account</h1>
      <hr />
      <p>Are you sure? All your information will be removed.</p>
      <form id="formOne" onSubmit={deleteAccount}>
        <input type="text" name="deleteme" placeholder="delete me" />
        <input type="submit" value="Remove Account" />
      </form>
    </div>
  );
}
export default connect(Main);
