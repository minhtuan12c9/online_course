import React, { useState } from "react";
import Header from "../../components/Header";
import MenuAdmin from "../../components/MenuAdmin";
import Footer from "../../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AdminAddInstructor = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [link, setLink] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  // Hàm gửi form để thêm giảng viên
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tạo FormData để gửi file hình ảnh cùng dữ liệu form
    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("phone", phone);
    formData.append("link", link);
    formData.append("avatar", avatar);

    try {
      // Gửi request POST lên backend
      const response = await axios.post("http://localhost:8000/api/instructor/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Hiển thị thông báo thành công với SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Thêm giảng viên thành công",
        text: "Giảng viên đã được thêm vào hệ thống.",
      }).then(() => {
        // Điều hướng về trang /admininstructor sau khi thêm thành công
        navigate("/admininstructor");
      });

      // Làm mới các giá trị trong form sau khi thêm thành công
      setName("");
      setPosition("");
      setPhone("");
      setLink("");
      setAvatar(null);
    } catch (error) {
      // Xử lý nếu có lỗi
      console.error("Có lỗi khi thêm giảng viên", error);
      alert("Có lỗi khi thêm giảng viên");
    }
  };

  return (
    <div>
      <Header />
      <MenuAdmin />
      <div className="modal-dialog" style={{ zIndex: 1 }}>
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h5 className="modal-title fw-bold" id="staticBackdropLabel">
              Thêm giảng viên mới
            </h5>
          </div>
          <div className="modal-body">
            <div className="fw-bold">
              Avatar <span className="text-danger">*</span>
            </div>
            <input type="file" className="form-control" onChange={(e) => setAvatar(e.target.files[0])} />

            <div className="mt-2 fw-bold">
              Tên giảng viên <span className="text-danger">*</span>
            </div>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />

            <div className="mt-2 fw-bold">
              Vị trí <span className="text-danger">*</span>
            </div>
            <input type="text" className="form-control" value={position} onChange={(e) => setPosition(e.target.value)} required />

            <div className="mt-2 fw-bold">
              Số điện thoại <span className="text-danger">*</span>
            </div>
            <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />

            <div className="mt-2 fw-bold">
              Liên lạc <span className="text-danger">*</span>
            </div>
            <input type="text" className="form-control" value={link} onChange={(e) => setLink(e.target.value)} required />

            <hr />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                navigate("/admininstructor");
              }}
              data-bs-dismiss="modal"
            >
              Hủy
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Thêm
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminAddInstructor;
