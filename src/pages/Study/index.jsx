import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "./../../components/Footer/index";
import Sidebar from "../../components/Sidebar";

const Study = () => {
  return (
    <div>
      <Header />
      {/* Menu Start */}
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
      {/* Menu End */}

      <div className="">
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
};

export default Study;
