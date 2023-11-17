import React, { useEffect } from 'react';

const ProductItem = () => {
    useEffect(() => {
        const setBgElements = document.querySelectorAll('.set-bg');
        setBgElements.forEach(element => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
    }, []);
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
            <div className="product__item">
                <div className="product__item__pic set-bg" data-setbg="./src/assets/img/product/product-1.jpg">
                    <div className="label new">New</div>
                    <ul className="product__hover">
                        <li><a href="./src/assets/img/product/product-1.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                        <li><a href="#"><span className="icon_bag_alt" /></a></li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6><a href="#">Buttons tweed blazer</a></h6>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;