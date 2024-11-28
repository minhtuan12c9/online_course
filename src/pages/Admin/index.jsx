import React from "react";
import Header from "../../components/Header";
import Footer from "./../../components/Footer/index";
import MenuAdmin from "../../components/MenuAdmin";
import { NavLink } from "react-router-dom";

const AdminCourse = () => {
  return (
    <div>
      <Header />
      <MenuAdmin />
      <div className="">
        {/* <!-- Courses Start --> */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row mx-0 justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center position-relative mb-5">
                  <div className=""></div>
                  {/* <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
                    Tất cả khoá học
                  </h6> */}
                  <button className="btn-success rounded-pill p-3" data-bs-toggle="modal" data-bs-target="#modalThem" style={{ fontSize: "15px", fontWeight: "bold" }}>
                    + Thêm khoá học mới
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Modal thêm --> */}
            <div class="modal fade" id="modalThem" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header justify-content-center">
                    <h5 class="modal-title fw-bold" id="staticBackdropLabel">
                      Thêm truyện mới
                    </h5>
                  </div>
                  <div class="modal-body">
                    <div class="fw-bold">
                      Ảnh đại diện truyện <span class="text-danger">*</span>
                    </div>
                    <input type="file" class="form-control" />
                    <div class="mt-2 fw-bold">
                      Tên truyện <span class="text-danger">*</span>
                    </div>
                    <input type="text" class="form-control" v-model="newStory.ten" />
                    <div class="mt-2 fw-bold">
                      Tác giả <span class="text-danger">*</span>
                    </div>
                    <input type="text" class="form-control" v-model="newStory.tacgia" />
                    <div class="mt-2 fw-bold">
                      Thể loại <span class="text-danger">*</span>
                    </div>
                    <div class="form-check form-check-inline" v-for="category in categories" />
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label">khoá học</label>
                  </div>
                  <div class="mt-2 fw-bold">
                    Mô tả <span class="text-danger">*</span>
                  </div>
                  <textarea class="form-control" v-model="newStory.gioithieu"></textarea>
                  <div>--------------------------------------------------------------------</div>
                  <div class="mt-2 fw-bold text-center">
                    Chương đầu tiên <span class="text-danger">*</span>
                  </div>
                  <div class="mt-2 fw-bold">
                    Số chương <span class="text-danger">*</span>
                  </div>
                  <input type="text" class="form-control" v-model="newChapter.so" />
                  <div class="mt-2 fw-bold">
                    Tên chương <span class="text-danger">*</span>
                  </div>
                  <input type="text" class="form-control" v-model="newChapter.ten" />
                  <div class="mt-2 fw-bold">
                    Nội dung chương <span class="text-danger">*</span>
                  </div>
                  <input type="file" class="form-control" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Hủy
                  </button>
                  <button type="button" class="btn btn-primary" id="liveToastBtn" data-bs-dismiss="modal">
                    Thêm
                  </button>
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
                        <span className="text-white">500.000 VNĐ</span>
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
                        <span className="text-white">500.000 VNĐ</span>
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
                        <span className="text-white">500.000 VNĐ</span>
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
                        <span className="text-white">500.000 VNĐ</span>
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
                        <span className="text-white">500.000 VNĐ</span>
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
                        <span className="text-white">500.000 VNĐ</span>
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
      <Footer />
    </div>
  );
};

export default AdminCourse;
