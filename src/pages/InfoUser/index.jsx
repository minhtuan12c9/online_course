import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import "./index.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const InfoUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin user từ localStorage
  const userId = user?.id; // Lấy userId

  // Mở/Đóng Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [fullname, setFullname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Xử lý thay đổi các input
  const handleFullnameChange = (e) => setFullname(e.target.value);
  const handleAvatarChange = (e) => setAvatar(e.target.files[0]);
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  // Gửi dữ liệu cập nhật fullname và avatar
  const handleSaveProfile = async () => {
    const formData = new FormData();
    formData.append("fullname", fullname);
    if (avatar) {
      formData.append("avatar", avatar); // Gửi file avatar
    }

    try {
      const response = await axios.put(`http://localhost:8000/api/user/update/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Cập nhật thông tin thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật thông tin:", error);
      alert("Cập nhật thất bại!");
    }
  };

  // Gửi dữ liệu đổi mật khẩu
  const handleChangePassword = async () => {
    const { oldPassword, newPassword, confirmPassword } = passwordData;

    if (newPassword !== confirmPassword) {
      alert("Mật khẩu mới và xác nhận mật khẩu không khớp!");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8000/api/user/update/${userId}`, {
        oldPassword,
        newPassword,
      });
      alert("Đổi mật khẩu thành công!");
      closeModal();
    } catch (error) {
      console.error("Lỗi khi đổi mật khẩu:", error);
      alert("Đổi mật khẩu thất bại!");
    }
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "75px" }}>
        <div className="card shadow-lg text-center" style={{ maxWidth: "1000px" }}>
          <div
            className="card-body"
            style={{
              width: "1000px",
              fontSize: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2 className="card-title">THÔNG TIN CÁ NHÂN</h2>
            <img style={{ width: "250px", height: "250px", objectFit: "cover" }} className="img-fluid rounded-circle" src={avatar ? URL.createObjectURL(avatar) : "assets2/img/loi.png"} alt="" />
            <div className="team-social">
              <button type="button" class="btn btn-outline-primary mt-3" onChange={handleAvatarChange}>
                Tải ảnh lên
              </button>
            </div>
            <div className="d-flex flex-column mt-3 w-50">
              <p className="d-block w-100" style={{ textAlign: "start" }}>
                Email
              </p>
              <input className="border border-3" value={"hophanminhtuan2619@gmail.com"} type="text" style={{ fontSize: "15px" }} disabled />
            </div>
            <div className="d-flex flex-column mt-2 w-50">
              <p className="d-block w-100" style={{ textAlign: "start" }}>
                Họ tên
              </p>
              <input className="border border-3" placeholder="Nhập họ và tên" type="text" value={fullname} onChange={handleFullnameChange} style={{ fontSize: "15px" }} />
            </div>
            <button type="button" className="btn btn-outline-primary mt-3" onClick={openModal}>
              Đổi mật khẩu
            </button>
            <div className="mt-2">
              <NavLink to="/">
                <button className="btn btn-success mt-2 fs-1 px-4" onClick={handleSaveProfile}>
                  Lưu
                </button>
              </NavLink>
              <button className="btn btn-danger mt-2 fs-1 ml-3 px-4">Huỷ</button>
            </div>
            {/* Modal */}
            {isModalOpen && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" style={{ width: "550px" }} onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <h5 className="w-100 ml-4" style={{ textAlign: "center", display: "block", textTransform: "uppercase" }}>
                      Thay đổi mật khẩu
                    </h5>
                    <button type="button" className="close-button" onClick={closeModal}>
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p className="" style={{ textAlign: "start" }}>
                      Nhập mật khẩu cũ
                    </p>
                    <input type="password" className="modal-input" name="oldPassword" value={passwordData.oldPassword} onChange={handlePasswordChange} placeholder="Mật khẩu cũ" />
                  </div>
                  <div className="modal-body">
                    <p className="" style={{ textAlign: "start" }}>
                      Nhập mật khẩu mới
                    </p>
                    <input type="password" className="modal-input" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} placeholder="Mật khẩu mới" />
                  </div>
                  <div className="modal-body">
                    <p className="" style={{ textAlign: "start" }}>
                      Nhập lại mật khẩu mới
                    </p>
                    <input type="password" className="modal-input" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} placeholder="Nhập lại mật khẩu mới" />
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success mt-2 fs-1 px-4" onClick={handleChangePassword}>
                      Lưu
                    </button>
                    <button className="btn btn-danger mt-2 fs-1 px-4" onClick={closeModal}>
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfoUser;
