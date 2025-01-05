import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]); // List of courses
  const [loading, setLoading] = useState(true); // Loading state
  const [instructors, setInstructors] = useState([]);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/course");
        setCourses(response.data.slice(0, 6)); // Reverse order of courses
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  // Lấy dữ liệu giảng viên từ API
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/instructor");
        setInstructors(response.data.slice(0, 4)); // Đảo ngược danh sách giảng viên
      } catch (error) {
        console.error("There was an error fetching the instructors!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

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

  return (
    <div>
      {/* <!-- About Start --> */}
      <div className="container-fluid py-5">
        <div data-aos="fade-up" data-aos-delay="200" className="container py-5">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100" src="/assets/img/about.jpg" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2">Thông tin về chúng tôi</h6>
                <h1 className="display-4">Lựa Chọn Hợp Lý Để Có Thể Học Mọi Lúc Mọi Nơi</h1>
              </div>
              <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
              <div className="row pt-3 mx-0">
                <div className="col-3 px-0">
                  <div className="bg-success text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Available<span className="d-block">Subjects</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-primary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Online<span className="d-block">Courses</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-secondary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Skilled<span className="d-block">Instructors</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-warning text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Happy<span className="d-block">Students</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Feature Start --> */}
      <div data-aos="fade-up" data-aos-delay="200" className="container-fluid bg-image" style={{ margin: "90px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 my-5 pt-5 pb-lg-5">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2">Hiệu Quả Mang Lại</h6>
                <h1 className="display-4">Khoá Học Chúng Tôi Có Thể Đáp Ứng Các Yêu Cầu Của Bạn</h1>
              </div>
              <p className="mb-4 pb-2">Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet.</p>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-primary mr-4">
                  <i className="fa fa-2x fa-graduation-cap text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Skilled Instructors</h4>
                  <p>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-secondary mr-4">
                  <i className="fa fa-2x fa-certificate text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>International Certificate</h4>
                  <p>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="btn-icon bg-warning mr-4">
                  <i className="fa fa-2x fa-book-reader text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Online Classes</h4>
                  <p className="m-0">Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100" src="assets/img/feature.jpg" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature Start --> */}

      {/* <!-- Courses Start --> */}
      <div data-aos="fade-up" data-aos-delay="200" className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>
              Khoá Học
            </h5>
            <h1>Các Khoá Học Phổ Biến</h1>
          </div>
          {loading ? (
            <div className="text-center">
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : (
            <div className="row">
              {courses.map((course) => (
                <div className="col-lg-4 col-md-6 pb-4" key={course.id}>
                  <NavLink data-aos="fade-up" data-aos-delay="200" className="courses-list-item position-relative d-block overflow-hidden mb-2" to={`/chitietkhoahoc/${course.id}`}>
                    <img className="img-fluid" src={process.env.REACT_APP_API_URL + "/" + course.coverImage} alt={course.name} />
                    <div className="courses-text">
                      <h4 style={{ maxWidth: "350px", textWrap: "wrap", display: "block" }} className="text-center text-white px-3">
                        {course.name}
                      </h4>
                      <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                          <span className="text-white">
                            <i className="fa fa-star mr-2"></i>
                            4,5
                          </span>
                          <span className="text-white">{course.price.toLocaleString("vi-VN")} VNĐ</span>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <!-- Courses End --> */}

      {/* <!-- Team Start --> */}
      <div data-aos="fade-up" data-aos-delay="200" className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>
              Giảng viên chất lượng
            </h5>
            <h1>Các Giảng Viên Nổi Tiếng</h1>
          </div>
          {loading ? (
            <div className="text-center">
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : (
            <div className="row">
              {instructors.map((instructor) => (
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
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Blog Start --> */}
      {/* <div data-aos="fade-up" data-aos-delay="200" className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>
              Khoá học của tôi
            </h5>
            <h1>Khoá Học Học Gần Đây</h1>
          </div>
        </div>
      </div> */}
      {/* <!-- Blog End --> */}
    </div>
  );
};

export default Home;
