import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Teachers = () => {
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
      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="section-title text-center position-relative mb-5">
            <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2" style={{ fontSize: "30px" }}>
              Tất cả giảng viên
            </h6>
            {/* <h1 className="display-4">Các khoá học hiệu quả</h1> */}
          </div>
          {/* Hiển thị danh sách giảng viên theo thứ tự ngược lại */}
          <div className="row">
            {[...instructors].reverse().map((instructor) => (
              <div key={instructor.id} className="col-md-6 col-lg-3 text-center team mb-4">
                <div data-aos="fade-up" data-aos-delay="200" className="team-item rounded overflow-hidden mb-2">
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
      {/* <!-- Team End --> */}
    </div>
  );
};

export default Teachers;
