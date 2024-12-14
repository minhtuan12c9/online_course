import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

const Payment = () => {
  const [txnRef, setTxnRef] = useState("");
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin user từ localStorage
  const userId = user?.id; // Lấy userId
  const [courseId, setCourseId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (courseId) {
      const registerCourse = async () => {
        const response = await axios.get(`http://localhost:8000/api/user-course/${courseId}/${userId}`);
        if (response.data) return;

        await axios.post(`http://localhost:8000/api/user-course/add`, {
          courseId: courseId,
          userId: userId,
          paymentStatus: 1,
        });
      };
      registerCourse();
    }
  }, [courseId]);

  useEffect(() => {
    // Lấy mã giao dịch từ query string trong URL
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.size === 0) {
      navigate("/");
    }

    const vnp_TxnRef = searchParams.get("vnp_TxnRef");
    if (vnp_TxnRef) {
      setTxnRef(vnp_TxnRef);
    }

    const vnp_OrderInfo = searchParams.get("vnp_OrderInfo");
    if (vnp_OrderInfo) {
      setCourseId(parseInt(vnp_OrderInfo.split(":")[1]));
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
