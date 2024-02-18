import {Link} from "react-router-dom";
import { useContext } from "react";
import contextUser from "../appUtility/userContext";

function Header()
    {
        let {cardData}=useContext(contextUser)
      
        
        return(
            <>
            <div className="nav">
        <div className="container">
            <div className="row nav-bar">
                <div className="logo">
                    <img src="images/logo.png " alt="cake"/>
                 
                </div>
                <div className="menu">
                    <Link to="/home" className="menu-item">
                         <i className="fa-solid fa-house"></i>Home</Link>
                    <a href="#About Us" className="menu-item">About Us</a>
                    <a href="#Contact-Us" className="menu-item"><i className="fa-solid fa-phone"></i>Contact-us</a>
                   <Link to="/cart" className="menu-item">
                     <i className="fa-solid  fa-cart-shopping"></i>Cart-{cardData.length}</Link> 
                   
                </div>
            </div>
        </div>
        </div>
            </>
        )
    }
    export default Header
