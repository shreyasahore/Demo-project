import { useContext, useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import contextUser from "../appUtility/userContext"


function Menu()
{
let {cardData,setCardData}=useContext(contextUser);
const {id}=useParams()
const{user,setUser}=useContext(contextUser)
console.log("user-->",user)
console.log("setUser-->",setUser)
const[menuData, setMenu]=useState([])
const[resInfo, setResInfo]=useState({})
async function fetchResMenu(){
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.4684649&lng=76.2708152&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
    const data = await response.json();
    const menuItems=data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    const resInfo =data.data.cards[0].card.card.info
    setResInfo(resInfo)
    setMenu(menuItems);
}
function setItemCart(itemInfo){
  const cartInfo={
    
    itemName:itemInfo.name,
    itemPrice:itemInfo.price,
    itemImage:itemInfo.imageId
  }
  setCardData([...cardData,cartInfo])
  console.log("final data:->",cardData);
  
}
useEffect(()=>{
    fetchResMenu();
},[])

return(
    <>
    <div className="page">
       <h2>{resInfo.name}</h2>
       <p>{resInfo.cuisines}</p>
       <p>{resInfo.city}</p>

       <h3><b>Recommended ()</b></h3>
       
       {
        menuData.map((nemuItem)=>{
          return(
            <div className="card1">
              <div className="text">
              <i className="fa-regular fa-circle-stop"></i>
              <p>{nemuItem.card.info.name}</p>
              <p> &#8377; {nemuItem.card.info.price/100}</p></div>
              <div className="img">
              <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${nemuItem.card.info.imageId}`}/><br/>
              <button onClick={()=>{
                setItemCart(nemuItem.card.info)
              }}>ADD</button>
                   
              </div>
            </div>  
          )
        })
      
      }
    </div>
  
        </>
    
    
)
}



export default Menu