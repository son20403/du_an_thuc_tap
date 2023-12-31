import React, { useEffect, useState } from 'react';
import useCurrencyFormat from '../hooks/useCurrencyFormat';
import { Link } from 'react-router-dom';
const CartPage = () => {
    const [dataCart, setDataCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPriceSale, setTotalPriceSale] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const tong_gia = useCurrencyFormat(totalPrice)
    const tong_gia_sale = useCurrencyFormat(totalPriceSale)
    useEffect(() => {
        updateCart();
    }, []);
    useEffect(() => {
        setTotalPrice(getTotalPrice(dataCart));
        setTotalPriceSale(getTotalPriceSale(dataCart));
        setTotalQuantity(getTotalQuantity(dataCart));
    }, [dataCart]);

    function updateCart() {
        const cartData = JSON.parse(sessionStorage.getItem('cart')) || [];
        setDataCart(cartData);
    }

    function getTotalPriceSale(cart) {
        return cart.reduce((total, item) => total + (item.price - (item.price * item.sale / 100)) * item.quantity, 0);
    }
    function getTotalPrice(cart) {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    function getTotalQuantity(cart) {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    function minusCart(id) {
        const updatedCart = dataCart.map((item) => {
            if (item.id === id) {
                item.quantity--;
                if (item.quantity <= 0) {
                    return null;
                }
            }
            return item;
        }).filter(Boolean); // Filter out marked items
        updateStorage(updatedCart);
    }

    function plusCart(id) {
        const updatedCart = dataCart.map((item) => {
            if (item.id === id) {
                item.quantity++;
            }
            return item;
        });
        updateStorage(updatedCart);
    }

    function removeCart(id) {
        const updatedCart = dataCart.filter((item) => item.id !== id);
        updateStorage(updatedCart);
    }

    function updateStorage(cart) {
        sessionStorage.setItem('cart', JSON.stringify(cart));
        setDataCart(cart);
    }

    return (
        <div>
            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className='text-2xl font-medium mb-10'>Giỏ hàng</h1>
                            <div className="shop__cart__table">
                                {dataCart?.length > 0 ? (
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Giá</th>
                                                <th>Số lượng</th>
                                                <th>Tổng giá</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataCart?.map((item) =>
                                                <CartItem key={item.id}
                                                    item={item} cart={dataCart} updateCart={updateCart}
                                                    minusCart={minusCart} plusCart={plusCart} removeCart={removeCart}
                                                ></CartItem>
                                            )}
                                        </tbody>
                                    </table>

                                ) : (<div className='text-center'>Chưa có sản phẩm nào</div>)}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {dataCart?.length > 0 &&
                                <div className="cart__total__procced">
                                    <h6>Tổng giỏ hàng</h6>
                                    <ul>
                                        <li>Số lượng <span>{totalQuantity}</span></li>
                                        <li>Giá gốc <span>{tong_gia}</span></li>
                                        <li>Tổng giá <span>{tong_gia_sale}</span></li>
                                    </ul>
                                    <Link to={'/checkout'} className="primary-btn">Thanh toán</Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
const CartItem = ({ item, minusCart = () => { }, plusCart = () => { }, removeCart = () => { } }) => {

    const gia = item.price
    const id = item.id
    const so_luong = item.quantity
    const gia_goc = useCurrencyFormat(gia);
    const phan_tram = item?.sale
    const sale = gia * (phan_tram / 100)
    const giam_gia = gia - sale;
    const gia_tong = useCurrencyFormat(gia * so_luong);
    const giam_gia_tong = useCurrencyFormat(giam_gia * so_luong);
    return (
        <tr className='select-none'>
            <td className="cart__product__item flex items-center gap-10 ">
                <img src={item.image} alt={item.name}
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover'
                    }} />
                <div className="cart__product__item__title p-0 m-0">
                    <h6>{item.name}</h6>
                </div>
            </td>
            <td className="cart__price">{gia_goc}</td>
            <td className="cart__quantity ">
                <div className="pro-qty flex items-center gap-10">
                    <span className="dec qtybtn " onClick={() => minusCart(id)}>-</span>
                    <input type="text" value={so_luong} />
                    <span className="inc qtybtn" onClick={() => plusCart(id)}>+</span>
                </div>
            </td>
            <td className=''>
                <span className='flex flex-col px-2'>
                    <span className=" text-gray-400 text-sm m-0 p-0 line-through" >{gia_tong}</span>
                    <span className="cart__total m-0 p-0">{giam_gia_tong}</span>
                </span>
            </td>
            <td className="cart__close" onClick={() => removeCart(id)}><span className="icon_close" /></td>
        </tr>
    )
}
export default CartPage;