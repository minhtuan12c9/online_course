import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar/index.jsx";
import axios from "axios";
import Swal from "sweetalert2";

const Study = () => {
  const [lessonContentActive, setLessonContentActive] = useState(null);
  console.log(lessonContentActive);
  const lessonId = lessonContentActive?.id;
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin user từ localStorage
  const userId = user?.id; // Lấy userId

  useEffect(() => {
    if (!userId || !lessonId) return;
    let intervalId;

    // Function to call API
    const fetchApi = async () => {
      try {
        const response = await axios.put(`http://localhost:8000/api/user-progress/update/${userId}/${lessonId}`, { timeSpentMinutes: 1 });
        const message = response.data;
        if (message === "Completed") {
          Swal.fire({
            icon: "success",
            title: "Hoàn thành!",
            text: `Bạn đã học xong bài học này!`,
          });
          console.log("Task completed, stopping polling.");
          clearInterval(intervalId); // Stop the interval
        }
      } catch (error) {
        console.error("Error calling API:", error);
      }
    };

    // Set up interval for API calls
    intervalId = setInterval(() => {
      fetchApi();
    }, 60000); // Call every 1 minute

    // Cleanup: Stop interval on unmount
    return () => clearInterval(intervalId);
  }, [lessonId]);

  return (
    <div>
      <Header />
      <Menu />
      <div className="d-flex">
        <Sidebar setLessonContentActive={setLessonContentActive} />
        {/* <!-- Detail Start --> */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="p-1">
              <div className="mb-5">
                <div className="section-title position-relative mb-5">
                  {/* <button className="btn-success rounded-pill p-3" style={{ fontSize: "15px", fontWeight: "bold" }}>
                    + Thêm khoá học mới
                  </button> */}
                  <div className="display-4" dangerouslySetInnerHTML={{ __html: lessonContentActive?.content }} />
                </div>
              </div>
            </div>
            {/* Đánh giá */}
            <div className="mt-5">
              <h3>Bình luận</h3>

              {/* Form nhập đánh giá */}
              <div className="mb-5">
                <textarea className="form-control mb-3" rows="3" placeholder="Người tiện tay vẽ hoa vẽ lá, tôi đa tình tưởng đó là mùa xuân..." />

                <button className="btn btn-primary">Gửi bình luận</button>
              </div>

              {/* Danh sách bình luận */}
              <div className="mt-5">
                <div className="media mb-4">
                  <img src="/assets2/img/user.jpg" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: "45px" }} />
                  <div className="media-body">
                    <h6>
                      Hồ Phan Minh Tuấn{" "}
                      <small>
                        <i>30/11/2024 at 02:25pm</i>
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

                {/* <div className="media mb-4">
                  <img src="/assets2/img/user.jpg" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: "45px" }} />
                  <div className="media-body">
                    <h6>
                      Tiến Lợi{" "}
                      <small>
                        <i>30/11/2024 at 02:30pm</i>
                      </small>
                    </h6>
                    <div className="ml-auto">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`fa fa-star ${star <= 4 ? "text-warning" : "text-secondary"}`} style={{ fontSize: "16px" }} />
                      ))}
                    </div>
                    <p className="mt-2">Hay</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Đánh giá end */}
          </div>
        </div>
        {/* <!-- Detail End --> */}
      </div>

      <Footer />
    </div>
  );
};

export default Study;
