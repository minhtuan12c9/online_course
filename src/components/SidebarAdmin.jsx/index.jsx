import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { Editor } from "@tinymce/tinymce-react";

const SidebarAdmin = ({ setLessonContentActive }) => {
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
  const courseId = parseInt(params.id);
  const [course, setCourse] = useState(null); // Dữ liệu khóa học
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(course?.description);
  const [price, setPrice] = useState(course?.price);
  const [avatar, setAvatar] = useState(null);
  const avatarRef = useRef();

  // Xử lý thay đổi các input
  const handleFullnameChange = (e) => setName(e.target.value);
  const handleAvatarChange = (e) => setAvatar(e.target.files[0]);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  // Modal sửa khoá học
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Mở/Đóng Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddContentRedirect = (lessonId) => {
    navigate(`/adminaddlessoncontent/${lessonId}`);
  };
  const toggleLessonOptions = (lessonIndex) => {
    setSelectedLesson(selectedLesson === lessonIndex ? null : lessonIndex);
  };

  // Lấy thôgn tin khoá học
  useEffect(() => {
    // Lấy thông tin chi tiết khóa học theo id
    const fetchCourseDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/course/${courseId}`);
        setName(response.data.name);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setCourse(response.data); // Cập nhật thông tin khóa học
      } catch (error) {
        console.error("Error fetching course detail:", error);
      }
    };

    fetchCourseDetail();
  }, [courseId]);

  // Xoá chương
  const handleDeleteChapter = async (chapterId) => {
    try {
      // Hiển thị xác nhận trước khi xóa
      const result = await Swal.fire({
        title: "Bạn có chắc chắn?",
        text: "Hành động này sẽ xóa chương và tất cả bài học liên quan, không thể hoàn tác!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      });

      if (result.isConfirmed) {
        // Gọi API xóa chương
        await axios.delete(`http://localhost:8000/api/chapter/remove/${chapterId}`);

        // Cập nhật danh sách chương sau khi xóa thành công
        setChapters((prevChapters) => prevChapters.filter((chapter) => chapter.id !== chapterId));

        // Hiển thị thông báo thành công
        Swal.fire("Đã xóa!", "Chương đã được xóa.", "success");
      }
    } catch (error) {
      console.error("Error deleting chapter:", error);
      Swal.fire("Lỗi!", "Xảy ra lỗi khi xóa chương. Vui lòng thử lại.", "error");
    }
  };
  // Xoá khoá học
  const handleDeleteCourse = async (courseId) => {
    try {
      // Hiển thị xác nhận trước khi xóa
      const result = await Swal.fire({
        title: "Bạn có chắc chắn?",
        text: "Hành động này sẽ xóa toàn bộ khoá học, không thể hoàn tác!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      });

      if (result.isConfirmed) {
        // Gọi API xóa khoá học
        await axios.delete(`http://localhost:8000/api/course/remove/${courseId}`);
        // Hiển thị thông báo thành công
        Swal.fire("Đã xóa!", "Khoá học đã được xóa.", "success").then(() => {
          // Điều hướng sau khi bấm OK
          navigate("/admincourse");
        });
      }
    } catch (error) {
      console.error("Error deleting chapter:", error);
      Swal.fire("Lỗi!", "Xảy ra lỗi khi xóa chương. Vui lòng thử lại.", "error");
    }
  };

  // Xoá bài học
  const handleDeleteLesson = async (lessonId) => {
    try {
      // Hiển thị xác nhận trước khi xóa
      const result = await Swal.fire({
        title: "Bạn có chắc chắn?",
        text: "Hành động này sẽ xóa bài học và không thể hoàn tác!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      });

      if (result.isConfirmed) {
        // Gọi API xóa bài học
        await axios.delete(`http://localhost:8000/api/lesson/remove/${lessonId}`);

        // Cập nhật danh sách bài học sau khi xóa thành công
        setLessons((prevLessons) => prevLessons.filter((lesson) => lesson.id !== lessonId));

        // Hiển thị thông báo thành công và reload lại trang sau khi người dùng nhấn OK
        Swal.fire("Đã xóa!", "Bài học đã được xóa.", "success").then(() => {
          window.location.reload(); // Reload lại trang
        });
      }
    } catch (error) {
      console.error("Error deleting lesson:", error);
      Swal.fire("Lỗi!", "Xảy ra lỗi khi xóa bài học. Vui lòng thử lại.", "error");
    }
  };

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
      <div className="d-flex justify-content-center">
        <button className="btn btn-info rounded-pill mb-3 mr-2" style={{ fontWeight: "bold" }} onClick={openModal}>
          <img className="mr-1 mb-1" src="/assets2/icons/edit.png" style={{ width: "25px" }} alt="" /> Sửa khoá học
        </button>
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" style={{ width: "550px" }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="w-100 ml-4" style={{ textAlign: "center", display: "block", textTransform: "uppercase" }}>
                  Sửa thông tin khoá học
                </h5>
                <button type="button" className="close-button" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <img style={{ width: "200px", height: "150px", objectFit: "cover" }} className="img-fluid" src={avatar ? URL.createObjectURL(avatar) : `${process.env.REACT_APP_API_URL}/${course?.coverImage}`} alt="" />
                <div className="team-social">
                  <button type="button" class="btn btn-outline-primary mt-3 d-flex justify-content-center" onClick={() => avatarRef?.current?.click()}>
                    Tải ảnh lên
                  </button>
                  <input type="file" name="avatar" accept="image/png, image/gif, image/jpeg" ref={avatarRef} hidden onChange={handleAvatarChange} />
                </div>
              </div>
              <div className="modal-body">
                <p className="" style={{ textAlign: "start" }}>
                  Tên khoá học
                </p>
                <input className="modal-input" type="text" placeholder="Nhập tên khoá học" value={name} onChange={handleFullnameChange} />
              </div>
              <div className="modal-body">
                <p className="" style={{ textAlign: "start" }}>
                  Nội dung khoá học
                </p>
                <Editor
                  apiKey="frm7tf7lfr5mlqhxahguo3bgcvnp5xmsujdd56xg8zzhf5ct"
                  value={description}
                  onEditorChange={handleDescriptionChange}
                  init={{
                    height: 300,
                    menubar: true,
                    plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste code help wordcount"],
                    toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",
                  }}
                />
              </div>

              <div className="modal-body">
                <p className="" style={{ textAlign: "start" }}>
                  Giảng viên
                </p>
                <select className="form-select">
                  <option value="" disabled>
                    -- Chọn giảng viên --
                  </option>
                </select>
              </div>
              <div className="modal-body">
                <div className="mt-2 fw-bold">Giá tiền</div>
                <input type="text" className="form-control" value={price} onChange={handlePriceChange} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-success mt-2 fs-1 px-4">Lưu</button>
                <button className="btn btn-danger mt-2 fs-1 px-4" onClick={closeModal}>
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
        <button className="btn btn-danger rounded-pill mb-3" style={{ fontWeight: "bold" }} onClick={() => handleDeleteCourse(courseId)}>
          <img className="mr-1 mb-1" src="/assets2/icons/delete.png" style={{ width: "25px" }} alt="" /> Xoá khoá học
        </button>
      </div>

      <button className="btn btn-success rounded-pill mb-3" style={{ fontWeight: "bold" }} onClick={() => setShowModal(true)}>
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

      {/* Modal Form 2 */}
      {showModal2 && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>Thêm Bài Học Mới</h3>
            <input type="text" placeholder="Nhập tên bài học" value={lessonName} onChange={(e) => setLessonName(e.target.value)} style={styles.input} />
            {error && <div style={styles.errorText}>{error}</div>}
            <input type="text" placeholder="Nhập thời lượng bài học" value={lessonTime} onChange={(e) => setLessonTime(e.target.value)} style={styles.input} />
            {error && <div style={styles.errorText}>{error}</div>}
            <div style={styles.modalActions}>
              <button className="btn btn-success" onClick={handleFormSubmit2}>
                Lưu
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setShowModal2(false);
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
              <div className="d-flex justify-content-center w-100">
                <button className="btn btn-info rounded-pill mb-3 mr-2" style={{ fontWeight: "bold" }} onClick={() => setShowModal2(true)}>
                  <img className="mr-1 mb-1" src="/assets2/icons/edit.png" style={{ width: "25px" }} alt="" /> Sửa chương
                </button>
                <button className="btn btn-danger rounded-pill mb-3" style={{ fontWeight: "bold" }} onClick={() => handleDeleteChapter(chapter.id)}>
                  <img className="mr-1 mb-1" src="/assets2/icons/delete.png" style={{ width: "25px" }} alt="" /> Xoá chương
                </button>
              </div>
              <button className="btn btn-success rounded-pill mb-3" style={{ fontWeight: "bold" }} onClick={() => setShowModal2(true)}>
                + Thêm bài học mới
              </button>
              {/* Danh sách bài học */}
              {lessons.length > 0 ? (
                lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex}>
                    <button
                      onClick={() => {
                        toggleLessonOptions(lessonIndex);
                        setLessonContentActive(lesson.lessonContents[0]);
                      }}
                      style={{ fontSize: "15px", borderRadius: "10px", marginBottom: "10px" }}
                      className="p-2 btn btn-light"
                    >
                      {lesson.name} - {lesson.durationMinutes} phút
                    </button>
                    {selectedLesson === lessonIndex && (
                      <div className="d-flex flex-column" style={{ padding: "5px" }}>
                        <button className="btn btn-primary mb-2" onClick={() => handleAddContentRedirect(lesson.id)}>
                          Thêm
                        </button>
                        <button className="btn btn-warning mb-2" onClick={() => console.log("Sửa bài học", lesson.id)}>
                          Sửa bài học
                        </button>
                        <button className="btn btn-danger" onClick={() => handleDeleteLesson(lesson.id)}>
                          Xóa bài học
                        </button>
                      </div>
                    )}
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

export default SidebarAdmin;
