import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <i className="fa fa-phone-alt mr-2"></i>+0988 708 143
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2"></i>hophanminhtuan2619@gmail.com
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-2" href="https://www.facebook.com/JinkoLynn/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white px-2" href="https://www.facebook.com/JinkoLynn/">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white px-2" href="https://www.facebook.com/JinkoLynn/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white px-2" href="https://www.facebook.com/JinkoLynn/">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white pl-2" href="https://www.facebook.com/JinkoLynn/">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
