import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const[btn_name, setbtn_name] = useState("login");

    return (
        <div className="header">
            <div className="logo_container"> 
                <img className="img" src={LOGO_URL}/> 
            </div>
            <div className="nav_items">
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                    <li>Cart</li>
                    <button className="in_out"
                    onClick={() => (
                        btn_name === "login" ? setbtn_name("logout") : setbtn_name("login")
                    )}
                    >{btn_name}</button>
               </ul>
            </div>
        </div>
    )
}

export default Header;

// Q.why Link use not anchor tag ?
// ans. link is used because we not want to re-load whole page and we only want to specific element which is used to render. if we use anchor tag then whole
// page will be render