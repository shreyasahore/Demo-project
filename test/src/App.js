import {RouterProvider,Outlet} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
//import Body from "./components/Body"
import './App.css'
import Footer from "./components/Footer"
import Menu from "./components/Menu"

import {appRoutes} from "./components/routes";
function App(){
 
    return(
      <>
 <RouterProvider router={appRoutes}/>
   </>
 )
         
}
export default App






// function App() {

//   // State to store count value
//   const [count, setCount] = useState(0);

//   // Function to increment count by 1
//   const incrementCount = () => {
//     // Update state with incremented value
//     setCount(count + 1);
//   };
//   return (
//     <div className="app">
//       <button onClick={incrementCount}>Click Here</button>
//       {count}
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
  
 




