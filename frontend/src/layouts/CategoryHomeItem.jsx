import React from 'react';
import { Link } from 'react-router-dom';
import useGetAllProducts from '../hooks/useGetAllPost';

const CategoryHomeItem = ({ cate, index }) => {
    const { dataProducts } = useGetAllProducts()
    const totalProducts = dataProducts?.filter((pro) => pro.ma_the_loai === cate?.id).length
    return (
        <div key={cate.id} className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="categories__item set-bg" data-setbg={`./src/assets/img/categories/category-${index + 2}.jpg`}>
                <div className="categories__text">
                    <h4>{cate.ten_the_loai}</h4>
                    <p>{totalProducts} sản phẩm</p>
                    <Link to={`/category/${cate.ten_the_loai_slug}`}>Xem ngay</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryHomeItem;