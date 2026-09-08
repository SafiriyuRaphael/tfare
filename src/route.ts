import { createBrowserRouter } from "react-router";
import Homepage from "./pages/HomePage";
import RoutePage from "./pages/RoutePage";
import SuccessPage from "./pages/SuccessPage";
import FeedBack from "./pages/FeedBack";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children:
            [
                { Component: Homepage, index: true },
                { Component: RoutePage, path: "/route" },
                { Component: SuccessPage, path: "/success" },
                { Component: FeedBack, path: "/feedback" },
            ]
    },
    { Component: NotFound, path: "*" }
]);