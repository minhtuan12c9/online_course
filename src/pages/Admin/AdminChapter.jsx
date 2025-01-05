import React, { useState } from "react";
import Header from "../../components/Header";
import MenuAdmin from "../../components/MenuAdmin";
import Footer from "../../components/Footer";
import SidebarAdmin from "../../components/SidebarAdmin.jsx";

const AdminChapter = () => {
  const [lessonContentActive, setLessonContentActive] = useState(null);

  return (
    <div>
      <Header />
      <MenuAdmin />
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <SidebarAdmin setLessonContentActive={setLessonContentActive} />
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

export default AdminChapter;
