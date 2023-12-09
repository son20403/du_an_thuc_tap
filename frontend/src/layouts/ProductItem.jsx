import React, { useEffect, useState } from 'react';
import useCurrencyFormat from '../hooks/useCurrencyFormat';
import { Link } from 'react-router-dom';

import $ from 'jquery'
import { getAllProduct } from '../api/connect';
import useGetAllProducts from '../hooks/useGetAllPost';
const ProductItem = (
    {
        ten_sp = 'Buttons tweed blazer',
        gia = 0,
        slug = '',
        id = '',
        giam_gia = 0
    }
) => {
    const { dataImages } = useGetAllProducts()
    const anh_san_pham = dataImages?.find((image) => image.ma_san_pham === id)?.hinh_anh
    const formattedAmount = useCurrencyFormat(gia);
    const gia_san_pham = gia
    const phan_tram = giam_gia
    const sale = gia_san_pham * (phan_tram / 100)
    const giam_gia_sp = gia_san_pham - sale;
    const gia_goc = useCurrencyFormat(gia_san_pham);
    const gia_sau_khi_giam = useCurrencyFormat(giam_gia_sp);
    useEffect(() => {
        const setBgElements = document.querySelectorAll('.set-bg');
        setBgElements.forEach(element => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
    }, [anh_san_pham]);
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
            <div className="product__item">
                <div className="product__item__pic set-bg"
                    data-setbg={anh_san_pham}>
                    <div className="label new">New</div>
                    <ul className="product__hover">
                        <li><a href={anh_san_pham} className="image-popup"><span className="arrow_expand" /></a></li>
                        <li><Link to={`/detail/${slug}`}><span className="icon_bag_alt" /></Link></li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6><a href="#">{ten_sp}</a></h6>
                    <div className={`product__price ${giam_gia !== 0 ? 'text-sm line-through text-gray-500' : ''}`}>{formattedAmount} {giam_gia !== 0 && <span>- {giam_gia}%</span>}</div>
                    {giam_gia !== 0 &&
                        <div className="product__price">{gia_sau_khi_giam}</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductItem;