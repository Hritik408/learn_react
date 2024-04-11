import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const[btn_name, setbtn_name] = useState("login");
      const status = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">

            <div className="logo_container"> 
                <img className="w-36" src={LOGO_URL}/> 
            </div>

            <div className="nav_items">
                <ul className="flex m-11">
                    <li className="mx-3">
                    Status: {status ? "✅" : "❌" }
                    </li>
                    <li className="mx-3"> <Link to="/">Home</Link> </li>
                    <li className="mx-3"> <Link to="/about">About</Link> </li>
                    <li className="mx-3"> <Link to="/contact">Contact</Link> </li>
                    <li className="mx-3"> <Link to="/grocery">Grocery</Link></li>
                    <li className="mx-3"> <Link to="/cart">Cart</Link> </li>

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