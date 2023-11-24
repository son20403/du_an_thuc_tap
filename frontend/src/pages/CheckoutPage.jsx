import React, { useState } from "react";

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Biểu mẫu đã được gửi!");
    console.log("Dữ liệu biểu mẫu:", formData);
  };

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Chain buck bag", price: 300.0 },
    { id: 2, name: "Zip-pockets pebbled tote briefcase", price: 170.0 },
    { id: 3, name: "Black jean", price: 170.0 },
    { id: 4, name: "Cotton shirt", price: 110.0 },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal;

  const handlePlaceOrder = () => {
    // Thêm logic xử lý khi đặt hàng
    console.log("Đơn đặt hàng đã được xác nhận!");
    console.log("Danh sách sản phẩm:", cartItems);
    console.log("Tổng cộng:", total);

    if (formData.checkPayment) {
      console.log("Đã chọn thanh toán Séc");
      //...
    }

    if (formData.paypal) {
      console.log("Đã chọn thanh toán PayPal");
      // ...
    }
  };

  const handlePlaceOrderClick = () => {
    // Gọi hàm xử lý khi đặt hàng ở đây...
    handlePlaceOrder();
    // Nếu cần thêm hành động khác khi nhấp vào nút "Đặt hàng", thêm ở đây
    console.log("Người dùng đã nhấp vào nút Đặt hàng!");
  };

  return (
    <section className="checkout spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6 className="coupon__link">
              <span className="icon_tag_alt"></span>
              <a href="#"> Có phiếu giảm giá?</a> Nhấn vào đây để nhập mã của
              bạn.
            </h6>
          </div>
        </div>
        <form action="#" className="checkout__form" onSubmit={handleSubmit}>
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
                <button
                  type="submit"
                  className="site-btn"
                  onClick={handlePlaceOrderClick}
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;
