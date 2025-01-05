import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const [courses, setCourses] = useState([]); // List of courses
  const [loading, setLoading] = useState(true); // Loading state
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const coursesPerPage = 6; // Courses per page

  AOS.init({
    offset: 120,
    duration: 400,
    easing: "ease",
    debounceDelay: 50,
    throttleDelay: 99,
  });

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/course");
        setCourses(response.data.reverse()); // Reverse order of courses
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const displayedCourses = courses.slice(startIndex, startIndex + coursesPerPage);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Courses Section */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
                  Tất cả khoá học
                </h6>
                <h1 className="display-4">Các khoá học hiệu quả</h1>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center">
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : (
            <div className="row">
              {displayedCourses.map((course) => (
                <div className="col-lg-4 col-md-6 pb-4" key={course.id}>
                  <NavLink data-aos="fade-up" data-aos-delay="200" className="courses-list-item position-relative d-block overflow-hidden mb-2" to={`/chitietkhoahoc/${course.id}`}>
                    <img className="img-fluid" src={process.env.REACT_APP_API_URL + "/" + course.coverImage} alt={course.name} />
                    <div className="courses-text">
                      <h4 style={{ maxWidth: "350px", textWrap: "wrap", display: "block" }} className="text-center text-white px-3">
                        {course.name}
                      </h4>
                      <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                          <span className="text-white">
                            <i className="fa fa-star mr-2"></i>
                            4,5
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

          {/* Pagination */}
          <div className="col-12">
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-lg justify-content-center mb-0">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button className="page-link rounded-0" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                    <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <button className="page-link rounded-0" onClick={() => handlePageChange(currentPage + 1)} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
