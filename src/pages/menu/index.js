import React from "react";
import { Menu, LoggedIn } from "../../components";
import { connect } from "../../redux";
import { routes, api } from "../../config";

function Main(props) {
  function menu() {
    return [
      [
        "🏠 Home",
        () => {
          props.history.push(routes.Home);
        },
      ],
      [
        "🔧 Account",
        () => {
          props.history.push(routes.Account);
        },
      ],
      [
        "👤 Login",
        () => {
          props.history.push(routes.Login);
        },
      ],
      [
        "🚪 Logout",
        () => {
          props.history.push(routes.Logout);
        },
      ],
    ];
  }

  return (
    <div>
      <h1>Menu</h1>
      <hr />
      <Menu data={menu()} />
    </div>
  );
}

export default connect(Main);
