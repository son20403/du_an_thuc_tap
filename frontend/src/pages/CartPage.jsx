import React, { useEffect, useState } from 'react';
import useCurrencyFormat from '../hooks/useCurrencyFormat';
const CartPage = () => {
    const [dataCart, setDataCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const tong_gia = useCurrencyFormat(totalPrice)
    useEffect(() => {
        updateCart();
    }, []);
    useEffect(() => {
        setTotalPrice(getTotalPrice(dataCart));
        setTotalQuantity(getTotalQuantity(dataCart));
    }, [dataCart]);

    function updateCart() {
        const cartData = JSON.parse(sessionStorage.getItem('cart')) || [];
        setDataCart(cartData);
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
                                        <li>Giá <span>{tong_gia}</span></li>
                                    </ul>
                                    <a href="#" className="primary-btn">Thanh toán</a>
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
    const gia_tong = useCurrencyFormat(gia * so_luong);
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
            <td className="cart__total">{gia_tong}</td>
            <td className="cart__close" onClick={() => removeCart(id)}><span className="icon_close" /></td>
        </tr>
    )
}
export default CartPage;