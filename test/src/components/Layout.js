import { Provider } from "react";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import contextUser from "../appUtility/userContext";
import {useState} from "react";
import Cart from "./Cart"
function Layout(){
 const[cardData,setCardData]=useState([])
 const cartData={cardData:cardData,setCardData:setCardData}
    
    return(
        <>
        <contextUser.Provider value={cartData}>
        <Header/>
        <Outlet/>
        <Footer/>
        </contextUser.Provider>
                </>
    )
}
export default Layout;