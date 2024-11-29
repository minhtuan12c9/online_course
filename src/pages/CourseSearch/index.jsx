import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CoursesSearch = () => {
  const [courses, setCourses] = useState([]); // Lưu danh sách khóa học
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu

  // Fetch danh sách khóa học
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/course"); // Thay URL theo API của bạn
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div>
      {/* <!-- Courses Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
                  Khoá học tương ứng
                </h6>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center">
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : (
            <div className="row">
              {[...courses].reverse().map((course) => (
                <div className="col-lg-4 col-md-6 pb-4" key={course.id}>
                  <NavLink className="courses-list-item position-relative d-block overflow-hidden mb-2" to={`/chitietkhoahoc/${course.id}`}>
                    <img className="img-fluid" src={process.env.REACT_APP_API_URL + "/" + course.coverImage} alt={course.name} />
                    <div className="courses-text">
                      <h4 style={{ maxWidth: "350px", textWrap: "wrap", display: "block" }} className="text-center text-white px-3">
                        {course.name}
                      </h4>
                      <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                          <span className="text-white">
                            <i className="fa fa-star mr-2"></i>
                            {course.rating} <small>({course.reviews})</small>
                          </span>
                          <span className="text-white">{course.price.toLocaleString("vi-VN")} VNĐ</span>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          )}

          {/* Pagination
          <div className="col-12">
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-lg justify-content-center mb-0">
                <li className="page-item disabled">
                  <a className="page-link rounded-0" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
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
                  <a className="page-link rounded-0" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
      {/* <!-- Courses End --> */}
    </div>
  );
};

export default CoursesSearch;
