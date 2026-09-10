import { createBrowserRouter } from "react-router";
import Homepage from "./pages/root/HomePage";
import RoutePage from "./pages/root/RoutePage";
import SuccessPage from "./pages/root/SuccessPage";
import FeedBack from "./pages/root/FeedBack";
import NotFound from "./pages/root/NotFound";
import Layout from "./Layout";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Login from "./pages/auth/Login";
import AuthLayout from "./pages/auth/AuthLayout";

export const routes = createBrowserRouter([
    {
        path: "auth", Component: AuthLayout, children: [
            { Component: Login, path: "login", index: true, },
            { Component: SignUp, path: "signup" },
            { Component: ForgotPassword, path: "forgot-password" },
            { Component: VerifyEmail, path: "verify-email" },
        ]
    },
    {
        path: "/",
        Component: Layout,
        children:
            [
                { Component: Homepage, index: true },
                { Component: RoutePage, path: "route" },
                { Component: SuccessPage, path: "success" },
                { Component: FeedBack, path: "feedback" },

            ]
    },

    { Component: NotFound, path: "*" }
]);