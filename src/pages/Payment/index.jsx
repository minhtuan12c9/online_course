import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";

const Payment = () => {
  const [txnRef, setTxnRef] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Lấy mã giao dịch từ query string trong URL
    const searchParams = new URLSearchParams(location.search);
    const vnp_TxnRef = searchParams.get("vnp_TxnRef");
    if (vnp_TxnRef) {
      setTxnRef(vnp_TxnRef);
    }
  }, [location.search]);

  return (
    <div className="">
      <Header />
      <Menu />
      <div className="d-flex justify-content-center align-items-center " style={{ marginTop: "75px" }}>
        <div className="card shadow-lg text-center" style={{ maxWidth: "1000px" }}>
          <div className="card-body" style={{ width: "1000px", fontSize: "25px" }}>
            <div className="mb-3 text-success">
              <i className="fa fa-check-circle fa-3x" aria-hidden="true"></i>
            </div>
            <h3 className="card-title ">Thanh toán thành công</h3>
            <h5 className="card-text">
              Mã số hoá đơn của bạn là <span className="text-success">{txnRef}</span>.
            </h5>
            <h5 className="card-text">
              Bạn có thể xem chi tiết trong{" "}
              <NavLink to="/khoahoccuatoi">
                <a href="/orders" className="text-primary text-decoration-underline">
                  Khoá học của tôi
                </a>
              </NavLink>
            </h5>
            <h5 className="">Cảm ơn bạn đã ủng hộ</h5>
            <NavLink to="/">
              <button className="btn btn-primary mt-2 fs-1">Quay về trang chủ</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
