import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
// import { LIST_REST_URL } from "../utils/constants"

const Body = () => {


  const[filterRestro, setfilterRestro] = useState([]);
  const[listofRestaurants, setlistofRestaurants] = useState([]);

  const [searchText, setsearchText ]  = useState("")

  // const RestoVeg = withVegLabel(RestaurantCard);
  // const RestaurantCardPromoted = withPromotedCard(RestaurantCard);


   console.log(listofRestaurants);

   useEffect(() => {
       fetchdata();
   }, [])

  
   const fetchdata = async () => {
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
           const json = await data.json();
           console.log(json); 
           setfilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }; 
          const status = useOnlineStatus();

          if(!status) 
          return( <h1>  You looks like offline please check internet connection !!! </h1> )


            const search = () => {
              const filterRest = listofRestaurants.filter((res) => (
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            ))
            setfilterRestro(filterRest);
            }

            const rating = () => {
              const filterresLists = listofRestaurants.filter((res) => 
              res.info.avgRating > 4.2 
              );
              setfilterRestro(filterresLists);
            }

    

    return  (listofRestaurants.length === 0) ? <Shimmer /> : (

        <div className="body">

            <div className="flex m-4 ">

              <div className="search">
                <input type="text"
                 className="bg-pink-100 rounded-md mr-2" 
                 placeholder="Search Restaurant"
                 value={searchText}
                 onChange={(e) => (   
                    setsearchText(e.target.value)  // if we something new type then value(41) is change
                 )} /> 

                <button className=" bg-yellow-300 px-3 rounded-xl mr-3 " onClick={search} > Search </button>
              </div>
 

                <button className="bg-red-200 mx-4 px-3 rounded-md "
                onClick={rating}  
                >Top Rated Restaurants</button> 

            </div>


            <div className="flex flex-wrap" > 
           {
            filterRestro.map((rest)=>(
            <Link to={"restaurants/" + rest.info.id} key={rest.info.id}> 
           {/* { rest.info.isOpen ? (<RestaurantCardPromoted ResData = {rest} />) : (<RestaurantCard ResData = {rest} />) }  */}
           {<RestaurantCard resData = {rest} />}
             </Link>    
        
            ))
           }

            </div>
        </div>

    )

}

export default Body