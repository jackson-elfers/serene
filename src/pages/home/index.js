import React from "react";

function Main(props) {
  return (
    <div>
      <h1>Home</h1>
      <hr />
      <div className="box">
        <h2>About</h2>
        <p>
          This is a lightweight spa implementation of create-react-app that won't make me cry (as much). It uses a
          simple folder structure to support a minimal usage of redux for user state and global error handling. Hooks
          are used to fetch api data and manage independent component state.
        </p>
      </div>
    </div>
  );
}
export default Main;
