import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"

const Body = () => {

    const[listofRestaurants, setlistofRestaurants] = useState([]);

    useEffect(() => {
        fetchdata();
    }, [])

     const fetchdata = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(json); 
            setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         };
  
    return (
        <div className="body">
            <div className="filter">
                <button className="filter_btn"
                onClick={() => {
                    const filterresLists = listofRestaurants.filter((res) => 
                    res.info.avgRating > 4.2 
                    );
                    setlistofRestaurants(filterresLists);
                    console.log(filterresLists);
                }}  
                >Top Rated Restaurants</button>
            </div>

            <div className="res_container" > 
           {
            listofRestaurants.map((restaurant)=>(
                <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
            ))
           }



            </div>
        </div>
    )
}

export default Body