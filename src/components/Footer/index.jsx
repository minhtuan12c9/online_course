import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: "90px" }}>
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
                  Thông tin liên hệ
                </h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>76 Núi Thành, Hoà Cường Nam, Hải Châu, Đà Nẵng
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>0988 708 143
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>hophanminhtuan2619@gmail.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-light btn-square" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
                  Khoá học online
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Web Design
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Apps Design
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Marketing
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Research
                  </a>
                  <a className="text-white" href="#">
                    <i className="fa fa-angle-right mr-2"></i>SEO
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
              tư vấn ngay
            </h5>
            <p>Hãy nhập email của bạn và đăng ký ngay, chúng tôi sẽ gửi thông tin chi tiết cho bạn</p>
            <div className="w-100">
              <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: "30px" }} placeholder="Nhập địa chỉ email" />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy; <a href="#">Hồ Phan Minh Tuấn</a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};

export default Footer;
