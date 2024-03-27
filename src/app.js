import React from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <div className="app">
            <div><Header /></div>
            <div><Body /></div>

        </div>
    )
}

 const root = ReactDOM.createRoot(document.getElementById("roots"));

 root.render(<AppLayout />)