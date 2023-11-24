import React, { useEffect, useState } from 'react';
import products from '../data/products';
import { useParams } from 'react-router-dom';
import Instagram from '../layouts/Instagram';
import $ from 'jquery'
import mixitup from 'mixitup'
import categories from '../data/category';
import ProductItem from '../layouts/ProductItem';
const ListProductCategory = () => {
    const [dataProducts, setDataProducts] = useState([]);
    const [listProducts, setListProducts] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);
    const { slug } = useParams();
    const category = dataCategories?.filter((cate) => cate.slug === slug)[0]
    useEffect(() => {
        setListProducts(dataProducts?.filter((prod) => prod.ma_loai === category?.id))
    }, [category]);
    useEffect(() => {
        setDataProducts(products)
    }, [products]);
    useEffect(() => {
        setDataCategories(categories)
    }, [categories]);

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
    }, [listProducts]);
    useEffect(() => {
        const setBgElements = document.querySelectorAll('.set-bg');
        setBgElements.forEach(element => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
    }, [listProducts]);
    return (
        <div>
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="row">
                                {listProducts && listProducts.length > 0
                                    ? listProducts.map((product) => (
                                        <ProductItem key={product} anh_sp={product.anh_sp} gia={product.gia}
                                            ten_sp={product.ten_sp} slug={product.slug} />
                                    )) : ('Không có sản phẩm')}
                                <div className="col-lg-12 text-center">
                                    <div className="pagination__option">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#"><i className="fa fa-angle-right" /></a>
                                    </div>
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


export default ListProductCategory;