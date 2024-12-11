import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn tải lại trang
    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem("user", JSON.stringify({ id: data.id, email: data.email, fullname: data.fullname, avatar: data.avatar }));
        // Hiển thị thông báo thành công
        Swal.fire({
          title: "Thành công!",
          text: "Đăng nhập thành công!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/"); // Chuyển hướng sau khi người dùng bấm OK
        });
      } else {
        Swal.fire("Error", "Tài khoản hoặc mật khẩu không đúng!", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Đã xảy ra lỗi, vui lòng thử lại!", "error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="login2/images/signin-image.jpg" alt="sign in" />
              </figure>
              <a href="/dangky" className="signup-image-link btn-secondary">
                Đăng ký tài khoản học viên ngay
              </a>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Đăng nhập</h2>
              <form method="POST" className="register-form" id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                  <label htmlFor="remember-me" className="label-agree-term">
                    Luôn ghi nhớ tài khoản này
                  </label>
                </div>
                <div className="form-group form-button d-flex align-items-center">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Đăng nhập"
                    style={{ marginRight: "10px" }} // Khoảng cách giữa hai nút
                  />
                  <button type="button" className="form-submit btn-secondary mb-2 py-3 px-5" style={{ backgroundColor: "#ff6600" }} onClick={() => navigate("/")}>
                    Trang chủ
                  </button>
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Hoặc đăng nhập bằng</span>
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
