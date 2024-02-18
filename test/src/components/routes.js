import {
    createBrowserRouter,
} from "react-router-dom";
import Menu from "../components/Menu";
import App from "../App";
import Layout from "../components/Layout";
import Body from "../Body";

import Cart from "./Cart";
export const appRoutes = createBrowserRouter([{
    path: "/",
    element: < Layout / > ,
    children: [{

            path: "home/",
            element: < Body / > ,
        },
        {
            path: "menu/:id",
            element: < Menu / >
        },
        {
            path: "cart/",
            element: < Cart / >
        },

    ]
}, ])