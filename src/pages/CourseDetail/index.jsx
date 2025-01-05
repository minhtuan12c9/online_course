import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { format } from "date-fns";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const CourseDetail = () => {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  const { id } = useParams(); // Lấy id khóa học từ URL
  const [course, setCourse] = useState(null); // Dữ liệu khóa học
  const [rating, setRating] = useState(0); // Đánh giá khóa học
  const [reviews, setReviews] = useState([]); // Danh sách đánh giá
  const [comment, setComment] = useState(""); // Nội dung bình luận
  const [ratingValue, setRatingValue] = useState(0); // Số sao đánh giá
  const [hoverValue, setHoverValue] = useState(0); // Số sao đang được rê chuột qua
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin user từ localStorage
  const userId = user?.id; // Lấy userId
  const { id: courseId } = useParams(); // Lấy courseId từ URL
  const [averageRating, setAverageRating] = useState(0); // Trung bình đánh giá
  const [totalReviews, setTotalReviews] = useState(0); // Tổng số đánh giá
  const [ratingPercents, setRatingPercents] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [isRegisted, setIsRegisted] = useState(false);

  // đăng ký khoá học
  const registerUserCourseDetail = async () => {
    try {
      // Gửi yêu cầu lấy thông tin chi tiết khóa học
      const response = await axios.get(`http://localhost:8000/api/course/${id}`);
      const course = response.data;

      if (!course) {
        Swal.fire("Lỗi", "Không thể tìm thấy khóa học", "error");
        return;
      }

      if (course.price > 0) {
        // Hiển thị thông báo yêu cầu xác nhận thanh toán
        if (user?.id) {
          const result = await Swal.fire({
            title: "Thanh toán khóa học",
            text: `Khóa học này có giá ${course.price} VNĐ. Bạn có muốn thanh toán không?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Thanh toán",
            cancelButtonText: "Hủy",
            preConfirm: async () => {
              try {
                // Gửi yêu cầu lấy link thanh toán từ backend
                const paymentResponse = await axios.get(`http://localhost:8000/api/payment/pay`, {
                  params: { amount: course.price, courseId: courseId },
                });

                // Trả về link thanh toán nếu có
                if (paymentResponse.data) {
                  return paymentResponse.data;
                } else {
                  throw new Error("Không lấy được link thanh toán");
                }
              } catch (error) {
                console.error("Error during payment link retrieval:", error);
                Swal.showValidationMessage("Không thể tạo link thanh toán. Vui lòng thử lại!");
                return null;
              }
            },
          });
          if (result.value) {
            // Mở link thanh toán VNPay
            window.location.href = result.value;
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Thông tin không hợp lệ!",
            text: "Bạn hãy vui lòng đăng nhập trước!",
          });
          return;
        }
      } else {
        // Nếu khóa học miễn phí, tiến hành đăng ký trực tiếp
        const registerResponse = await axios.post(`http://localhost:8000/api/user-course/add`, {
          courseId: id,
          userId: userId,
          paymentStatus: 1,
        });

        if (registerResponse.status === 200) {
          Swal.fire("Thành công", "Bạn đã đăng ký thành công khóa học miễn phí", "success");
          setIsRegisted(true);
        } else {
          Swal.fire("Lỗi", "Đăng ký khóa học không thành công", "error");
        }
      }
    } catch (error) {
      console.error("Error during course registration:", error);
      Swal.fire({
        icon: "error",
        title: "Thông tin không hợp lệ!",
        text: "Bạn hãy vui lòng đăng nhập trước!",
      });
    }
  };

  // Lấy thôgn tin đăng ký khoá học
  useEffect(() => {
    // Lấy thông tin chi tiết khóa học theo id
    const fetchUserCourseDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user-course/${id}/${userId}`);
        setIsRegisted(!!response.data);
      } catch (error) {
        console.error("Error fetching course detail:", error);
      }
    };

    fetchUserCourseDetail();
  }, [id, userId]);
  // Lấy thôgn tin khoá học
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

  useEffect(() => {
    // Fetch danh sách đánh giá khi tải trang
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/course-review/${id}`);
        setReviews(response.data);
        const allReviews = response.data;

        const total_people_review = allReviews.length;
        if (total_people_review > 0) {
          setRatingPercents((preState) => {
            const newState = { ...preState };

            [1, 2, 3, 4, 5].forEach((count) => {
              newState[count] = ((allReviews.filter((review) => review.rating === count).length / total_people_review) * 100).toFixed(0);
            });
            console.log(newState);

            return newState;
          });
        }

        // Tính toán trung bình đánh giá và số lượng đánh giá
        const totalRating = allReviews.reduce((sum, allReview) => sum + allReview.rating, 0);
        const reviewCount = allReviews.length;
        setAverageRating(reviewCount > 0 ? (totalRating / reviewCount).toFixed(1) : 0); // Giới hạn 1 số thập phân
        setTotalReviews(reviewCount);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [id]);

  const handleSubmitReview = async () => {
    if (!isRegisted) {
      Swal.fire({
        icon: "error",
        title: "Không thể đánh giá",
        text: "Bạn cần đăng ký khóa học trước khi đánh giá.",
      });
      return;
    }
    if (!comment.trim() || ratingValue === 0) {
      Swal.fire({
        icon: "error",
        title: "Đánh giá không hợp lệ",
        text: "Vui lòng nhập nội dung và chọn số sao trước khi gửi đánh giá.",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/course-review/add", {
        comment: comment,
        rating: ratingValue,
        createdAt: new Date().toISOString(), // Ngày giờ hiện tại
        courseId: courseId, // ID khóa học
        userId: userId, // ID người dùng
      });

      // Cập nhật danh sách đánh giá sau khi thêm thành công
      setReviews([...reviews, response.data]);
      setComment("");
      setRatingValue(0);
      Swal.fire({
        icon: "success",
        title: "Cảm ơn bạn!",
        text: `Bạn đã đánh giá ${ratingValue} sao thành công.`,
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const formatRelativeTime = (dateArr) => {
    if (!dateArr) return "Không rõ thời gian"; // Kiểm tra null hoặc undefined
    const [year_input, month_input, day_input, hours_input, minutes_input, seconds_input] = dateArr;

    const now = new Date();
    const date = new Date(year_input, month_input - 1, day_input, hours_input, minutes_input, seconds_input);

    if (isNaN(date.getTime())) {
      return "Không rõ thời gian"; // Trả về nếu không phải là ngày hợp lệ
    }

    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} giây trước`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} phút trước`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} giờ trước`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 2) {
      return `${diffInDays} ngày trước`;
    }

    // Nếu hơn 1 ngày, hiển thị định dạng hh:mm dd:mm:yyyy
    const formatTwoDigits = (num) => (num < 10 ? `0${num}` : num);

    const hours = formatTwoDigits(date.getHours());
    const minutes = formatTwoDigits(date.getMinutes());
    const day = formatTwoDigits(date.getDate());
    const month = formatTwoDigits(date.getMonth() + 1); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}:${month}:${year}`;
  };

  // Kiểm tra xem dữ liệu đã được tải xong chưa
  if (!course) return <div>Loading...</div>;
  return (
    <div>
      {/* <!-- Detail Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div data-aos="fade-up" data-aos-delay="200" className="col-lg-8">
              <div className="mb-5">
                <div className="section-title position-relative mb-5">
                  <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2">Chi tiết khoá học</h6>
                  <h1 className="display-4">{course?.name}</h1>
                </div>
                <img className="img-fluid rounded w-100 mb-4" src={process.env.REACT_APP_API_URL + "/" + course?.coverImage} alt="Image" />
              </div>

              <div dangerouslySetInnerHTML={{ __html: course?.description }} />
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="col-lg-4 mt-5 mt-lg-0">
              <div className="bg-primary mb-5 py-3">
                <h3 className="text-white py-3 px-2 text-center m-0">Thông tin khoá học</h3>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Đánh giá</h6>
                  <h6 className="text-white my-3">
                    {averageRating} <small>({totalReviews})</small>
                  </h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Giảng viên</h6>
                  <h6 className="text-white my-3">{course?.instructor?.name}</h6>
                </div>

                {/* <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Số bài học</h6>
                  <h6 className="text-white my-3">15</h6>
                </div> */}
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Thời lượng học</h6>
                  <h6 className="text-white my-3">{course.totalDurationMinutes} phút</h6>
                </div>
                {/* <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Số học viên</h6>
                  <h6 className="text-white my-3">15</h6>
                </div> */}
                <div className="d-flex justify-content-between px-4">
                  <h6 className="text-white my-3">Ngôn ngữ</h6>
                  <h6 className="text-white my-3">Tiếng Việt</h6>
                </div>
                <h5 className="text-white text-center py-3 px-4 m-0">Giá tiền: {course?.price} VNĐ</h5>
                <div className="py-3 px-4">
                  {isRegisted ? (
                    <NavLink to={`/hoc/${courseId}`}>
                      <a className="btn btn-block btn-secondary py-3 px-5" href={`/course/${id}/learn`}>
                        Vào học ngay
                      </a>
                    </NavLink>
                  ) : (
                    <button className="btn btn-block btn-secondary py-3 px-5" onClick={registerUserCourseDetail}>
                      Đăng ký ngay
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Đánh giá */}
          <div className="mt-5">
            <h3>Đánh giá</h3>
            {/* Tổng quan đánh giá */}
            <div data-aos="fade-up" data-aos-delay="200" className="d-flex align-items-center my-4">
              <div style={{ fontSize: "3rem", fontWeight: "bold", color: "#ffb400" }}>{averageRating}</div>
              <div className="ml-4 mt-4">
                <div className="d-flex align-items-center">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFullStar = star <= averageRating; // Sao đầy đủ
                    const isHalfStar = star - 0.5 <= averageRating && star > averageRating; // Nửa sao

                    return (
                      <>
                        {isHalfStar ? (
                          <div style={{ position: "relative" }}>
                            <i key={star} className="fa fa-star text-secondary" style={{ fontSize: "20px", marginRight: "2px" }} />
                            <i key={star} className="fa fa-star-half text-warning" style={{ fontSize: "20px", marginRight: "2px", position: "absolute", inset: 0 }} />
                          </div>
                        ) : (
                          <i key={star} className={`fa ${isFullStar ? "fa-star text-warning" : "fa-star text-secondary"}`} style={{ fontSize: "20px", marginRight: "2px" }} />
                        )}
                      </>
                    );
                  })}
                </div>

                <p className="text-muted">({totalReviews} đánh giá)</p>
              </div>
            </div>

            {/* Biểu đồ đánh giá */}
            <div data-aos="fade-up" data-aos-delay="200" className="mb-4">
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
                        width: `${ratingPercents[star]}%`,
                        background: "#ffc107",
                        height: "100%",
                      }}
                    />
                  </div>
                  <span>{ratingPercents[star]}%</span>
                </div>
              ))}
            </div>

            {/* Form nhập đánh giá */}
            <div data-aos="fade-up" data-aos-delay="200" className="mb-5">
              <textarea className="form-control mb-3" rows="3" placeholder="Đánh giá của bạn" value={comment} onChange={(e) => setComment(e.target.value)} />
              <div className="d-flex align-items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa fa-star ${star <= (hoverValue || ratingValue) ? "text-danger" : "text-secondary"}`}
                    style={{ cursor: "pointer", fontSize: "20px", marginRight: "5px" }}
                    onMouseEnter={() => setHoverValue(star)} // Hiện đỏ khi rê chuột
                    onMouseLeave={() => setHoverValue(0)} // Reset hiệu ứng khi rời chuột
                    onClick={() => setRatingValue(star)} // Đánh dấu vàng khi bấm chọn
                  />
                ))}
              </div>
              <button className="btn btn-primary" onClick={handleSubmitReview}>
                Gửi đánh giá
              </button>
            </div>

            {/* Danh sách bình luận */}
            {[...reviews].reverse().map((review) => (
              <div className="mt-5" key={review.id}>
                <div data-aos="fade-up" data-aos-delay="200" className="media mb-4">
                  <img src={`${process.env.REACT_APP_API_URL}/${review.user?.avatar}`} alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: "45px" }} />
                  <div className="media-body">
                    <h6>
                      {review.user?.fullname}
                      <small className="ml-2">{formatRelativeTime(review.createdAt)}</small>
                    </h6>
                    <div className="ml-auto">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`fa fa-star ${star <= review.rating ? "text-warning" : "text-secondary"}`} style={{ fontSize: "16px" }} />
                      ))}
                    </div>
                    <p className="mt-2">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Đánh giá end */}
        </div>
      </div>
      {/* <!-- Detail End --> */}
    </div>
  );
};

export default CourseDetail;
