import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const CategoryHomeItem = ({ cate, index }) => {
    const [dataProducts, setDataProducts] = useState([]);
    const totalProducts = dataProducts?.filter((pro) => pro.ma_loai === cate?.id).length
    useEffect(() => {
        setDataProducts(products)
    }, [products]);
    return (
        <div key={cate.id} className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="categories__item set-bg" data-setbg={`./src/assets/img/categories/category-${index + 2}.jpg`}>
                <div className="categories__text">
                    <h4>{cate.ten_danh_muc}</h4>
                    <p>{totalProducts} sản phẩm</p>
                    <Link to={`/category/${cate.slug}`}>Xem ngay</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryHomeItem;