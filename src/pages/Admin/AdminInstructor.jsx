import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuAdmin from "../../components/MenuAdmin";
import Footer from "../../components/Footer";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AdminInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  // Lấy dữ liệu giảng viên từ API
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/instructor") // Đảm bảo URL đúng với API của bạn
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the instructors!", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <MenuAdmin />
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <NavLink to="/addinstructor">
            <div className="row mx-0 justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center position-relative mb-5">
                  <button className="btn-success rounded-pill p-3" data-bs-toggle="modal" data-bs-target="#modalThem" style={{ fontSize: "15px", fontWeight: "bold" }}>
                    + Thêm giảng viên mới
                  </button>
                </div>
              </div>
            </div>
          </NavLink>

          {/* Hiển thị danh sách giảng viên theo thứ tự ngược lại */}
          <div className="row">
            {[...instructors].reverse().map((instructor) => (
              <div key={instructor.id} className="col-md-6 col-lg-3 text-center team mb-4">
                <div className="team-item rounded overflow-hidden mb-2">
                  <div className="team-img position-relative">
                    <img
                      style={{ width: "270px", height: "270px", objectFit: "cover" }}
                      className="img-fluid"
                      src={process.env.REACT_APP_API_URL + "/" + instructor.avatar} // Hiển thị ảnh giảng viên hoặc ảnh mặc định
                      alt={instructor.name}
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-light btn-square mx-1" href={instructor.link} target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-outline-light btn-square mx-1" href={instructor.link} target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-outline-light btn-square mx-1" href={instructor.link} target="_blank">
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
        </div>
      </div>
      {/* Team End */}
      <Footer />
    </div>
  );
};

export default AdminInstructor;
