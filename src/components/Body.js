import RestaurantCard from "./RestaurantCard"
import { useEffect, useState, useContext } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { REST_URl } from "../utils/constants"
import UserContext from "../utils/UserContext"
// import { LIST_REST_URL } from "../utils/constants"

const Body = () => {


  const[filterRestro, setfilterRestro] = useState([]);
  const[listofRestaurants, setlistofRestaurants] = useState([]);

  const [searchText, setsearchText ]  = useState("")
  // const RestoVeg = withVegLabel(RestaurantCard);
  // const RestaurantCardPromoted = withPromotedCard(RestaurantCard);



   useEffect(() => {
       fetchdata();
   }, [])

  
   const fetchdata = async () => {
       const data = await fetch(REST_URl)
         const json = await data.json();
           console.log(json); 
           setfilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }; 
          const status = useOnlineStatus();

          if(!status) 
          return( <h1>  You looks like offline please check internet connection !!! </h1> )

          if(listofRestaurants.length === 0)  return <Shimmer />


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

       const {logInfo, setuserName} = useContext(UserContext);

    // return (listofRestaurants.length === 0) ? <Shimmer /> :  (
      return (

        <div className="bg-violet-100">

            <div className="flex m-4 ">

              <div className="search">
                <input type="text"
                 className="bg-gray-300 rounded-md mr-2" 
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

            <div>
              <label className="pr-3">userName:</label>              
              <input className= "border-black border pl-2 rounded-lg" 
              value={logInfo}
              onChange={(e) => setuserName(e.target.value)}
              />
            </div>

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