import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Instagram from '../layouts/Instagram';
import $ from 'jquery'
import mixitup from 'mixitup'
import ProductItem from '../layouts/ProductItem';
import useGetAllProducts from '../hooks/useGetAllPost';
import useGetAllCategories from '../hooks/useGetAllCategories';
import Loading from '../components/loading/Loading';
const ListProductCategory = () => {
    const [listProducts, setListProducts] = useState([]);
    const { dataProducts, loading } = useGetAllProducts()
    const { dataCategories } = useGetAllCategories()
    const { slug } = useParams();
    const category = dataCategories?.find((cate) => cate.ten_the_loai_slug === slug)
    useEffect(() => {
        setListProducts(dataProducts?.filter((prod) => prod.ma_the_loai === category?.id))
    }, [category]);
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
            {loading && <Loading></Loading>}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1 className='text-2xl font-medium mb-10'>Danh sách sản phẩm</h1>
                            <div className="row">
                                {listProducts && listProducts.length > 0
                                    ? listProducts.map((product) => (
                                        <ProductItem key={product.id} id={product.id} gia={product.gia_san_pham}
                                            ten_sp={product.ten_san_pham} slug={product.ten_san_pham_slug} />
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


export default ListProductCategory;