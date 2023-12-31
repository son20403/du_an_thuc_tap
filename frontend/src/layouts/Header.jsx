import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import $ from "jquery";
import { toast } from "react-toastify";
const navLink = [
  {
    title: "Trang Chủ",
    to: "/",
  },
  {
    title: "Cửa hàng Áo",
    id: "#ao",
    to: "/#type=ao",
  },
  {
    title: "Cửa hàng Quần",
    id: "#quan",
    to: "/#type=quan",
  },
  {
    title: "Cửa hàng",
    to: "/shop",
  },
  {
    title: "Liên hệ",
    to: "/about",
  },
];
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState([]);
  useEffect(() => {
    $(".search-switch").on("click", function () {
      $(".search-model").fadeIn(400);
    });

    $(".search-close-switch").on("click", function () {
      $(".search-model").fadeOut(400, function () {
        $("#search-input").val("");
      });
    });
    $(".canvas__open").on('click', function () {
      $(".offcanvas-menu-wrapper").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay, .offcanvas__close").on('click', function () {
      $(".offcanvas-menu-wrapper").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });
  }, []);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('user', null)
    setInfoUser(null)
    toast.success("Đăng xuất thành công")
    navigate('/')
  };
  useEffect(() => {
    setInfoUser(JSON.parse(localStorage.getItem('user')))
  }, [location.pathname]);
  return (
    <div>
      <Search></Search>
      <div className="offcanvas-menu-overlay" />
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>
        <ul className="offcanvas__widget">
          <li>
            <span className="icon_search search-switch" />
          </li>
          <li>
            <a href="#">
              <span className="icon_bag_alt" />
            </a>
          </li>
        </ul>
        <div className="offcanvas__logo">
          <Link to={'/'}>
            <img src="../src/assets/img/logo.png" />
          </Link>
        </div>
        <div id="mobile-menu-wrap" >
          <div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{}}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a><nav className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: 'none' }}>
            <ul>
              {navLink.map((nav) =>
                !nav.id ? (
                  <li key={nav.title}>
                    <NavLink
                      to={nav.to}
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "#ca1515" : "",
                        };
                      }}
                      className={({ active }) =>
                        active ? "!text-red-700" : ""
                      }
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                ) : (
                  <li key={nav.id}>
                    <NavLink to={nav.to}>{nav.title}</NavLink>
                  </li>
                )
              )}
            </ul>
          </nav></div>

        </div>
        <div className="offcanvas__auth">

        </div>
      </div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <Link to={'/'}>
                  <img src="../src/assets/img/logo.png" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  {navLink.map((nav) =>
                    !nav.id ? (
                      <li key={nav.title}>
                        <NavLink
                          to={nav.to}
                          style={({ isActive, isPending }) => {
                            return {
                              color: isActive ? "#ca1515" : "",
                            };
                          }}
                          className={({ active }) =>
                            active ? "!text-red-700" : ""
                          }
                        >
                          {nav.title}
                        </NavLink>
                      </li>
                    ) : (
                      <li key={nav.id}>
                        <NavLink to={nav.to}>{nav.title}</NavLink>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  {infoUser ? (
                    <div className=" flex items-center gap-2">
                      <Link to="#" onClick={handleLogout}>
                        Đăng xuất
                      </Link>
                      <Link to="/update">
                        <img
                          src={infoUser?.profile_photo_path || infoUser?.profile_photo_url}
                          alt="User Avatar"
                          className="user-avatar"
                          style={{
                            width: '25px',
                            height: '25px',
                            borderRadius: '100%'
                          }}
                        />
                      </Link>
                      {
                        infoUser?.check_admin === 1 &&
                        <a href="http://127.0.0.1:8000/admin/danh-muc">
                          Dashboard
                        </a>
                      }
                    </div>
                  ) : (
                    <>
                      <Link to="/login">Đăng nhập</Link>
                      <Link to="/register">Đăng ký</Link>

                    </>
                  )}
                </div>
                <ul className="header__right__widget">
                  <li>
                    <span className="icon_search search-switch" />
                  </li>
                  <li>
                    <Link to={'/cart'}>
                      <span className="icon_bag_alt" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
