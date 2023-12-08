import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-7">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <Link to={'/'}><img src="../src/assets/img/logo.png" /></Link>
                            </div>
                            <p></p>
                            <div className="footer__payment">
                                <a href="#"><img src="../src/assets/img/payment/payment-1.png" /></a>
                                <a href="#"><img src="../src/assets/img/payment/payment-2.png" /></a>
                                <a href="#"><img src="../src/assets/img/payment/payment-3.png" /></a>
                                <a href="#"><img src="../src/assets/img/payment/payment-4.png" /></a>
                                <a href="#"><img src="../src/assets/img/payment/payment-5.png" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-5">
                        <div className="footer__widget">
                            <h6>Menu</h6>
                            <ul>
                                <li><a href="#">Về chúng tôi</a></li>
                                <li><a href="#">Bài viết</a></li>
                                <li><a href="#">Liên hệ</a></li>
                                <li><a href="#">Câu hỏi</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="footer__widget">
                            <h6>Tài khoản</h6>
                            <ul>
                                <li><a href="#">Tài khoản của tôi</a></li>
                                <li><a href="#">Giỏ hàng</a></li>
                                <li><a href="#">Thanh toán</a></li>
                                <li><a href="#">Danh sách</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-8">
                        <div className="footer__newslatter">
                            <h6>Liên hệ với chúng tôi</h6>
                            <form action="#">
                                <input type="text" placeholder="Email" />
                                <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                            <div className="footer__social">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-youtube-play" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                                <a href="#"><i className="fa fa-pinterest" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright__text">
                            <p>Copyright ©
                                All rights reserved | This
                                template is made with <i className="fa fa-heart" aria-hidden="true" /> by
                                <a href="https://colorlib.com" >Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;