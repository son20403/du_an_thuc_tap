import React, { useEffect } from "react";
import Instagram from "../layouts/Instagram";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mixitup from "mixitup";
import $ from "jquery";
const DetailProductPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // ...Thêm các tùy chọn khác tại đây
  };
  useEffect(() => {
    $(".filter__controls li").on("click", function () {
      $(".filter__controls li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".property__gallery").length > 0) {
      var containerEl = document.querySelector(".property__gallery");
      var mixer = mixitup(containerEl);
    }
    //Canvas Menu
    $(".canvas__open").on("click", function () {
      $(".offcanvas-menu-wrapper").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay, .offcanvas__close").on("click", function () {
      $(".offcanvas-menu-wrapper").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });
    $(".image-popup").magnificPopup({
      type: "image",
    });
    $(".nice-scroll").niceScroll({
      cursorborder: "",
      cursorcolor: "#dddddd",
      boxzoom: false,
      cursorwidth: 5,
      background: "rgba(0, 0, 0, 0.2)",
      cursorborderradius: 50,
      horizrailenabled: false,
    });
  }, []);
  return (
    <div>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <div className="product__details__slider__content">
                  <div className="product__details__pic__slider">
                    <Slider {...settings}>
                      <img
                        data-hash="product-1"
                        className="product__big__img"
                        src="./src/assets/img/product/details/product-1.jpg"
                        alt
                      />
                      <img
                        data-hash="product-2"
                        className="product__big__img"
                        src="./src/assets/img/product/details/product-3.jpg"
                        alt
                      />
                      <img
                        data-hash="product-3"
                        className="product__big__img"
                        src="./src/assets/img/product/details/product-2.jpg"
                        alt
                      />
                      <img
                        data-hash="product-4"
                        className="product__big__img"
                        src="./src/assets/img/product/details/product-4.jpg"
                        alt
                      />
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>
                  Essential structured blazer{" "}
                  <span>Brand: SKMEIMore Men Watches from SKMEI</span>
                </h3>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>( 138 reviews )</span>
                </div>
                <div className="product__details__price">
                  $ 75.0 <span>$ 83.0</span>
                </div>
                <p>
                  Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret
                  fugit, sed quia consequuntur magni lores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
                <div className="product__details__button">
                  <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <input type="text" defaultValue={1} />
                    </div>
                  </div>
                  <a href="#" className="cart-btn">
                    <span className="icon_bag_alt" /> Add to cart
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_adjust-horiz" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__details__widget">
                  <ul>
                    <li>
                      <span>Availability:</span>
                      <div className="stock__checkbox">
                        <label htmlFor="stockin">
                          In Stock
                          <input type="checkbox" id="stockin" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available color:</span>
                      <div className="color__checkbox">
                        <label htmlFor="red">
                          <input
                            type="radio"
                            name="color__radio"
                            id="red"
                            defaultChecked
                          />
                          <span className="checkmark" />
                        </label>
                        <label htmlFor="black">
                          <input type="radio" name="color__radio" id="black" />
                          <span className="checkmark black-bg" />
                        </label>
                        <label htmlFor="grey">
                          <input type="radio" name="color__radio" id="grey" />
                          <span className="checkmark grey-bg" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available size:</span>
                      <div className="size__btn">
                        <label htmlFor="xs-btn" className="active">
                          <input type="radio" id="xs-btn" />
                          xs
                        </label>
                        <label htmlFor="s-btn">
                          <input type="radio" id="s-btn" />s
                        </label>
                        <label htmlFor="m-btn">
                          <input type="radio" id="m-btn" />m
                        </label>
                        <label htmlFor="l-btn">
                          <input type="radio" id="l-btn" />l
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Promotions:</span>
                      <p>Free shipping</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      Specification
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      Reviews ( 2 )
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <h6>Description</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <h6>Specification</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <h6>Reviews ( 2 )</h6>

                    <div className="flex mb-2">
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 ml-1.5">
                        4.95
                      </p>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 ml-1.5">
                        out of
                      </p>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 ml-1.5">
                        5
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      1,745 global ratings
                    </p>
                    <div className="flex items-center mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        5 star
                      </a>
                      <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div
                          className="h-5 bg-yellow-300 rounded w-70"
                          //   style="width: 70%"
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div className="flex items-center mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        4 star
                      </a>
                      <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div
                          className="h-5 bg-yellow-300 rounded w-17"
                          //   style="width: 17%"
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        17%
                      </span>
                    </div>
                    <div className="flex items-center mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        3 star
                      </a>
                      <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div
                          className="h-5 bg-yellow-300 rounded w-8"
                          //   style="width: 8%"
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8%
                      </span>
                    </div>
                    <div className="flex items-center mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        2 star
                      </a>
                      <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div
                          className="h-5 bg-yellow-300 rounded w-4"
                          //   style="width: 4%"
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        4%
                      </span>
                    </div>
                    <div className="flex items-center mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        1 star
                      </a>
                      <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div
                          className="h-5 bg-yellow-300 rounded w-10"
                          //   style="width: 1%"
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        1%
                      </span>
                    </div>

                    <form>
                      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                          <label  className="sr-only">
                            Your comment
                          </label>
                          <textarea
                            id="comment"
                            rows="4"
                            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Write a comment..."
                            required
                          ></textarea>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                          <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                          >
                            Post comment
                          </button>
                          <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                            <button
                              type="button"
                              className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 12 20"
                              >
                                <path
                                  stroke="currentColor"
                                  //   stroke-linejoin="round"
                                  //   stroke-width="2"
                                  d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                />
                              </svg>
                              <span className="sr-only">Attach file</span>
                            </button>
                            <button
                              type="button"
                              className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 20"
                              >
                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                              </svg>
                              <span className="sr-only">Set location</span>
                            </button>
                            <button
                              type="button"
                              className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                              >
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                              </svg>
                              <span className="sr-only">Upload image</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                      Remember, contributions to this topic should follow our{" "}
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Community Guidelines
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>RELATED PRODUCTS</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="./src/assets/img/product/related/rp-1.jpg"
                >
                  <div className="label new">New</div>
                  <ul className="product__hover">
                    <li>
                      <a
                        href="./src/assets/img/product/related/rp-1.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Buttons tweed blazer</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="./src/assets/img/product/related/rp-2.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a
                        href="./src/assets/img/product/related/rp-2.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Flowy striped skirt</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 49.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="./src/assets/img/product/related/rp-3.jpg"
                >
                  <div className="label stockout">out of stock</div>
                  <ul className="product__hover">
                    <li>
                      <a
                        href="./src/assets/img/product/related/rp-3.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Cotton T-Shirt</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="./src/assets/img/product/related/rp-4.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a
                        href="./src/assets/img/product/related/rp-4.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Slim striped pocket shirt</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Instagram></Instagram>
    </div>
  );
};

export default DetailProductPage;
