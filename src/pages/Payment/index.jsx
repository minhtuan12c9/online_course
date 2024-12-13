import React from "react";

const Payment = () => {
  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h2>ZaloPay</h2>
        <p className="text-muted">Thanh toán nhanh chóng, an toàn</p>
      </div>

      {/* Payment Form */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Thông tin thanh toán</h5>

          {/* Số tiền thanh toán */}
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Số tiền
            </label>
            <input type="number" className="form-control" id="amount" placeholder="Nhập số tiền" />
          </div>

          {/* Phương thức thanh toán */}
          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">
              Phương thức thanh toán
            </label>
            <select className="form-select" id="paymentMethod">
              <option value="">Chọn phương thức</option>
              <option value="zalopay">ZaloPay</option>
              <option value="credit">Thẻ tín dụng</option>
              <option value="bank">Ngân hàng</option>
            </select>
          </div>

          {/* Mã khuyến mãi */}
          <div className="mb-3">
            <label htmlFor="promoCode" className="form-label">
              Mã khuyến mãi
            </label>
            <input type="text" className="form-control" id="promoCode" placeholder="Nhập mã nếu có" />
          </div>

          {/* Nút thanh toán */}
          <button type="button" className="btn btn-primary w-100">
            Thanh toán
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-4">
        <p className="text-muted">&copy; 2024 ZaloPay. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Payment;
