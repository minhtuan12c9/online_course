import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setLessonContentActive, setLessonActive, lessonActive, reloadChildKey }) => {
  const [activeAccordion, setActiveAccordion] = useState(null); // Trạng thái accordion
  const [showModal, setShowModal] = useState(false); // Trạng thái hiển thị modal
  const [showModal2, setShowModal2] = useState(false); // Trạng thái hiển thị modal
  const [chapterName, setChapterName] = useState(""); // Tên chương nhập vào
  const [chapters, setChapters] = useState([]); // Danh sách chương
  const [lessonName, setLessonName] = useState(""); // Tên bài học nhập vào
  const [lessonTime, setLessonTime] = useState(""); // Thời lượng nhập vào
  const [lessons, setLessons] = useState([]); // Danh sách bài học
  const [error, setError] = useState(null); // Trạng thái lỗi khi thêm chương mới
  const params = useParams();
  const navigate = useNavigate();
  const [reloadKey, setReloadKey] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(null); // Trạng thái bài học được chọn
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin user từ localStorage
  const userId = user?.id; // Lấy userId
  const [userProgresses, setUserProgresses] = useState([]);

  const handleAddContentRedirect = (lessonId) => {
    navigate(`/adminaddlessoncontent/${lessonId}`);
  };
  const toggleLessonOptions = (lessonIndex) => {
    setSelectedLesson(selectedLesson === lessonIndex ? null : lessonIndex);
  };
  // Fetch danh sách user progress
  useEffect(() => {
    const fetchUserProgresses = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user-progress/${userId}/${parseInt(params.id)}`); // API endpoint
        setUserProgresses(response.data); // Gán dữ liệu chương vào state
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchUserProgresses();
  }, [activeAccordion, reloadKey]);

  useEffect(() => {
    if (reloadChildKey) setReloadKey((prev) => prev + 1);
  }, [reloadChildKey]);

  // Fetch danh sách chương từ API
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/chapter/${parseInt(params.id)}`); // API endpoint
        setChapters(response.data); // Gán dữ liệu chương vào state
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, [reloadKey]);
  // Fetch danh sách bài học từ API
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/lesson/${parseInt(chapters[activeAccordion].id)}`); // API endpoint
        setLessons(response.data); // Gán dữ liệu chương vào state
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchLessons();
  }, [activeAccordion, reloadKey]);

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
        text: "Đã thêm 1 chương mới",
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
  // Xử lý lưu bài học mới
  const handleFormSubmit2 = async () => {
    if (!lessonName.trim()) {
      setError("Tên bài học không được để trống!");
      return;
    }
    if (!lessonName.trim()) {
      setError("Vui lòng nhập thời lượng bài học!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/lesson/add", {
        name: lessonName,
        durationMinutes: lessonTime,
        chapterId: chapters[activeAccordion].id,
      });
      setLessons([...lessons, response.data]); // Thêm bài học mới vào danh sách
      setLessonName(""); // Reset input
      setLessonTime("");
      setShowModal2(false); // Đóng modal
      setError(null); // Xóa lỗi
      // Hiển thị thông báo thành công với SweetAlert2
      Swal.fire({
        title: "Thành công!",
        text: "Đã thêm 1 bài học mới",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Sau khi thông báo xong, chuyển hướng đến trang /adminchapter
        setReloadKey((prevState) => prevState + 1);
      });
    } catch (error) {
      setError("Lỗi khi thêm bài học mới. Vui lòng thử lại!");
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
      {/* Danh sách chương */}
      {chapters.map((chapter, index) => (
        <div className="d-flex flex-column" key={index}>
          <button style={styles.button(activeAccordion === index)} onClick={() => toggleAccordion(index)}>
            {chapter.name}
            <p>{chapter.description}</p>
          </button>
          {activeAccordion === index && (
            <div className="d-flex flex-column" style={{ padding: "10px", backgroundColor: "#f8f9fa" }}>
              {/* Danh sách bài học */}
              {lessons.length > 0 ? (
                lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex}>
                    <button
                      onClick={() => {
                        const isUnlock = userProgresses.find((i) => i.lessonId === lesson.id)?.isUnlock === 1;
                        if (isUnlock) {
                          toggleLessonOptions(lessonIndex);
                          setLessonContentActive(lesson.lessonContents[0]);
                          setLessonActive(lesson);
                        } else {
                          Swal.fire({
                            icon: "warning",
                            title: "Ôi bạn ơi!",
                            text: "Bạn cần hoàn thành bài học trước để mở khóa bài học này.",
                            confirmButtonText: "Đã hiểu",
                          });
                        }
                      }}
                      style={{ fontSize: "15px", borderRadius: "10px", marginBottom: "10px", backgroundColor: lesson.id === lessonActive?.id ? "#e9ecef" : "#fff" }}
                      className="p-2 btn btn-light w-75"
                    >
                      {lesson.name} - {lesson.durationMinutes} phút {userProgresses.length > 0 && userProgresses.find((i) => i.lessonId === lesson.id)?.isUnlock === 0 && <img className="ml-2 mb-1" style={{ width: "20px" }} src="/assets2/icons/lock.png" alt="Locked" />}
                    </button>
                  </div>
                ))
              ) : (
                <p>Không có bài học nào.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
