import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import MenuAdmin from "../../components/MenuAdmin";
import Footer from "../../components/Footer";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AdminAddLessonContent = () => {
  const [courseContent, setCourseContent] = useState(""); // Nội dung khóa học

  const [courseImage, setCourseImage] = useState(null); // Ảnh khóa học
  const [loading, setLoading] = useState(false); // Trạng thái thêm khóa học
  const navigate = useNavigate();
  const params = useParams();

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
    if (!courseContent) {
      alert("Vui lòng nhập nội dung bài học!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/lesson-content/add", {
        content: courseContent,
        lessonId: parseInt(params.id),
      });

      Swal.fire({
        title: "Thành công!",
        text: "Đã thêm nội dung bài học thành công",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Sau khi thông báo xong, chuyển hướng đến trang /admincourse
        navigate(-1);
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
              Thêm nội dung bài học
            </h5>
          </div>
          <div className="modal-body">
            <div className="mt-2 fw-bold">
              Nội dung bài học <span className="text-danger">*</span>
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

export default AdminAddLessonContent;
