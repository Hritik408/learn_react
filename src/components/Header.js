import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo_container"> 
                <img className="img" src={LOGO_URL}/> 
            </div>
            <div className="nav_items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
               </ul>
            </div>
        </div>
    )
}

export default Header;