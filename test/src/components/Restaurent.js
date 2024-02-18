
function Restaurent({name,cuisines,locatity,cloudinaryImageId,costForTwo}){
    return(
        <>
       
        <div className="card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
            <div className="para1">
            <h3 className="name">{name}</h3>
            <p className="para"><i className="fa-solid fa-star"></i>
            </p>
            <p className="loc">{cuisines}</p>
            <p className="cost">{costForTwo}</p>
            <p>{locatity}</p>
            
        
        </div>
        </div>
        </>
    )
    }
    export default Restaurent
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    