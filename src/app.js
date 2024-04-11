import React, { lazy, Suspense } from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />  
        </div>
    );
};

const app = createBrowserRouter([   // inside the array are configurations
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />, 
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
             path: "/restaurants/:resId",  // ":" is used for different id without this it will not work
             element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <Error />,
            },
            {
                path: "/grocery",
                element:<Suspense fallback = {<h1>Loading....</h1>}> <Grocery /></Suspense>,
            }
        ],
       errorElement: <Error />,
    },
]);

 const root = ReactDOM.createRoot(document.getElementById("roots"));

 root.render(<RouterProvider router={app} />)

//  root.render(<AppLayout />)