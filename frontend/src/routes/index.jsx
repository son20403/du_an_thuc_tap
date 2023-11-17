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
                path: '/detail',
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
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

export default router