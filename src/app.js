import React from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            {/* <div><Header /></div> */}
            {/* <div><Body /></div> */}

            <Header />
            <Outlet />  
            {/* outlet is filled with children which are below as element */}
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
        ],
       errorElement: <Error />,
    },
    // {
    //     path: "/about",
    //     element: <About />,
    //     errorElement: <Error />,
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />,
    // },
]);

 const root = ReactDOM.createRoot(document.getElementById("roots"));

 root.render(<RouterProvider router={app} />)

//  root.render(<AppLayout />)