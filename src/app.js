import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {

    const [userName, setuserName] = useState();
    // const [setuserName] = useState();


    useEffect(() => {
        // const data = {
        //     name : ""
        // }
        // setuserName(data.name);
    }, [])

    return (
        <UserContext.Provider value = {{loggedInfo : userName, setuserName }}>
        {/* //  <UserContext.Provider value = {{ setuserName }}> */}

        <div className="app">
            {/* <UserContext.Provider value = {{loggedInfos : "Elon musk"}}> */}
            <Header />
            {/* </UserContext.Provider> */}

            <Outlet />  
        </div>

        </UserContext.Provider>

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