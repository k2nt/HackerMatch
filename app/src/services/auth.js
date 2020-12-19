import fetchAPI from './api';

class Auth {

  constructor() {
    this.authenticated = false;
  }

  async login({ email, password, cb }) {
    const res = await fetchAPI ({
      method: "post", 
      endpoint: "/auth",
      data: {
        email: email,
        password: password,
      }
    });

    const verdict = res.data.success;

    if (verdict) {
      this.authenticated = true;
      cb();
    } else {
      this.authenticated = false;
    }
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

}

export default new Auth();