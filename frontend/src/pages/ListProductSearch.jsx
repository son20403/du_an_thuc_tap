import React, { useEffect, useState } from 'react';
import products from '../data/products';
import { Link, useLocation } from 'react-router-dom';
import Instagram from '../layouts/Instagram';
import $ from 'jquery'
import mixitup from 'mixitup'
import useCurrencyFormat from '../hooks/useCurrencyFormat';
import ProductItem from '../layouts/ProductItem';
const ListPostSearch = () => {
    const [dataProducts, setDataProducts] = useState([]);
    const [query, setQuery] = useState('');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get("query");
    const listProductsSearch = dataProducts?.filter(
        pro => pro.slug.toLowerCase().includes(query.toLowerCase())
            || pro.ten_sp.toLowerCase().includes(query.toLowerCase()))
    useEffect(() => {
        setDataProducts(products)
        setQuery(searchParams)
    }, [products, searchParams]);

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
    }, [listProductsSearch]);
    useEffect(() => {
        const setBgElements = document.querySelectorAll('.set-bg');
        setBgElements.forEach(element => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
    }, [listProductsSearch]);
    return (
        <div>
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1 className='text-2xl mb-10 font-medium'>Tìm kiếm sản phẩm:  &apos;{query}&apos;</h1>
                            <div className="row">
                                {listProductsSearch && listProductsSearch.length > 0
                                    ? listProductsSearch.map((product) => (
                                        <ProductItem key={product.id} anh_sp={product.anh_sp}
                                            gia={product.gia} slug={product.slug} ten_sp={product.ten_sp} />
                                    )) : <div className='col-lg-12 text-center'>Không có sản phẩm nào</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Instagram></Instagram>
        </div>
    );
};
export default ListPostSearch;