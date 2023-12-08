import React, { Fragment, useEffect, useRef, useState } from "react";
import Instagram from "../layouts/Instagram";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mixitup from "mixitup";
import $ from "jquery";
import { useParams } from "react-router-dom";
import useCurrencyFormat from "../hooks/useCurrencyFormat";
import ProductItem from "../layouts/ProductItem";
import { Dialog, Transition } from "@headlessui/react";
import useGetAllProducts from "../hooks/useGetAllPost";
import useGetAllCategories from "../hooks/useGetAllCategories";
import Loading from "../components/loading/Loading";
import { toast } from 'react-toastify';
const DetailProductPage = () => {
  const { slug } = useParams();
  const { dataProducts, dataImages, loading } = useGetAllProducts()
  const { dataCategories } = useGetAllCategories()
  const [detailProduct, setDetailProduct] = useState({});
  const [detailCategory, setDetailCategory] = useState({});
  const [listSimilarProduct, setListSimilarProduct] = useState([]);
  const anh_san_pham = dataImages?.find((image) => image.ma_san_pham === detailProduct?.id)?.hinh_anh
  useEffect(() => {
    setDetailProduct(
      dataProducts?.filter((product) => product.ten_san_pham_slug === slug)[0]
    );
  }, [dataProducts, slug]);
  useEffect(() => {
    setListSimilarProduct(
      dataProducts?.filter(
        (product) => product?.ma_the_loai === detailProduct?.ma_the_loai
      )
    );
  }, [dataProducts, detailProduct]);

  useEffect(() => {
    setDetailCategory(dataCategories?.find((cate) => cate.id === detailProduct?.ma_the_loai))
  }, [dataCategories, detailProduct]);
  const gia_san_pham = detailProduct?.gia_san_pham
  const phan_tram = detailProduct?.giam_gia_san_pham
  const sale = gia_san_pham * (phan_tram / 100)
  const giam_gia = gia_san_pham - sale;
  const gia_goc = useCurrencyFormat(gia_san_pham);
  const gia_sau_khi_giam = useCurrencyFormat(giam_gia);

  const [rating, setRating] = useState(0);
  const handleChangeStar = (value) => {
    setRating(value);
    setReview((prevReview) => ({
      ...prevReview,
      rating: value.toString(), // Chuyển đổi giá trị sang chuỗi nếu cần
    }));
  };
  const [review, setReview] = useState({
    username: "",
    phone: "",
    content: "",
    rating: rating,
  });
  const handleChangeReview = (e) => {
    const { name, value } = e.target;
    setReview((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
    // Ở đây bạn có thể gửi giá trị rating lên server hoặc xử lý nó theo ý muốn
  };
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log(review);
  };
  const inputRef = useRef(null)
  const handleSubmitAddToCart = (e) => {
    e.preventDefault()
    const qty = +inputRef.current.value
    addToCart(
      { id: detailProduct?.id, image: anh_san_pham, name: detailProduct?.ten_san_pham, price: detailProduct?.gia_san_pham, quantity: qty, sale: detailProduct?.giam_gia_san_pham })
  }
  const [openAdd, setOpenAdd] = useState(false);
  const cancelButtonRef = useRef(null);
  useEffect(() => {
    const setBgElements = document.querySelectorAll(".set-bg");
    setBgElements.forEach((element) => {
      const bg = element.getAttribute("data-setbg");
      element.style.backgroundImage = `url(${bg})`;
    });
  }, [detailProduct]);
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
  useEffect(() => {
    let proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
      let $button = $(this);
      let oldValue = $button.parent().find('input').val();
      if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          // eslint-disable-next-line no-redeclare
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find('input').val(newVal);
    });
  }, []);
  function addToCart({ id, name, price, image, quantity = 1, sale }) {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    if (!cart) {
      cart = [];
      cart.push({ id, name, price, image, quantity, sale });
    } else {
      let item = cart.find((item) => item.id === id);
      if (item) {
        item.quantity += quantity
      } else {
        cart.push({ id, name, price, image, quantity, sale });
      }
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Thêm vào giỏ hàng thành công")
    return true;
  }
  return (
    <div>
      {loading && <Loading></Loading>}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <div className="product__details__slider__content">
                  <div className="product__details__pic__slider">
                    <img
                      data-hash="product-1"
                      className="product__big__img"
                      src={anh_san_pham}
                      alt={detailProduct?.ten_san_pham}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text flex flex-col gap-y-5">
                <h3>
                  {detailProduct?.ten_san_pham}{" "}
                  <span>Loại: {detailCategory?.ten_the_loai}</span>
                </h3>
                <div className="flex items-center gap-10">
                  <div className="product__details__price mb-0">
                    {gia_sau_khi_giam}
                    {giam_gia === gia_san_pham ? '' :
                      <span>{gia_goc}</span>
                    }
                  </div>
                  {phan_tram &&
                    <span className="text-red-600 font-medium">-{phan_tram}%</span>
                  }
                </div>
                <div dangerouslySetInnerHTML={{ __html: detailProduct?.mo_ta }}
                  className='content_post !text-xs md' />
                <form onSubmit={handleSubmitAddToCart} className="product__details__button ">
                  <div className="quantity">
                    <span>Số lượng:</span>
                    <div className="pro-qty">
                      <input ref={inputRef} type="text" defaultValue={1} />
                    </div>
                  </div>
                  <button type="submit" className="cart-btn">
                    <span className="icon_bag_alt" /> Thêm vào giỏ hàng
                  </button>
                </form>
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
                      Mô tả
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      Bình luận ( 2 )
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <h6>Mô tả</h6>
                    <div dangerouslySetInnerHTML={{ __html: detailProduct?.mo_ta }}
                      className='content_post !text-xs md' />
                    {/* <p>{detailProduct?.mo_ta}</p> */}
                  </div>
                  <Transition.Root show={openAdd} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-50"
                      initialFocus={cancelButtonRef}
                      onClose={setOpenAdd}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>

                      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-screen-sm ">
                              <div className="  mx-auto py-3 px-3 bg-white  ">
                                <div className="flex  sm:items-center justify-between">
                                  <h1 className="text-2xl font-bold pl-2">
                                    Đánh giá sản phẩm
                                  </h1>
                                  <button
                                    type="button"
                                    onClick={() => setOpenAdd(false)}
                                    ref={cancelButtonRef}
                                    className=""
                                  >
                                    <svg
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                      ></g>
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></g>
                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                                          fill="#0F0F0F"
                                        ></path>{" "}
                                      </g>
                                    </svg>
                                  </button>
                                </div>
                                <hr className=" border-solid border-[1.5px] my-5" />
                                <form onSubmit={handleReviewSubmit}>
                                  <div className="">
                                    <div className="flex items-center justify-center ">
                                      <img
                                        src={detailProduct?.anh_sp}
                                        alt=""
                                        className="h-[100px] !important"
                                      />
                                    </div>
                                    <p className="font-medium text-xl text-center">
                                      {detailProduct?.ten_sp}
                                    </p>
                                    <div className="text-2xl text-center">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                          key={star}
                                          onClick={() => handleChangeStar(star)}
                                          className={
                                            star <= rating
                                              ? "text-yellow-500 cursor-pointer hover:transform scale-120 transition-transform duration-200"
                                              : "text-gray-500 cursor-pointer hover:transform scale-120 transition-transform duration-200"
                                          }
                                        >
                                          ★
                                        </span>
                                      ))}
                                      <p className="text-base">
                                        Your Rating: {rating}
                                      </p>
                                    </div>
                                    <div>
                                      <textarea
                                        className="w-full border border-slate-300 rounded h-[80px] focus:border-slate-300"
                                        name="content"
                                        value={review.content}
                                        onChange={handleChangeReview}
                                        placeholder="Hãy để lại cảm nhận của bạn...."
                                        id=""
                                        cols="30"
                                        rows="10"
                                      ></textarea>
                                      {/* <input
                              name="content"
                              value={review.content}
                              onChange={handleChangeReview}
                              className="w-full border border-slate-300 rounded h-[80px]"
                              type="text"
                              placeholder="Hãy để lại cảm nhận của bạn...."
                            /> */}
                                    </div>
                                    <hr className=" border-solid border-[1.5px] my-5" />
                                    <div>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label
                                            htmlFor=""
                                            className="font-normal"
                                          >
                                            Họ tên:
                                          </label>
                                          <input
                                            name="username"
                                            value={review.username}
                                            onChange={handleChangeReview}
                                            className="border w-full  h-[40px]   rounded border-slate-300"
                                            type="text"
                                            placeholder="Nhập họ và tên"
                                          />
                                        </div>
                                        <div>
                                          <label
                                            htmlFor=""
                                            className="font-normal"
                                          >
                                            Số điện thoại:
                                          </label>
                                          <input
                                            name="phone"
                                            value={review.phone}
                                            onChange={handleChangeReview}
                                            className="border w-full h-[40px]   rounded border-slate-300"
                                            type="text"
                                            placeholder="Nhập số điện thoại"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    className="bg-green-500 rounded-md  text-white py-2 px-4 w-full mb-4 mt-4"
                                  >
                                    Gửi đánh giá
                                  </button>
                                </form>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div>
                      <div className="text-xl font-medium">
                        Đánh giá sản phẩm
                      </div>
                      <div className="my-4">
                        <p>Bạn đã dùng sản phẩm này?</p>
                        <div className="bg-cyan-500">
                          <button
                            onClick={() => setOpenAdd(true)}
                            className="bg-cyan-300 py-2 text-lg font-normal rounded-full mt-1 primary-btn "
                          >
                            Gửi đánh giá
                          </button>
                        </div>
                      </div>
                      <div className="my-4">
                        <hr className="border border-solid" />
                      </div>

                      {/* list danh gia */}
                      <div className="my-4">
                        <div className="flex  mb-5">
                          <div className="rounded-full w-[45px] h-[45px] overflow-hidden border border-solid border-gray-500 flex items-center mr-3">
                            {/* <img
                        src="https://www.vhv.rs/dpng/d/421-4213525_png-file-svg-single-user-icon-png-transparent.png"
                        alt=""
                        className="w-[80%] h-[80%] mx-auto"
                      /> */}
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Thủy</p>
                            <div className="flex mb-2 mt-2 ">
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
                            </div>
                            <div>Đẹp quá</div>
                            <div className="flex items-center">
                              <div className="flex items-center text-blue-500 font-medium mr-2">
                                <svg
                                  className="w-[20px] h-[30px] mr-1"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12.444 1.35396C11.6474 0.955692 10.6814 1.33507 10.3687 2.16892L7.807 9.00001L4 9.00001C2.34315 9.00001 1 10.3432 1 12V20C1 21.6569 2.34315 23 4 23H18.3737C19.7948 23 21.0208 22.003 21.3107 20.6119L22.9773 12.6119C23.3654 10.7489 21.9433 9.00001 20.0404 9.00001H14.8874L15.6259 6.7846C16.2554 4.89615 15.4005 2.8322 13.62 1.94198L12.444 1.35396ZM9.67966 9.70225L12.0463 3.39119L12.7256 3.73083C13.6158 4.17595 14.0433 5.20792 13.7285 6.15215L12.9901 8.36755C12.5584 9.66261 13.5223 11 14.8874 11H20.0404C20.6747 11 21.1487 11.583 21.0194 12.204L20.8535 13H17C16.4477 13 16 13.4477 16 14C16 14.5523 16.4477 15 17 15H20.4369L20.0202 17H17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19H19.6035L19.3527 20.204C19.2561 20.6677 18.8474 21 18.3737 21H8V10.9907C8.75416 10.9179 9.40973 10.4221 9.67966 9.70225ZM6 11H4C3.44772 11 3 11.4477 3 12V20C3 20.5523 3.44772 21 4 21H6V11Z"
                                      fill="#1640D6"
                                    ></path>
                                  </g>
                                </svg>

                                <p>Thích</p>
                              </div>
                              <p className="mr-2 text-gray-400">|</p>
                              <p className="text-gray-400">Ngày 21-11-2003</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>SẢN PHẨM TƯƠNG TỰ</h5>
              </div>
            </div>
            {listSimilarProduct &&
              listSimilarProduct.length > 0 &&
              listSimilarProduct.map((prod) => (
                <ProductItem key={prod.id} id={prod.id} gia={prod.gia_san_pham} ten_sp={prod.ten_san_pham}
                  slug={prod.ten_san_pham_slug} />
              ))}
          </div>
        </div>
      </section>
      <Instagram></Instagram>
    </div>
  );
};

export default DetailProductPage;
