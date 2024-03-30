import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {

    const[listofRestaurants, setlistofRestaurants] = useState([]);     //  useState(reslist) if we want a mock data
     const[filterRestro, setfilterRestro] = useState([]);     //  useState(reslist) if we want a mock data

     const [searchText, setsearchText ]  = useState("")

     console.log("body render");  // every time when we press the keyword in serch_restaurnt then body render print bcz each time when press it re-render the component

    useEffect(() => {
        fetchdata();
    }, [])

   
    const fetchdata = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(json); 
            setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         }; 


    return  (listofRestaurants.length === 0) ? <Shimmer /> : (

    // return (

        <div className="body">

            <div className="filter">

              <div className="search">
                <input type="text"
                 className="ser_input" 
                 placeholder="Search Restaurant"
                 value={searchText}
                 onChange={(e) => (   
                    setsearchText(e.target.value)  // if we something new type then value(41) is change
                 )}
                 />

                <button className="ser_btn" 
                      onClick={() => {
                        // console.log(searchText);
                        const filterRest = listofRestaurants.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ))
                        setfilterRestro(filterRest);
                      }}
                > Search </button>
              </div>


                <button className="filter_btn"
                onClick={() => {
                    const filterresLists = listofRestaurants.filter((res) => 
                    res.info.avgRating > 4.2 
                    );
                    setfilterRestro(filterresLists);
                    console.log(filterresLists);
                }}  
                >Top Rated Restaurants</button>
            </div>


            <div className="res_container" > 
           {
            filterRestro.map((rest)=>(
            <Link to={"restaurants/" + rest.info.id} key={rest.info.id}> <RestaurantCard resData = {rest} /> </Link>    
        
            ))
           }

            </div>
        </div>

    )

}

export default Body