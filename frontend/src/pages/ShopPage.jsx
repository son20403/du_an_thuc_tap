import React, { useEffect, useState } from 'react';
import Instagram from '../layouts/Instagram';
import $ from 'jquery'
import mixitup from 'mixitup'
import '../func/main'
import products from '../data/products';
import ProductItem from '../layouts/ProductItem';
const ShopPage = () => {
    const [dataProducts, setDataProducts] = useState([]);
    useEffect(() => {
        setDataProducts(products)
    }, [products]);
    useEffect(() => {
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
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1 className='text-2xl font-medium mb-10'>Danh sách sản phẩm</h1>
                            <div className="row">
                                {dataProducts?.map((prod) => (
                                    <ProductItem key={prod.id} anh_sp={prod.anh_sp} gia={prod.gia} ten_sp={prod.ten_sp}
                                        slug={prod.slug} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Instagram></Instagram>
        </div>
    );
};

export default ShopPage;