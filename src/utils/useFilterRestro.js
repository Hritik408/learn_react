import { useEffect, useState } from "react";
import { LIST_REST_URL } from "./constants";

const useFilterRestro = () => {
        
    const[filterRestro, setfilterRestro] = useState([]);
 
     useEffect(() => {
         fetchdata();
     }, [])
 
    
     const fetchdata = async () => {
         const data = await fetch(LIST_REST_URL);
             const json = await data.json();
             console.log(json); 
             setfilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          }; 
    
          return filterRestro;
}

export default useFilterRestro;