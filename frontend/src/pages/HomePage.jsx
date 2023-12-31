import React, { useEffect, useState } from 'react';
import Instagram from '../layouts/Instagram';
import $ from 'jquery'
import mixitup from 'mixitup'
import ProductItem from '../layouts/ProductItem';
import { Link, useLocation } from 'react-router-dom';
import TrendItem from '../layouts/TrendItem';
import CategoryHomeItem from '../layouts/CategoryHomeItem';
import useGetAllProducts from '../hooks/useGetAllPost';
import useGetAllCategories from '../hooks/useGetAllCategories';
import Loading from '../components/loading/Loading';
const HomePage = () => {
    const { dataProducts, loading } = useGetAllProducts()
    const { dataCategories } = useGetAllCategories()
    const listProductsTShirt = dataProducts?.filter(
        pro => pro.ten_san_pham_slug.toLowerCase().includes('ao'.toLowerCase()))
    const listProductsTrousers = dataProducts?.filter(
        pro => pro.ten_san_pham_slug.toLowerCase().includes('quan'.toLowerCase()))

    const location = useLocation();
    const hashValue = new URLSearchParams(location.hash.substring(1)).get('type');
    useEffect(() => {
        const scrollToCenter = () => {
            if (hashValue) {
                const element = document.getElementById(hashValue);
                if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const className = element.getAttribute('class')
                    window.scrollTo({ top: elementRect.top, behavior: 'smooth' });
                    element.className = `${className} bg-primary/10 transition-all rounded-lg`
                    setTimeout(() => {
                        element.className = `${className} relative`
                    }, 1500);
                }
            }
        };
        if (hashValue) {
            setTimeout(scrollToCenter, 1200);
        }
    }, [hashValue]);
    useEffect(() => {
        const setBgElements = document.querySelectorAll('.set-bg');
        setBgElements.forEach(element => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.property__gallery').length > 0) {
            var containerEl = document.querySelector('.property__gallery');
            var mixer = mixitup(containerEl);
        }
        //Canvas Menu
        $(".canvas__open").on('click', function () {
            $(".offcanvas-menu-wrapper").addClass("active");
            $(".offcanvas-menu-overlay").addClass("active");
        });

        $(".offcanvas-menu-overlay, .offcanvas__close").on('click', function () {
            $(".offcanvas-menu-wrapper").removeClass("active");
            $(".offcanvas-menu-overlay").removeClass("active");
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
        $(".nice-scroll").niceScroll({
            cursorborder: "",
            cursorcolor: "#dddddd",
            boxzoom: false,
            cursorwidth: 5,
            background: 'rgba(0, 0, 0, 0.2)',
            cursorborderradius: 50,
            horizrailenabled: false
        });
    }, []);
    return (
        <div>
            {loading && <Loading></Loading>}
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="categories__item categories__large__item set-bg"
                                data-setbg="./src/assets/img/categories/category-1.jpg">
                                <div className="categories__text">
                                    <h1 className='font-mono'>Welcome to Ashion Shop</h1>
                                    <Link to={`/shop`}>Xem ngay</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                {dataCategories?.slice(1, 5).map(((cate, index) => (
                                    <CategoryHomeItem key={cate.id + index} cate={cate} index={index}></CategoryHomeItem>
                                )))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>Sản phẩm mới</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">

                        </div>
                    </div>
                    <div className="row property__gallery">
                        {dataProducts.slice(0, 8)?.map((prod) => (
                            <ProductItem key={prod.id} id={prod.id} gia={prod.gia_san_pham} ten_sp={prod.ten_san_pham} giam_gia={prod?.giam_gia_san_pham}
                                slug={prod.ten_san_pham_slug} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="product spad" id='ao'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>Chuyên mục áo</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">

                        </div>
                    </div>
                    <div className="row property__gallery">
                        {listProductsTShirt.slice(0, 8)?.map((prod) => (
                            <ProductItem key={prod.id} id={prod.id} gia={prod.gia_san_pham} ten_sp={prod.ten_san_pham} giam_gia={prod?.giam_gia_san_pham}
                                slug={prod.ten_san_pham_slug} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="trend spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Nổi bật</h4>
                                </div>
                                {dataProducts.slice(8, 10)?.map((prod) => (
                                    <TrendItem key={prod.id} product={prod} />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Giảm giá</h4>
                                </div>
                                {dataProducts.slice(10, 12)?.map((prod) => (
                                    <TrendItem key={prod.id} product={prod} />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Yêu thích</h4>
                                </div>
                                {dataProducts.slice(12, 15)?.map((prod) => (
                                    <TrendItem key={prod.id} product={prod} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product spad" id='quan'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>Chuyên mục quần</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">

                        </div>
                    </div>
                    <div className="row property__gallery">
                        {listProductsTrousers.slice(0, 8)?.map((prod) => (
                            <ProductItem key={prod.id} id={prod.id} gia={prod.gia_san_pham} ten_sp={prod.ten_san_pham} giam_gia={prod?.giam_gia_san_pham}
                                slug={prod.ten_san_pham_slug} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="discount">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="discount__pic">
                                <img src="./src/assets/img/discount.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="discount__text">
                                <div className="discount__text__title">
                                    <span>Discount</span>
                                    <h2>Summer 2019</h2>
                                    <h5><span>Sale</span> 50%</h5>
                                </div>
                                <div className="discount__countdown" id="countdown-time">
                                    <div className="countdown__item">
                                        <span>22</span>
                                        <p>Days</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>18</span>
                                        <p>Hour</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>46</span>
                                        <p>Min</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>05</span>
                                        <p>Sec</p>
                                    </div>
                                </div>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-car" />
                                <h6>Free Shipping</h6>
                                <p>For all oder over $99</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-money" />
                                <h6>Money Back Guarantee</h6>
                                <p>If good have Problems</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-support" />
                                <h6>Online Support 24/7</h6>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-headphones" />
                                <h6>Payment Secure</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Instagram></Instagram>
        </div>
    );
};

export default HomePage;