import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams(); // Lấy id khóa học từ URL
  const [course, setCourse] = useState(null); // Dữ liệu khóa học
  const [rating, setRating] = useState(0); // Đánh giá khóa học

  useEffect(() => {
    // Lấy thông tin chi tiết khóa học theo id
    const fetchCourseDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/course/${id}`);
        setCourse(response.data); // Cập nhật thông tin khóa học
      } catch (error) {
        console.error("Error fetching course detail:", error);
      }
    };

    fetchCourseDetail();
  }, [id]);

  // Kiểm tra xem dữ liệu đã được tải xong chưa
  if (!course) return <div>Loading...</div>;
  return (
    <div>
      {/* <!-- Detail Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-5">
                <div className="section-title position-relative mb-5">
                  <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2">Chi tiết khoá học</h6>
                  <h1 className="display-4">{course?.name}</h1>
                </div>
                <img className="img-fluid rounded w-100 mb-4" src={process.env.REACT_APP_API_URL + "/" + course?.coverImage} alt="Image" />
              </div>

              <div dangerouslySetInnerHTML={{ __html: course?.description }} />
            </div>

            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="bg-primary mb-5 py-3">
                <h3 className="text-white py-3 px-2 text-center m-0">Thông tin khoá học</h3>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Đánh giá</h6>
                  <h6 className="text-white my-3">
                    4.5 <small>(250)</small>
                  </h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Giảng viên</h6>
                  <h6 className="text-white my-3">{course?.instructor.name}</h6>
                </div>

                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Số bài học</h6>
                  <h6 className="text-white my-3">15</h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Thời lượng học</h6>
                  <h6 className="text-white my-3">{course.totalDurationMinutes} giờ</h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Số học viên</h6>
                  <h6 className="text-white my-3">15</h6>
                </div>
                <div className="d-flex justify-content-between px-4">
                  <h6 className="text-white my-3">Ngôn ngữ</h6>
                  <h6 className="text-white my-3">Tiếng Việt</h6>
                </div>
                <h5 className="text-white text-center py-3 px-4 m-0">Giá tiền: {course?.price} VNĐ</h5>
                <div className="py-3 px-4">
                  <a className="btn btn-block btn-secondary py-3 px-5" href="">
                    Đăng ký ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Đánh giá */}
          <div className="mt-5">
            <h3>Đánh giá</h3>
            {/* Tổng quan đánh giá */}
            <div className="d-flex align-items-center my-4">
              <div style={{ fontSize: "3rem", fontWeight: "bold", color: "#ffb400" }}>4.5</div>
              <div className="ml-4 mt-4">
                <div className="d-flex align-items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className={`fa fa-star ${star <= 4.5 ? "text-warning" : "text-secondary"}`} style={{ fontSize: "20px", marginRight: "2px" }} />
                  ))}
                </div>
                <p className="text-muted">(136 đánh giá)</p>
              </div>
            </div>

            {/* Biểu đồ đánh giá */}
            <div className="mb-4">
              {[5, 4, 3, 2, 1].map((star, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <span style={{ width: "50px" }}>{star} sao</span>
                  <div
                    style={{
                      flex: 1,
                      height: "10px",
                      background: "#f0f0f0",
                      margin: "0 10px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: `${[75, 11, 5, 2, 3][index]}%`,
                        background: "#ffc107",
                        height: "100%",
                      }}
                    />
                  </div>
                  <span>{[75, 11, 5, 2, 3][index]}%</span>
                </div>
              ))}
            </div>

            {/* Form nhập đánh giá */}
            <div className="mb-5">
              <textarea className="form-control mb-3" rows="3" placeholder="Đánh giá của bạn" />
              <div className="d-flex align-items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="fa fa-star text-secondary" style={{ cursor: "pointer", fontSize: "20px", marginRight: "5px" }} />
                ))}
              </div>
              <button className="btn btn-primary">Gửi đánh giá</button>
            </div>

            {/* Danh sách bình luận */}
            <div className="mt-5">
              <div className="media mb-4">
                <img src="/assets2/img/user.jpg" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: "45px" }} />
                <div className="media-body">
                  <h6>
                    Hồ Phan Minh Tuấn{" "}
                    <small>
                      <i>30/11/2024 at 02:17am</i>
                    </small>
                  </h6>
                  <div className="ml-auto">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className={`fa fa-star ${star <= 4 ? "text-warning" : "text-secondary"}`} style={{ fontSize: "16px" }} />
                    ))}
                  </div>
                  <p className="mt-2">Khoá học hay, hiệu quả</p>
                </div>
              </div>
            </div>
          </div>
          {/* Đánh giá end */}
        </div>
      </div>
      {/* <!-- Detail End --> */}
    </div>
  );
};

export default CourseDetail;
