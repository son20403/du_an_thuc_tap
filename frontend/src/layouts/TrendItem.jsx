import React from 'react';
import useCurrencyFormat from '../hooks/useCurrencyFormat';
import { Link } from 'react-router-dom';
import useGetAllProducts from '../hooks/useGetAllPost';

const TrendItem = ({ product }) => {
    const { dataImages } = useGetAllProducts()
    const anh_san_pham = dataImages?.find((image) => image.ma_san_pham === product?.id)?.hinh_anh
    const formattedAmount = useCurrencyFormat(product?.gia_san_pham);
    return (
        <Link to={`/detail/${product?.ten_san_pham_slug}`} className='trend__item block'>
            <div className="trend__item__pic border">
                <img style={{ width: '90px', height: '90px', objectFit: 'cover' }} src={anh_san_pham} alt />
            </div>
            <div className="trend__item__text">
                <h6 className='mb-4'>{product?.ten_san_pham}</h6>
                <div className="product__price">{formattedAmount}</div>
            </div>
        </Link>
    );
};

export default TrendItem;