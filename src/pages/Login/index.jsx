import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* <!-- Sing in  Form --> */}
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="login2/images/signin-image.jpg" alt="sing up image" />
              </figure>
              <NavLink to="/dangky" className="signup-image-link btn-secondary">
                Đăng ký tài khoản học viên ngay
              </NavLink>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Đăng nhập</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label for="your_name">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="text" name="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="your_pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                </div>
                <div className="form-group">
                  <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                  <label for="remember-me" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    Luôn ghi nhớ tài khoản này
                  </label>
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
