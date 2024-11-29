import React from "react";
import Header from "../../components/Header";
import MenuAdmin from "../../components/MenuAdmin";
import Footer from "../../components/Footer";
import SidebarAdmin from "../../components/SidebarAdmin.jsx";

const AdminChapter = () => {
  return (
    <div>
      <Header />
      <MenuAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        {/* <!-- Detail Start --> */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="p-1">
              <div className="mb-5">
                <div className="section-title position-relative mb-5">
                  <h6 className="d-inline-block position-relative text-primary text-uppercase pb-2">Chi tiết khoá học</h6>
                  <h1 className="display-4">Web design & development courses for beginners</h1>
                </div>
                <img className="img-fluid rounded w-100 mb-4" src="assets/img/header.jpg" alt="Image" />
                <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>

                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
              </div>

              <h2 className="mb-3">Related Courses</h2>
              <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>

              <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>

              <h2 className="mb-3">Related Courses</h2>
              <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>

              <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
            </div>
            {/* Đánh giá */}
            <div className="mt-5">
              <h3>Bình luận</h3>

              {/* Form nhập đánh giá */}
              <div className="mb-5">
                <textarea className="form-control mb-3" rows="3" placeholder="Người tiện tay vẽ hoa vẽ lá, tôi đa tình tưởng đó là mùa xuân..." />

                <button className="btn btn-primary" disabled>
                  Gửi bình luận
                </button>
              </div>

              {/* Danh sách bình luận */}
              <div className="mt-5">
                <div className="media mb-4">
                  <img src="assets2/img/user.jpg" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: "45px" }} />
                  <div className="media-body">
                    <h6>
                      John Doe{" "}
                      <small>
                        <i>01 Jan 2045 at 12:00pm</i>
                      </small>
                    </h6>
                    <div className="ml-auto">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`fa fa-star ${star <= 4 ? "text-warning" : "text-secondary"}`} style={{ fontSize: "16px" }} />
                      ))}
                    </div>
                    <p className="mt-2">Khoá học hay, hiệu quả</p>
                  </div>
                </div>

                <div className="media mb-4">
                  <img src="assets2/img/user.jpg" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: "45px" }} />
                  <div className="media-body">
                    <h6>
                      John Doe{" "}
                      <small>
                        <i>01 Jan 2045 at 12:00pm</i>
                      </small>
                    </h6>
                    <div className="ml-auto">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`fa fa-star ${star <= 4 ? "text-warning" : "text-secondary"}`} style={{ fontSize: "16px" }} />
                      ))}
                    </div>
                    <p className="mt-2">Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Đánh giá end */}
          </div>
        </div>
        {/* <!-- Detail End --> */}
      </div>
      <Footer />
    </div>
  );
};

export default AdminChapter;
