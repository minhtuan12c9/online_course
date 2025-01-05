import axios from "axios";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Teachers = () => {
  const [instructors, setInstructors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const instructorsPerPage = 4; // Số lượng giảng viên mỗi trang
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu

  AOS.init({
    offset: 120,
    duration: 400,
    easing: "ease",
    debounceDelay: 50,
    throttleDelay: 99,
  });

  // Lấy dữ liệu giảng viên từ API
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/instructor");
        setInstructors(response.data.reverse()); // Đảo ngược danh sách giảng viên
      } catch (error) {
        console.error("There was an error fetching the instructors!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  // Tính toán các chỉ số cho phân trang
  const totalPages = Math.ceil(instructors.length / instructorsPerPage);
  const startIndex = (currentPage - 1) * instructorsPerPage;
  const displayedInstructors = instructors.slice(startIndex, startIndex + instructorsPerPage);

  // Xử lý thay đổi trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Team Section */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="section-title text-center position-relative mb-5">
            <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
              Tất cả giảng viên
            </h6>
          </div>

          {loading ? (
            <div className="text-center">
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : (
            <div className="row">
              {displayedInstructors.map((instructor) => (
                <div key={instructor.id} className="col-md-6 col-lg-3 text-center team mb-4">
                  <div data-aos="fade-up" data-aos-delay="200" className="team-item rounded overflow-hidden mb-2">
                    <div className="team-img position-relative">
                      <img style={{ width: "270px", height: "270px", objectFit: "cover" }} className="img-fluid" src={process.env.REACT_APP_API_URL + "/" + instructor.avatar} alt={instructor.name} />
                      <div className="team-social">
                        <a className="btn btn-outline-light btn-square mx-1" href={instructor.link} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-outline-light btn-square mx-1" href={instructor.link} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-outline-light btn-square mx-1" href={instructor.link} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="bg-secondary p-4">
                      <h5>{instructor.name}</h5>
                      <p className="m-0">{instructor.position}</p>
                      <p className="m-0">{instructor.phone}</p>
                    </div>
                  </div>
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

export default Teachers;
