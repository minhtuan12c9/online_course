import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SidebarAdmin = () => {
  const [activeAccordion, setActiveAccordion] = useState(null); // Trạng thái accordion
  const [showModal, setShowModal] = useState(false); // Trạng thái hiển thị modal
  const [chapterName, setChapterName] = useState(""); // Tên chương nhập vào
  const [chapters, setChapters] = useState([]); // Danh sách chương
  const [error, setError] = useState(null); // Trạng thái lỗi khi thêm chương mới
  const params = useParams();
  const navigate = useNavigate();
  const [reloadKey, setReloadKey] = useState(0);

  // Fetch danh sách chương từ API
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/chapter"); // API endpoint
        setChapters(response.data); // Gán dữ liệu chương vào state
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, [reloadKey]);

  // Toggle trạng thái accordion
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Xử lý lưu chương mới
  const handleFormSubmit = async () => {
    if (!chapterName.trim()) {
      setError("Tên chương không được để trống!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/chapter/add", {
        name: chapterName,
        description: "",
        courseId: parseInt(params.id),
      });
      setChapters([...chapters, response.data]); // Thêm chương mới vào danh sách
      setChapterName(""); // Reset input
      setShowModal(false); // Đóng modal
      setError(null); // Xóa lỗi
      // Hiển thị thông báo thành công với SweetAlert2
      Swal.fire({
        title: "Thành công!",
        text: "Khoá học đã được thêm thành công.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Sau khi thông báo xong, chuyển hướng đến trang /adminchapter
        setReloadKey((prevState) => prevState + 1);
      });
    } catch (error) {
      setError("Lỗi khi thêm chương mới. Vui lòng thử lại!");
      console.error("Error adding chapter:", error);
    }
  };

  // CSS styles
  const styles = {
    accordion: {
      position: "sticky",
      top: 0,
      left: 0,
      width: "600px",
      backgroundColor: "#f8f9fa",
      borderRight: "1px solid #dee2e6",
      padding: "1rem",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      maxHeight: "100vh",
      overflowY: "auto",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      width: "400px",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
    },
    modalActions: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
    },
    button: (isActive) => ({
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: "10px",
      backgroundColor: isActive ? "#e9ecef" : "#fff",
      border: "none",
      cursor: "pointer",
      fontSize: "20px",
    }),
  };

  return (
    <div style={styles.accordion}>
      <button className="btn btn-success rounded-pill mb-3" onClick={() => setShowModal(true)}>
        + Thêm chương mới
      </button>

      {/* Modal Form */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>Thêm Chương Mới</h3>
            <input type="text" placeholder="Nhập tên chương" value={chapterName} onChange={(e) => setChapterName(e.target.value)} style={styles.input} />
            {error && <div style={styles.errorText}>{error}</div>}
            <div style={styles.modalActions}>
              <button className="btn btn-success" onClick={handleFormSubmit}>
                Lưu
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setShowModal(false);
                  setError(null);
                }}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Danh sách chương */}
      {chapters.map((chapter, index) => (
        <div className="d-flex flex-column" key={index}>
          <button style={styles.button(activeAccordion === index)} onClick={() => toggleAccordion(index)}>
            {chapter.name}
            <p>{chapter.description}</p>
          </button>
          {activeAccordion === index && (
            <div className="d-flex flex-column" style={{ padding: "10px", backgroundColor: "#f8f9fa" }}>
              <button className="btn btn-success rounded-pill mb-3" onClick={() => setShowModal(true)}>
                + Thêm bài học mới
              </button>
              <button style={{ fontSize: "15px", borderRadius: "10px" }} className="p-2">
                Khái niệm về phần mềm
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarAdmin;
