export class AuthService {
  isLoggedin = false;

  isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedin);

      }, 1000);
    });
  }

  login() {
    this.isLoggedin = true;
  }

  logOut() {
    this.isLoggedin = false;
  }
}
