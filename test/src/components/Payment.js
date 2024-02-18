// function Payment(){

// return(
//     <>
//     <head>
//     <meta charset="utf-8"/>
// 	<meta name ="viewpoert" content="width=device-width,intial-scale=1.0"/>
//     <title>SWIGGY menu</title>
   
//     <link rel="stylesheet" type="text/css" href="./style1.css"/>
  
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/>

   
	
// 	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>

// 	<link rel="preconnect" href="https://fonts.googleapis.com"/>
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
//     </head>
// <body>
//     <div class="container mt-5 p-3 rounded cart">
//         <div className="row no-gutters">
//             <div className="col-md-8">
//                 <div class="product-details mr-2">
//                     <div className="d-flex flex-row align-items-center"><i class="fa fa-long-arrow-left"></i><span class="ml-2">Continue Shopping</span></div>
                    
//                     <h6 class="mb-0">Shopping cart</h6>
//                     <div class="d-flex justify-content-between"><span>You have 4 items in your cart</span>
//                         <div class="d-flex flex-row align-items-center"><span class="text-black-50">Sort by:</span>
//                             <div class="price ml-2"><span class="mr-1">price</span><i class="fa fa-angle-down"></i></div>
//                         </div>
//                     </div>
//                     <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
//                         <div class="d-flex flex-row"><img class="rounded" src="images/download (2).jpg" width="40"/>
//                             <div class="ml-2"><span class="font-weight-bold d-block">pizza</span><span class="spec">Hungry Point</span></div>
//                         </div>
//                      <div class="d-flex flex-row align-items-center"><span class="d-block"></span><span class="d-block ml-5 font-weight-bold">Rs220</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
//                     </div>
//                     <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
//                         <div class="d-flex flex-row"><img class="rounded" src="./images/download (3).jpg" width="40"/>
//                             <div class="ml-2"><span class="font-weight-bold d-block">Spring roll</span><span class="spec">Hot billion </span></div>
//                         </div>
//                         <div class="d-flex flex-row align-items-center"><span class="d-block"></span><span class="d-block ml-5 font-weight-bold">Rs80</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
//                     </div>

//                     <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
//                         <div class="d-flex flex-row"><img class="rounded" src="./images/download (4).jpg" width="40"/>
//                             <div class="ml-2"><span class="font-weight-bold d-block">Noodles</span><span class="spec">Dynamic</span></div>
//                         </div>
//                         <div class="d-flex flex-row align-items-center"><span class="d-block"></span><span class="d-block ml-5 font-weight-bold">Rs150</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
//                     </div>
                    
//                     <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
//                         <div class="d-flex flex-row"><img class="rounded" src="./images/download (5).jpg" width="40"/>
//                             <div class="ml-2"><span class="font-weight-bold d-block">Dossa&nbsp;</span><span class="spec">Arc food</span></div>
//                         </div>
//                         <div class="d-flex flex-row align-items-center"><span class="d-block"></span><span class="d-block ml-5 font-weight-bold">Rs199</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
//                     </div>
//                 </div>
//             </div>

//             <div class="col-md-4">
//                 <div class="payment-info">
//                     <div class="d-flex justify-content-between align-items-center"><span>Card details</span><img className="rounded" src="./images/download.jpg" width="30"/></div><span class="type d-block mt-3 mb-1">Card type</span><label class="radio"> <input type="radio" name="card" value="payment" checked/> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png"/></span> </label>

// <label class="radio"> <input type="radio" name ="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png"/></span> </label>

// <label class="radio"> <input type="radio" name ="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png"/></span> </label>


// <label class="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png"/></span> </label>
//                     <div><label class="credit-card-label"> on card</label><input type="text" class="form-control credit-inputs" placeholder=""/></div>
//                     <div><label class="credit-card-label">Card number</label><input type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000"/></div>
                    
//                     <div class="row">
//                         <div class="col-md-6"><label class="credit-card-label">Date</label><input type="text" class="form-control credit-inputs" placeholder="12/24"/></div>
//                         <div class="col-md-6"><label class="credit-card-label">CVV</label><input type="text" class="form-control credit-inputs" placeholder="342"/></div>
//                     </div>
//                     <hr class="line"/>
//                     <div class="d-flex justify-content-between information"><span>Subtotal</span><span>Rs550.00</span></div>
//                     <div class="d-flex justify-content-between information"><span>Shipping</span><span>Rs20.00</span></div>
//                     <div class="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>Rs570.00</span></div><button class="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>Rs580.00</span><span>Checkout<i class="fa fa-long-arrow-right ml-1"></i></span></button></div>
//             </div>
//         </div>
//     </div>


// <script src="httpms://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
// </body>
// </>
// )
// }
// export default Payment