// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
// import { CLOUDINARY_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);  // useRestMenu provides the data of the whole page which are required


    if(resInfo === null) return <Shimmer />

     const {name, cuisines, cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

      // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

      const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
       c?.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
      )

       console.log(categories)

    return  (
        <div>
            <h1 className="text-center font-bold my-7 text-xl">{name}</h1> 
            <h1 className="text-center font-semibold my-3">{cuisines.join(", ")}</h1> 
             {/* <img src={CLOUDINARY_URL + cloudinaryImageId} className="h-52 w-48"/> */}
                   {/* categories accordians */}
                  { categories.map((categri) => (
                    <RestaurantCategory key={categri.card.card.title}  data = {categri?.card?.card}/>
                   ))}
           
        </div>
    )
}

export default RestaurantMenu;

// Q.why line 20 not written with return ? 
// ans. bcz if we write then initially we put something inside resInfo which is null 


  {/* <h1>Menu</h1>

            {itemCards.map((item) => (
                <li key={item.card.info.id}> {item.card.info.name} - Rs.{item?.card?.info?.price/100 || item.card.info.defaultPrice/100} </li>
            ))} */}