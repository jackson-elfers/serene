import Session from "./session";

const axios = require("axios");

const method = {
  axios: axios,
};

export const session = new Session({ method: method });
