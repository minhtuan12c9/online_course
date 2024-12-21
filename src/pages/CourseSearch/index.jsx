import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const CoursesSearch = () => {
  const [courses, setCourses] = useState([]); // Lưu danh sách khóa học
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(""); // Trạng thái lỗi

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchName = queryParams.get("name"); // Lấy từ khóa tìm kiếm từ URL

  // Fetch danh sách khóa học
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(`http://localhost:8000/api/course/search`, {
          params: { name: searchName },
        });
        setCourses(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Không tìm thấy khoá học nào phù hợp.");
        } else {
          setError("Đã xảy ra lỗi khi tải khoá học.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (searchName) {
      fetchCourses();
    }
  }, [searchName]);
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
                  Kết quả tìm kiếm
                </h6>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center">
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : error ? (
            <div className="text-center">
              <p>{error}</p>
            </div>
          ) : (
            <div className="row">
              {courses.map((course) => (
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
        </div>
      </div>
    </div>
  );
};

export default CoursesSearch;
