import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);

    const {resId} = useParams();   
 //   In React, the useParams hook is part of the React Router library and is used to access parameters from the URL in a React component.

    console.log(resId)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
    const data = await fetch(MENU_URL + resId)
     
     const json = await data?.json();
     console.log(json);
     setresInfo(json?.data);
    }

    if(resInfo === null) return <Shimmer />

     const {name, cuisines, cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

      console.log(itemCards);
    // const{id} = itemCards[0]?.card?.info;



    return  (
        <div>
            <h1>{name}</h1> 
            <h1>{cuisines.join(", ")}</h1> 
             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
            + cloudinaryImageId} className="cloudImg"/>
            
            <h1>Menu</h1>

            {itemCards.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} - Rs.{item?.card?.info?.price/100 || item.card.info.defaultPrice/100}</li>
            ))}
            

           

        </div>
    )
}

export default RestaurantMenu;

// Q.why line 20 not written with return ? 
// ans. bcz if we write then initially we put something inside resInfo which is null 