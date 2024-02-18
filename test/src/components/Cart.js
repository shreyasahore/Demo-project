
import { useContext, useState } from "react"
import contextuser from "../appUtility/userContext"

function Cart(){
    let {cardData}=useContext(contextuser);
    console.log(cardData);
    
   
    return(
        <>
       
       
        <link rel="stylesheet" type="text/css" href="./style1.css"/>
      
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/>
        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
    
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
      
   
        <div class="container mt-5 p-3 rounded cart"/>
            <div className="row no-gutters"/>
                <div className="col-md-8"/>
                    <div class="product-details mr-2"/>
                        <div className="d-flex flex-row align-items-center"><i class="fa fa-long-arrow-left"></i><span class="ml-2">Continue Shopping</span></div>
                        
                        <h6 class="mb-0">Shopping cart</h6>
                        <div class="d-flex justify-content-between"><span>You have 4 items in your cart</span>
                            <div class="d-flex flex-row align-items-center"><span class="text-black-50">Sort by:</span>
                                <div class="price ml-2"><span class="mr-1">price</span><i class="fa fa-angle-down"></i></div>
                            </div>
                        </div>

                    {

                        cardData.map((nemuItem)=>{
                                return(
                        <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                            <div class="d-flex flex-row hellos">
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${nemuItem.itemImage}`}/>
                         <div class="ml-2"><span class="font-weight-bold d-block"> 
                                {nemuItem.itemName}
                                </span></div>
                          
                            </div>
                         <div class="d-flex flex-row align-items-center"><span class="d-block"></span><span class="d-block ml-5 font-weight-bold">
                            {nemuItem.itemPrice/100}
                         </span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                         
                           
                        </div>

                         )
                        })
                        
                        }                      
                              
                       
    <script src="httpms://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

                        
   </>
    )
    }
    export default Cart