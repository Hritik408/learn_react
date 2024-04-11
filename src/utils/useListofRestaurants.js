import { useEffect, useState } from "react";
import { LIST_REST_URL } from "./constants";

const useListofRestaurants = () => {
        
    const[listofRestaurants, setlistofRestaurants] = useState([]);
 
     useEffect(() => {
         fetchdata();
     }, [])
 
    
     const fetchdata = async () => {
         const data = await fetch(LIST_REST_URL);
             const json = await data.json();
             console.log(json); 
             setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          }; 
    
          return listofRestaurants;
}

export default useListofRestaurants;