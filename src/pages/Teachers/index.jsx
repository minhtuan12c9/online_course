import React from "react";
import { NavLink } from "react-router-dom";

const Teachers = () => {
  return (
    <div>
      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="section-title text-center position-relative mb-5">
            <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
              Tất cả giảng viên
            </h6>
            {/* <h1 className="display-4">Các khoá học hiệu quả</h1> */}
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img style={{ width: "270px", height: "270px", objectFit: "cover" }} className="img-fluid" src="assets2/img/the.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Trần Tiến Thế</h5>
                  <p className="m-0">Web Designer</p>
                  <p className="m-0">0988708143</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img style={{ width: "270px", height: "270px", objectFit: "cover" }} className="img-fluid" src="assets2/img/dai.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Hồ Xuân Đại</h5>
                  <p className="m-0">AI Developer</p>
                  <p className="m-0">0988708143</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img style={{ width: "270px", height: "270px", objectFit: "cover" }} className="img-fluid" src="assets2/img/toan.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Đậu Đức Toàn</h5>
                  <p className="m-0">Back-End Developer</p>
                  <p className="m-0">0988708143</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img style={{ width: "270px", height: "270px", objectFit: "cover" }} className="img-fluid" src="assets2/img/hang.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Lê Thị Hằng</h5>
                  <p className="m-0">Tester</p>
                  <p className="m-0">0988708143</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img style={{ width: "270px", height: "270px", objectFit: "cover" }} className="img-fluid" src="assets2/img/thu.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Trần Thị Hoài Thu</h5>
                  <p className="m-0">Tester</p>
                  <p className="m-0">0988708143</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img style={{ width: "270px", height: "270px", objectFit: "cover" }} className="img-fluid" src="assets2/img/loi.png" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Đoàn Tiến Lợi</h5>
                  <p className="m-0">Back-End Developer</p>
                  <p className="m-0">0988708143</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
    </div>
  );
};

export default Teachers;
