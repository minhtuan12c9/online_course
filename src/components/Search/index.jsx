import React from "react";
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <div>
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{ marginBottom: "90px" }}>
        <div className="container text-center my-5 py-5" style={{ backgroundColor: "transparent" }}>
          <h1 className="text-white mt-4 mb-4 text-uppercase">Học Mọi Lúc Mọi Nơi</h1>
          <h1 className="text-white display-1 mb-5 text-uppercase">Khoá học online Edukate</h1>
          <div className="mx-auto mb-5" style={{ width: "100%", maxWidth: "600px" }}>
            <div className="input-group">
              <input type="text" className="form-control border-light" style={{ padding: "30px 25px" }} placeholder="Nhập tên khoá học cần tìm" />
              <div className="input-group-append">
                <button className="btn btn-primary px-4 px-lg-5">Tìm kiếm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </div>
  );
};

export default Search;
