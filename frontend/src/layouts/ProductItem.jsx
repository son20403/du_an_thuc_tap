import React, { useEffect } from 'react';
import useCurrencyFormat from '../hooks/useCurrencyFormat';
import { Link } from 'react-router-dom';

import $ from 'jquery'
const ProductItem = (
    {
        anh_sp = './src/assets/img/product/product-1.jpg',
        ten_sp = 'Buttons tweed blazer',
        gia = 0,
        slug = ''
    }
) => {
    const formattedAmount = useCurrencyFormat(gia);
    useEffect(() => {
        const setBgElements = document.querySelectorAll('.set-bg');
        setBgElements.forEach(element => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
    }, []);
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
            <div className="product__item">
                <div className="product__item__pic set-bg" data-setbg={anh_sp}>
                    <div className="label new">New</div>
                    <ul className="product__hover">
                        <li><a href={anh_sp} className="image-popup"><span className="arrow_expand" /></a></li>
                        <li><Link to={`/detail/${slug}`}><span className="icon_bag_alt" /></Link></li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6><a href="#">{ten_sp}</a></h6>
                    <div className="product__price">{formattedAmount}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;