import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  // State để lưu dữ liệu biểu mẫu
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
    agreeTerm: false,
  });

  const [errorMessage, setErrorMessage] = useState(""); // Lưu lỗi nếu có

  // Xử lý sự thay đổi dữ liệu trong các input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Xử lý khi người dùng submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xác nhận mật khẩu
    if (formData.password !== formData.re_password) {
      setErrorMessage("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
      return;
    }

    // Kiểm tra nếu người dùng chưa đồng ý điều khoản
    if (!formData.agreeTerm) {
      setErrorMessage("Bạn phải đồng ý với điều khoản sử dụng.");
      return;
    }

    try {
      // Gửi yêu cầu đăng ký (API call)
      const response = await axios.post("http://localhost:8080/api/user", {
        fullname: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200 || response.status === 201) {
        // Hiển thị thông báo thành công
        Swal.fire({
          title: "Thành công!",
          text: "Đăng ký tài khoản thành công!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/dangnhap"); // Chuyển hướng sau khi người dùng bấm OK
        });
      }
    } catch (error) {
      // Hiển thị thông báo lỗi
      Swal.fire({
        title: "Lỗi!",
        text: "Đăng ký tài khoản thất bại. Vui lòng thử lại.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Đăng ký</h2>
              <form method="POST" className="register-form" id="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" placeholder="Họ tên" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="password" id="password" placeholder="Mật khẩu" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="re_password">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input type="password" name="re_password" id="re_password" placeholder="Nhập lại mật khẩu" value={formData.re_password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="checkbox" name="agreeTerm" id="agree-term" className="agree-term" checked={formData.agreeTerm} onChange={handleChange} />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    Tôi đã đọc kỹ các nội dung và quy định của{" "}
                    <a href="#" className="term-service">
                      Điều lệ hoạt động
                    </a>
                  </label>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Đăng ký" />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="login2/images/signup-image.jpg" alt="sing up" />
              </figure>
              <NavLink to="/dangnhap" className="signup-image-link btn-secondary">
                Đã có tài khoản học viên
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
