import React from "react"
import ReactDOM  from "react-dom/client";


const heading = React.createElement("h1", {id: "heading"}, "hello hritik i'm here")

const parent = React.createElement("div", {id: "parent"},[ 
    React.createElement("div", {id: "child"},[
    React.createElement("h1", {}, "hey, i'm h1 tag"),
    React.createElement("h2", {}, "hey, i'm h5 tag"),
    ]), 
     React.createElement("div", {id: "child2"},[
     React.createElement("h1", {}, "hey, i'm h3 tag"),
     React.createElement("h2", {}, "hey, i'm h4 tag"),
        ])]);
    

const rot = ReactDOM.createRoot(document.getElementById("root"));

rot.render(parent);