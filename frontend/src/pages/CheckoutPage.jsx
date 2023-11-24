import React, { useState } from "react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    townCity: "",
    countryState: "",
    postcode: "",
    phone: "",
    email: "",
    createAccount: false,
    accountPassword: "",
    note: false,
    orderNotes: "",
  });
  const handlePlaceOrder = () => {};
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for form submission here
    console.log("Form submitted!");
    console.log("Form data:", formData);
  };

  return (
    <section className="checkout spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6 className="coupon__link">
              <span className="icon_tag_alt"></span>
              <a href="#">Have a coupon?</a> Click here to enter your code.
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
                      First Name <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>
                      Last Name <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="checkout__form__input">
                    <p>
                      Country <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="country"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="checkout__form__input">
                    <p>
                      Address <span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Street Address"
                      name="address"
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Apartment. suite, unite ect ( optional )"
                    />
                  </div>
                  <div className="checkout__form__input">
                    <p>
                      Town/City <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="townCity"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="checkout__form__input">
                    <p>
                      Country/State <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="countryState"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="checkout__form__input">
                    <p>
                      Postcode/Zip <span>*</span>
                    </p>
                    <input
                      type="text"
                      name="postcode"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>
                      Phone <span>*</span>
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
                <div className="col-lg-12">
                  <div className="checkout__form__checkbox">
                    <label htmlFor="acc">
                      Create an account?
                      <input
                        type="checkbox"
                        id="acc"
                        name="createAccount"
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer, login at the top of the
                      page.
                    </p>
                  </div>
                  {formData.createAccount && (
                    <div className="checkout__form__input">
                      <p>
                        Account Password <span>*</span>
                      </p>
                      <input
                        type="password"
                        name="accountPassword"
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  <div className="checkout__form__checkbox">
                    <label htmlFor="note">
                      Note about your order, e.g, special note for delivery
                      <input
                        type="checkbox"
                        id="note"
                        name="note"
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  {formData.note && (
                    <div className="checkout__form__input">
                      <p>
                        Order notes <span>*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Note about your order, e.g, special note for delivery"
                        name="orderNotes"
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="checkout__order">
                <h5>Your order</h5>
                <div className="checkout__order__product">
                  <ul>
                    <li>
                      <span className="top__text">Product</span>
                      <span className="top__text__right">Total</span>
                    </li>
                    <li>
                      01. Chain buck bag <span>$ 300.0</span>
                    </li>
                    <li>
                      02. Zip-pockets pebbled
                      <br /> tote briefcase <span>$ 170.0</span>
                    </li>
                    <li>
                      03. Black jean <span>$ 170.0</span>
                    </li>
                    <li>
                      04. Cotton shirt <span>$ 110.0</span>
                    </li>
                  </ul>
                </div>
                <div className="checkout__order__total">
                  <ul>
                    <li>
                      Subtotal <span>$ 750.0</span>
                    </li>
                    <li>
                      Total <span>$ 750.0</span>
                    </li>
                  </ul>
                </div>
                <div className="checkout__order__widget">
                  <label htmlFor="o-acc">
                    Create an account?
                    <input type="checkbox" id="o-acc" />
                    <span className="checkmark"></span>
                  </label>
                  <p>
                    Create an account by entering the information below. If you
                    are a returning customer, login at the top of the page.
                  </p>
                  <label htmlFor="check-payment">
                    Cheque payment
                    <input type="checkbox" id="check-payment" />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="paypal">
                    PayPal
                    <input type="checkbox" id="paypal" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="site-btn"
                  onClick={handlePlaceOrder}
                >
                  Place order
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
