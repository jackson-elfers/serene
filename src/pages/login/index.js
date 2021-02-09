import React from "react";
import axios from "axios";
import check from "check-types";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { Link } from "react-router-dom";
import { session } from "../../utils";

function Main(props) {
  async function login(e) {
    e.preventDefault();
    const form = document.getElementById("formOne");
    const data = { email: form.email.value, password: form.password.value };
    try {
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <form id="formOne" onSubmit={login}>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>

      <Link to={`${routes.Recover}`}>
        <div className="box">
          <p>Pssst, did you forget your password? Click Here.</p>
        </div>
      </Link>

      <Link to={`${routes.Register}`}>
        <div className="box">
          <p>Don't have an account yet? Click Here.</p>
        </div>
      </Link>
    </div>
  );
}
export default connect(Main);
