import React from 'react';
import useCurrencyFormat from '../hooks/useCurrencyFormat';
import { Link } from 'react-router-dom';

const TrendItem = ({ product }) => {
    const formattedAmount = useCurrencyFormat(product?.gia);
    return (
        <Link to={`/detail/${product?.slug}`} className='trend__item block'>
            <div className="trend__item__pic border">
                <img style={{ width: '90px', height: '90px', objectFit: 'cover' }} src={product?.anh_sp} alt />
            </div>
            <div className="trend__item__text">
                <h6 className='mb-4'>{product?.ten_sp}</h6>
                <div className="product__price">{formattedAmount}</div>
            </div>
        </Link>
    );
};

export default TrendItem;