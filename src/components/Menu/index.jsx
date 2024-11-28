import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setIsLoggedIn(true);
      setCurrentUser(userData);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setCurrentUser(null);
    Swal.fire("Đăng xuất", "Bạn đã đăng xuất thành công!", "success");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // CSS Styles
  const styles = {
    navItem: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    dropdownToggle: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "#333",
      cursor: "pointer",
    },
    userAvatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    dropdownMenu: {
      display: isDropdownOpen ? "block" : "none",
      position: "absolute",
      top: "100%",
      right: "0",
      backgroundColor: "white",
      border: "1px solid #ccc",
      borderRadius: "4px",
      width: "200px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      zIndex: "1000",
      listStyle: "none",
      padding: 0,
    },
    dropdownItem: {
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      textDecoration: "none",
      color: "#333",
      fontSize: "14px",
      cursor: "pointer",
    },
    btnLogin: {
      padding: "8px 16px",
      backgroundColor: "#ff6600",
      color: "white",
      textDecoration: "none",
      borderRadius: "4px",
      fontSize: "14px",
    },
  };

  return (
    <div>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <NavLink to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-uppercase text-primary">
              <i className="fa fa-book-reader mr-3"></i>Edukate
            </h1>
          </NavLink>
          <div className="collapse navbar-collapse justify-content-between px-lg-3">
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
              {/* <NavLink to="/khoahoccuatoi" className="nav-item nav-link" activeClassName="active" exact>
                Khoá học của tôi
              </NavLink> */}
              <a href="contact.html" className="nav-item nav-link">
                Liên hệ
              </a>
            </div>

            {isLoggedIn ? (
              <div style={styles.navItem}>
                <div className="dropdown">
                  <div className="dropdown-toggle" style={styles.dropdownToggle} onClick={toggleDropdown}>
                    <img src={`${process.env.REACT_APP_API_URL}/${currentUser?.avatar}`} alt="Avatar" style={styles.userAvatar} />
                    <span>{currentUser?.fullname || "Người dùng"}</span>
                  </div>
                  <ul style={styles.dropdownMenu}>
                    <li>
                      <NavLink to="/thongtincanhan" style={styles.dropdownItem}>
                        👤 Trang cá nhân
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/khoahoccuatoi" style={styles.dropdownItem}>
                        📚 Khoá học của tôi
                      </NavLink>
                    </li>
                    {currentUser?.isAdmin && (
                      <li>
                        <NavLink to="/admin" style={styles.dropdownItem}>
                          ⚙️ Quản lý Website
                        </NavLink>
                      </li>
                    )}
                    <li>
                      <button className="dropdown-item" style={styles.dropdownItem} onClick={logout}>
                        🚪 Đăng xuất
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink to="/dangnhap" className="btn-login" style={styles.btnLogin}>
                Đăng nhập
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
