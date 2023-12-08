import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    address: "",
    townCity: "",
    phone: "",
    email: "",
    createAccount: false,
    checkPayment: false,
    paypal: false,
  });

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Thực hiện yêu cầu API để lấy dữ liệu giỏ hàng từ Laravel
    fetch("/api/cart")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Yêu cầu API thất bại với mã lỗi: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setCartItems(data.cartItems);
        setSubtotal(data.subtotal);
        setTotal(data.total);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu giỏ hàng:", error.message);
        // Xử lý lỗi, có thể thông báo cho người dùng hoặc thực hiện các bước phù hợp
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePlaceOrder = async () => {
    try {
      // Kiểm tra tính hợp lệ của dữ liệu trước khi gửi yêu cầu API
      if (!formData.checkPayment && !formData.paypal) {
        console.log("Vui lòng chọn phương thức thanh toán!");
        return;
      }
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Yêu cầu API thất bại với mã lỗi: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Đơn đặt hàng đã được xác nhận!");
      console.log("ID đơn hàng:", responseData.order_id);

      if (formData.checkPayment) {
        console.log("Đã chọn thanh toán Séc");
        //...
      }

      if (formData.paypal) {
        console.log("Đã chọn thanh toán PayPal");
        // ...
      }

      // Thực hiện các bước tiếp theo nếu cần
    } catch (error) {
      console.error("Đã có lỗi khi đặt hàng:", error.message);
      setError("Đã có lỗi khi xử lý đơn hàng. Vui lòng thử lại sau.");
      // Xử lý lỗi, có thể thông báo cho người dùng hoặc thực hiện các bước phù hợp
    } finally {
      setLoading(false);
    }
  };

  const handlePlaceOrderClick = () => {
    if (!formData.checkPayment && !formData.paypal) {
      console.log("Vui lòng chọn phương thức thanh toán!");
      return;
    }
    handlePlaceOrder();
    console.log("Người dùng đã nhấp vào nút Đặt hàng!");
  };

  return (
    <section className="checkout spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6 className="coupon__link">
              <span className="icon_tag_alt"></span>
              <Link to="#"> Có phiếu giảm giá?</Link> Nhấn vào đây để nhập mã
              của bạn.
            </h6>
          </div>
        </div>
        <form action="#" className="checkout__form" onSubmit={handlePlaceOrder}>
          <div className="row">
            <div className="col-lg-8">
              <h5>Billing detail</h5>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>
                      Họ<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>
                      Tên <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="checkout__form__input">
                    <p>
                      Địa chỉ <span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="địa chỉ"
                      name="address"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="checkout__form__input">
                    <p>
                      Thị trấn/Thành phố <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="townCity"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>
                      SDT <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="phone"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>
                      Email <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="checkout__order">
                <h5>đơn đặt hàng của bạn</h5>
                <div className="checkout__order__product">
                  <ul>
                    <li>
                      <span className="top__text">Sản phẩm</span>
                      <span className="top__text__right">Thành tiền</span>
                    </li>
                    {cartItems.map((item) => (
                      <li key={item.id}>
                        {item.name} <span>${item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="checkout__order__total">
                  <ul>
                    <li>
                      Tổng phụ <span>${subtotal.toFixed(2)}</span>
                    </li>
                    <li>
                      Thành tiền <span>${total.toFixed(2)}</span>
                    </li>
                  </ul>
                </div>

                <div className="checkout__order__widget">
                  <label htmlFor="o-acc">
                    Tạo một tài khoản?
                    <input
                      type="checkbox"
                      id="o-acc"
                      name="createAccount"
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p>
                    Tạo tài khoản am bằng cách nhập thông tin bên dưới. nếu bạn
                    là thông tin đăng nhập của khách hàng thường xuyên ở đầu
                    trang.
                  </p>
                  <label htmlFor="check-payment">
                    Thanh toán séc
                    <input
                      type="checkbox"
                      id="check-payment"
                      name="checkPayment" // Kết nối với formData
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="paypal">
                    PayPal
                    <input
                      type="checkbox"
                      id="paypal"
                      name="paypal" // Kết nối với formData
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                {loading && <p>Đang xử lý...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Link to="/confirmation" onClick={handlePlaceOrderClick}>
                  <button type="submit" className="site-btn" disabled={loading}>
                    Đặt hàng
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;
