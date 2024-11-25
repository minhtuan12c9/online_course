import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <NavLink to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-uppercase text-primary">
              <i className="fa fa-book-reader mr-3"></i>Edukate
            </h1>
          </NavLink>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <NavLink to="/" className="nav-item nav-link" activeClassName="active" exact>
                Trang chủ
              </NavLink>
              <NavLink to="/khoahoc" className="nav-item nav-link" activeClassName="active" exact>
                Khoá học
              </NavLink>
              <NavLink to="/giangvien" className="nav-item nav-link" activeClassName="active" exact>
                Giảng viên
              </NavLink>
              <NavLink to="/khoahoccuatoi" className="nav-item nav-link" activeClassName="active" exact>
                Khoá học của tôi
              </NavLink>
              <a href="contact.html" className="nav-item nav-link">
                Liên hệ
              </a>
            </div>
            <NavLink to="/dangnhap" className="btn btn-primary py-2 px-4 d-none d-lg-block">
              Đăng nhập
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{ marginBottom: "90px" }}>
        <div className="container text-center my-5 py-5" style={{ backgroundColor: "transparent" }}>
          <h1 className="text-white mt-4 mb-4 text-uppercase">Học Mọi Lúc Mọi Nơi</h1>
          <h1 className="text-white display-1 mb-5 text-uppercase">Khoá học online Edukate</h1>
          <div className="mx-auto mb-5" style={{ width: "100%", maxWidth: "600px" }}>
            <div className="input-group">
              <input type="text" className="form-control border-light" style={{ padding: "30px 25px" }} placeholder="Nhập tên khoá học cần tìm" />
              <div className="input-group-append">
                <button className="btn btn-primary px-4 px-lg-5">Tìm kiếm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </div>
  );
};

export default Menu;
