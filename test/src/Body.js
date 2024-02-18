 
import { useEffect,useState } from "react"
import Restaurent from "./components/Restaurent";
import {useContext} from "react";
import {Link } from "react-router-dom"
import contextUser from "./appUtility/userContext";

function Body() {
   
        const [resData, setResData] = useState([])
        const [userName,setUserName]=useState("hello")
        
        async function fetchData(){
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.4684649&lng=76.2708152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            const data =  await response.json();
            let resList  = data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
            console.log(resList)
            setResData(resList)
        }
        
        useEffect(()=>{
            fetchData(); 
        },[])

return(
    <>
    <div className="card_padding">
        <div className="card_ul">
            <div style={{
                margin:"10px"

            }

            }>
                {/* <input type="text" name="userName" value={user.userName} onChange={(e)=>{
                    setUser(
                        {
                            ...user,
                            userName: e.target.value
                        }
                    )
                }
                }/> */}
                  {/* <input type="text" name="userEmail" value={user.userEmail} onChange={(e)=>{
                    setUser(
                        {
                            ...user,
                            userEmail: e.target.value
                        }
                    )
                }
                }/> */}
            </div>
        {
            resData.map((restaurantData,i)=>{
                return<Link key={i} to={`/menu/${restaurantData.info.id}`}>
                    <Restaurent{...restaurantData.info}/>
                </Link>
            }

            )
        }
        </div>
    </div>
    </>
)
    }
   
export default Body


