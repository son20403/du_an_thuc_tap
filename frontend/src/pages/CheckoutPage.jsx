import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCurrencyFormat from "../hooks/useCurrencyFormat";

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
  const [dataCart, setDataCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceSale, setTotalPriceSale] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [infoUser, setInfoUser] = useState([]);

  const tong_gia = useCurrencyFormat(totalPrice)
  const tong_gia_sale = useCurrencyFormat(totalPriceSale)

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateCart();
  }, []);
  useEffect(() => {
    setInfoUser(JSON.parse(localStorage.getItem('user')))
  }, [location.pathname]);
  useEffect(() => {
    setTotalPrice(getTotalPrice(dataCart));
    setTotalPriceSale(getTotalPriceSale(dataCart));
    setTotalQuantity(getTotalQuantity(dataCart));
  }, [dataCart]);

  function getTotalPriceSale(cart) {
    return cart.reduce((total, item) => total + (item.price - (item.price * item.sale / 100)) * item.quantity, 0);
  }
  function getTotalPrice(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function getTotalQuantity(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function updateCart() {
    const cartData = JSON.parse(sessionStorage.getItem('cart')) || [];
    setDataCart(cartData);
  }
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
        <form action="#" className="checkout__form" onSubmit={handlePlaceOrder}>
          <div className="row">
            <div className="col-lg-8">
              <h5>Thanh toán</h5>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="checkout__form__input">
                    <p>
                      Tên <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="firstName"
                      defaultValue={infoUser?.name}
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
                      defaultValue={infoUser?.email}
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
                    {dataCart.map((item) => (
                      <ItemCart key={item?.id} item={item}></ItemCart>
                    )
                    )}
                  </ul>
                </div>
                <div className="checkout__order__total">
                  <ul>
                    <li>
                      Tổng phụ <span>{tong_gia}</span>
                    </li>
                    <li>
                      Thành tiền <span>{tong_gia_sale}</span>
                    </li>
                  </ul>
                </div>
                <Link to="#">
                  <button
                    type="submit"
                    className="site-btn"
                    onClick={handlePlaceOrderClick}
                  >
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
const ItemCart = ({ item }) => {
  const gia = useCurrencyFormat(item?.price)
  return (
    <li key={item.id}>
      {item.name} <span>{gia} x <span> {item.quantity}</span></span>
    </li>
  )
}
