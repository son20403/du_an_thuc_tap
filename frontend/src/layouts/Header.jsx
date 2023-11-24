import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import $ from "jquery";
import "../func/main";

const navLink = [
  {
    title: "Trang Chủ",
    to: "/",
  },
  {
    title: "Thời Trang Nam",
    id: "#men",
    to: "/#men",
  },
  {
    title: "Thời Trang Nữ",
    id: "#women",
    to: "/#women",
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
  useEffect(() => {
    $(".search-switch").on("click", function () {
      $(".search-model").fadeIn(400);
    });

    $(".search-close-switch").on("click", function () {
      $(".search-model").fadeOut(400, function () {
        $("#search-input").val("");
      });
    });
  }, []);
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
              <span className="icon_heart_alt" />
              <div className="tip">2</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon_bag_alt" />
              <div className="tip">2</div>
            </a>
          </li>
        </ul>
        <div className="offcanvas__logo">
          <a href="./index.html">
            <img src="./src/assets/img/logo.png" alt />
          </a>
        </div>
        <div id="mobile-menu-wrap" />
        <div className="offcanvas__auth">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <a href="./index.html">
                  <img src="./src/assets/img/logo.png" alt />
                </a>
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
                  {!isLoggedIn ? (
                    <>
                      <Link to={"/login"}>Login</Link>
                      <Link to={"/register"}>Register</Link>
                    </>
                  ) : null}
                </div>
                <ul className="header__right__widget">
                  <li>
                    <span className="icon_search search-switch" />
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                      <div className="tip">2</div>
                    </a>
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
