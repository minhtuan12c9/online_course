import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MyCourses = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin user từ localStorage
  const userId = user?.id; // Lấy userId
  const [courses, setCourses] = useState([]); // Lưu danh sách khóa học của người dùng
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu

  // Gọi API để lấy danh sách khóa học
  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user-course`, { params: { userId } });
        setCourses(response.data); // Lưu kết quả API vào state
      } catch (error) {
        console.error("Error fetching user courses:", error);
      } finally {
        setLoading(false); // Dừng trạng thái loading
      }
    };

    if (userId) {
      fetchUserCourses();
    } else {
      console.error("User ID not found.");
    }
  }, [userId]);

  return (
    <div>
      {/* <!-- Courses Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
                  Khoá học của tôi
                </h6>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center">
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : courses.length > 0 ? (
            <div className="row">
              {courses.map((course) => (
                <div className="col-lg-4 col-md-6 pb-4" key={course.id}>
                  <NavLink className="courses-list-item position-relative d-block overflow-hidden mb-2" to={`/chitietkhoahoc/${course.id}`}>
                    <img className="img-fluid" src={process.env.REACT_APP_API_URL + "/" + course.cover_imageCourse} alt={course.nameCourse} />
                    <div className="courses-text">
                      <h4 className="text-center text-white px-3">{course.nameCourse}</h4>
                      <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                          <span className="text-white">
                            <i className="fa fa-star mr-2"></i>
                            {course.ratingCourseReview} <small>({course.sum})</small>
                          </span>
                          <span className="text-white">
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{ width: `${course.timePercentCourse}%` }} aria-valuenow={course.progress} aria-valuemin="0" aria-valuemax="100">
                                {course.timePercentCourse}%
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p>Không có khoá học nào được tìm thấy.</p>
            </div>
          )}
        </div>
      </div>
      {/* <!-- Courses End --> */}

      <div className="col-12">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg justify-content-center mb-0">
            <li className="page-item disabled">
              <a className="page-link rounded-0" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link rounded-0" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MyCourses;
