import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar/index.jsx";
import axios from "axios";
import Swal from "sweetalert2";

const Study = () => {
  const [lessonContentActive, setLessonContentActive] = useState(null);
  const [lessonActive, setLessonActive] = useState(null);
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin user từ localStorage
  const userId = user?.id; // Lấy userId
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (!userId || !lessonActive) return;
    let intervalId;

    // Function to call API
    const fetchApi = async () => {
      try {
        const response = await axios.put(`http://localhost:8000/api/user-progress/update/${userId}/${lessonActive.id}`, { timeSpentMinutes: 1 });
        const message = response.data;
        if (message === "Completed") {
          Swal.fire({
            icon: "success",
            title: "Hoàn thành!",
            text: `Bạn đã học xong bài học này!`,
          });
          console.log("Task completed, stopping polling.");
          setReloadKey((prev) => prev + 1);
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
  }, [lessonActive]);

  return (
    <div>
      <Header />
      <Menu />
      <div className="d-flex">
        <Sidebar setLessonContentActive={setLessonContentActive} setLessonActive={setLessonActive} lessonActive={lessonActive} reloadChildKey={reloadKey} />
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
          </div>
        </div>
        {/* <!-- Detail End --> */}
      </div>

      <Footer />
    </div>
  );
};

export default Study;
