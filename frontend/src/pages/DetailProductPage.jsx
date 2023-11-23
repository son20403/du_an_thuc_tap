import React, { useEffect, useState } from "react";
import Instagram from "../layouts/Instagram";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mixitup from "mixitup";
import $ from "jquery";
import { useParams } from "react-router-dom";
import products from "../data/products";
import useCurrencyFormat from "../hooks/useCurrencyFormat";
import ProductItem from "../layouts/ProductItem";
const DetailProductPage = () => {
  const { slug } = useParams();
  const [dataProducts, setDataProducts] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});
  const [listSimilarProduct, setListSimilarProduct] = useState([]);
  useEffect(() => {
    setDataProducts(products);
  }, [products]);
  useEffect(() => {
    setDetailProduct(
      dataProducts?.filter((product) => product.slug === slug)[0]
    );
  }, [dataProducts]);
  useEffect(() => {
    setListSimilarProduct(
      dataProducts?.filter(
        (product) => product?.ma_loai === detailProduct?.ma_loai
      )
    );
  }, [dataProducts, detailProduct]);
  const formattedAmount = useCurrencyFormat(detailProduct?.gia);
  useEffect(() => {
    const setBgElements = document.querySelectorAll(".set-bg");
    setBgElements.forEach((element) => {
      const bg = element.getAttribute("data-setbg");
      element.style.backgroundImage = `url(${bg})`;
    });
  }, [detailProduct]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  }, [detailProduct]);
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
                        src={detailProduct?.anh_sp}
                        alt
                      />
                      <img
                        data-hash="product-2"
                        className="product__big__img"
                        src={detailProduct?.anh_sp}
                        alt
                      />
                      <img
                        data-hash="product-3"
                        className="product__big__img"
                        src={detailProduct?.anh_sp}
                        alt
                      />
                      <img
                        data-hash="product-4"
                        className="product__big__img"
                        src={detailProduct?.anh_sp}
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
                  {detailProduct?.ten_sp}{" "}
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
                  {formattedAmount} <span>{formattedAmount}</span>
                </div>
                <p>{detailProduct?.mota}</p>
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
                    <p>{detailProduct?.mota}</p>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <h6>Reviews ( 2 )</h6>
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
            {listSimilarProduct &&
              listSimilarProduct.length > 0 &&
              listSimilarProduct.map((product) => (
                <ProductItem
                  key={product?.id}
                  anh_sp={product.anh_sp}
                  gia={product.gia}
                  ten_sp={product.ten_sp}
                  slug={product.slug}
                ></ProductItem>
              ))}
          </div>
        </div>
      </section>
      <Instagram></Instagram>
    </div>
  );
};

export default DetailProductPage;
