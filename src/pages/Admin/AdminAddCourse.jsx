import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import MenuAdmin from "../../components/MenuAdmin";
import Footer from "../../components/Footer";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminAddCourse = () => {
  const [courseName, setCourseName] = useState(""); // Tên khóa học
  const [coursePrice, setCoursePrice] = useState(""); // Giá tiền
  const [courseContent, setCourseContent] = useState(""); // Nội dung khóa học
  const [instructors, setInstructors] = useState([]); // Danh sách giảng viên
  const [selectedInstructor, setSelectedInstructor] = useState(""); // Giảng viên được chọn
  const [courseImage, setCourseImage] = useState(null); // Ảnh khóa học
  const [loading, setLoading] = useState(false); // Trạng thái thêm khóa học
  const navigate = useNavigate();

  // Fetch danh sách giảng viên
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/instructor");
        setInstructors(response.data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };
    fetchInstructors();
  }, []);

  // Xử lý khi chọn ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCourseImage(file);
  };

  // Xử lý khi thay đổi nội dung trong Editor
  const handleEditorChange = (content) => {
    setCourseContent(content);
  };

  // Gửi form thêm khóa học
  const handleAddCourse = async () => {
    if (!courseName || !coursePrice || !selectedInstructor || !courseContent || !courseImage) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const formData = new FormData();
    formData.append("name", courseName);
    formData.append("price", coursePrice);
    formData.append("instructorId", selectedInstructor);
    formData.append("description", courseContent);
    formData.append("imgFile", courseImage);
    formData.append("totalDurationMinutes", 0);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/api/course/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Hiển thị thông báo thành công với SweetAlert2
      Swal.fire({
        title: "Thành công!",
        text: "Khoá học đã được thêm thành công.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Sau khi thông báo xong, chuyển hướng đến trang /admincourse
        navigate("/admincourse");
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <MenuAdmin />
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h5 className="modal-title fw-bold" id="staticBackdropLabel">
              Thêm khoá học mới
            </h5>
          </div>
          <div className="modal-body">
            <div className="fw-bold">
              Ảnh khoá học <span className="text-danger">*</span>
            </div>
            <input type="file" className="form-control" onChange={handleImageChange} />

            <div className="mt-2 fw-bold">
              Tên khoá học <span className="text-danger">*</span>
            </div>
            <input type="text" className="form-control" value={courseName} onChange={(e) => setCourseName(e.target.value)} />

            <div className="mt-2 fw-bold">
              Giảng viên <span className="text-danger">*</span>
            </div>
            <select className="form-select" value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)}>
              <option value="" disabled>
                -- Chọn giảng viên --
              </option>
              {instructors.map((instructor) => (
                <option key={instructor.id} value={instructor.id}>
                  {instructor.name}
                </option>
              ))}
            </select>

            <div className="mt-2 fw-bold">
              Nội dung khoá học <span className="text-danger">*</span>
            </div>
            <Editor
              apiKey="frm7tf7lfr5mlqhxahguo3bgcvnp5xmsujdd56xg8zzhf5ct"
              value={courseContent}
              onEditorChange={handleEditorChange}
              init={{
                height: 300,
                menubar: true,
                plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste code help wordcount"],
                toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",
              }}
            />

            <div className="mt-2 fw-bold">
              Giá tiền <span className="text-danger">*</span>
            </div>
            <input type="number" className="form-control" value={coursePrice} onChange={(e) => setCoursePrice(e.target.value)} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Hủy
            </button>
            <button type="button" className="btn btn-primary" onClick={handleAddCourse} disabled={loading}>
              {loading ? "Đang thêm..." : "Thêm"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminAddCourse;
