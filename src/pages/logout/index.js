import React from "react";
import axios from "axios";
import check from "check-types";
import { routes, api } from "../../config";
import { connect } from "../../redux";

function Main(props) {
  async function logout(e) {
    e.preventDefault();
    const form = document.getElementById("formOne");
    try {
      props.actions.user.clear();
      props.history.push(routes.Home);
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  return (
    <div>
      <h1>Logout</h1>
      <hr />
      <div className="box">
        <h2>Headed out?</h2>
        <p>Have a great rest of your day!</p>
      </div>
      <form id="formOne" onSubmit={logout}>
        <input type="submit" value="Logout" />
      </form>
    </div>
  );
}
export default connect(Main);
