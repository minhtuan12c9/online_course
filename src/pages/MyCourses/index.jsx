import React from "react";
import { NavLink } from "react-router-dom";

const MyCourses = () => {
  return (
    <div>
      {/* <!-- Courses Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
                  Khoá học của tôi
                </h6>
                {/* <h1 className="display-4">Các khoá học hiệu quả</h1> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-4">
              <NavLink className="courses-list-item position-relative d-block overflow-hidden mb-2" to="/chitietkhoahoc">
                <img className="img-fluid" src="assets/img/courses-1.jpg" alt="Course Thumbnail" />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                      </span>
                      <span className="text-white">
                        <div class="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            25%
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <NavLink className="courses-list-item position-relative d-block overflow-hidden mb-2" to="/chitietkhoahoc">
                <img className="img-fluid" src="assets/img/courses-2.jpg" alt="" />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                      </span>
                      <span className="text-white">
                        <div class="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            25%
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <NavLink className="courses-list-item position-relative d-block overflow-hidden mb-2" to="/chitietkhoahoc">
                <img className="img-fluid" src="assets/img/courses-3.jpg" alt="" />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                      </span>
                      <span className="text-white">
                        <div class="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            25%
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <NavLink className="courses-list-item position-relative d-block overflow-hidden mb-2" to="/chitietkhoahoc">
                <img className="img-fluid" src="assets/img/courses-4.jpg" alt="" />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                      </span>
                      <span className="text-white">
                        <div class="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            25%
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <NavLink className="courses-list-item position-relative d-block overflow-hidden mb-2" to="/chitietkhoahoc">
                <img className="img-fluid" src="assets/img/courses-5.jpg" alt="" />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                      </span>
                      <span className="text-white">
                        <div class="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            25%
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <NavLink className="courses-list-item position-relative d-block overflow-hidden mb-2" to="/chitietkhoahoc">
                <img className="img-fluid" src="assets/img/courses-6.jpg" alt="" />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                      </span>
                      <span className="text-white">
                        <div class="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            25%
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link rounded-0" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
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
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link rounded-0" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Courses End --> */}
    </div>
  );
};

export default MyCourses;
