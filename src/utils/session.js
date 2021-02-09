class Main {
  constructor(props) {
    this.method = props.method;
  }

  _setHeader(data) {
    this.method.axios.defaults.headers.common = data;
  }

  setAuth(data) {
    localStorage.setItem("Authorization", data.Authorization);
    this._setHeader({ Authorization: data.Authorization });
  }

  removeAuth() {
    localStorage.removeItem("Authorization");
    this._setHeader({});
  }

  getSession() {
    const session = localStorage.getItem("Authorization");
    this._setHeader(session !== null ? { Authorization: session } : {});
  }
}

export default Main;
