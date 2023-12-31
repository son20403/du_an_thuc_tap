import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import DetailProductPage from "../pages/DetailProductPage";
import CartPage from "../pages/CartPage";
import ShopPage from "../pages/ShopPage";
import CheckoutPage from "../pages/CheckoutPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ListPostSearch from "../pages/ListProductSearch";
import ForgotPassword from "../pages/ForgotPassword";
import ListProductCategory from "../pages/ListProductCategory";
import UpdateUserPage from "../pages/UpdateUserPage";
import UpdatePasswordPage from "../pages/UpdatePasswordPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: (<App></App>),
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/detail/:slug',
                element: <DetailProductPage></DetailProductPage>
            },
            {
                path: '/cart',
                element: <CartPage></CartPage>
            },
            {
                path: '/shop',
                element: <ShopPage></ShopPage>
            },
            {
                path: '/checkout',
                element: <CheckoutPage></CheckoutPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/category/:slug',
                element: <ListProductCategory></ListProductCategory>
            },
            {
                path: '/search',
                element: <ListPostSearch></ListPostSearch>
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '/update',
                element: <UpdateUserPage></UpdateUserPage>
            },
            {
                path: '/update-password',
                element: <UpdatePasswordPage></UpdatePasswordPage>
            },
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

export default router