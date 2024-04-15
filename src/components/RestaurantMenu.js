import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import Deal from "./Deal";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);  // useRestMenu provides the data of the whole page which are required

      console.log(resInfo);
    const [showIndex, setshowIndex] = useState();


    if(resInfo === null) return <Shimmer />

     const {name, cuisines, cloudinaryImageId, avgRating, totalRatingsString, costForTwoMessage, locality, sla
     } = resInfo?.cards[2]?.card?.card?.info;

    //  console.log(resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
    //  console.log(resInfo?.cards[2]?.card?.card?.info);

    const deals = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

      const{text, imageId} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[13]?.card?.card;
   //  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[13]?.card?.card?.text);

    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

      // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

      const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
       c?.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
      )

      //  console.log(categories)

    return  (
        <div>

                 <div className="flex justify-center items-center mt-3 mr-44">
                  <h1 className="text-center font-bold my-7 text-3xl mr-24 shadow-lg">{name}</h1> 
                </div>

                <div className="border border-gray-400  p-4 bg-gray-50 w-6/12  mx-auto my-4 rounded-lg shadow-2xl flex flex-wrap justify-between mb-8">

                  <div>
                  <div>
                    ⭐ <span className="font-bold">{avgRating}</span>
                    <span className="ml-2 font-bold">({totalRatingsString})</span>
                    <span className="ml-2 font-bold">.    {costForTwoMessage}</span>
                  </div>
                  
                  <span className="text-red-600 ml-2 ">{cuisines}</span>

                  <div>
                    <div className="font-bold ml-5">Outlet :<span className=" ml-3 font-mono text-gray-700 ">{locality}</span></div>
                    <div className="font-bold ml-5">{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</div>
                    
                  </div>
                  </div>

                  <div>       
                 <img src={CDN_URL + cloudinaryImageId} className="w-36 h-32 rounded-lg" />
                  </div>

                </div>
  
                <div className="font-bold justify-between mx-auto text-lg w-6/12">Deals for you</div>

                <div className="border border-gray-400 bg-orange-50 p-4 w-6/12  mx-auto my-4 rounded-lg flex flex-wrap justify-between mb-8">
                
                  <div className="flex-wrap flex">
                    {deals.map((deal) => (
                       <Deal  key={deal.info.description}
                        data = {deal} /> 
                    ))}
                  </div>

                </div>

                <div className="mx-auto w-6/12 text-center">
                ⌛ <span className="font-bold text-xl font-serif text-slate-900">Menu</span> ⌛
                </div>

                <div className="text-center  mx-auto my-3 w-6/12 border bg-slate-200 rounded-lg ">
              
                  <div className="my-2">
                  <input  className=" text-center bg-slate-200"
                   placeholder="Search for dishes" />
                   <span className="">🔍</span>
                  </div>
                  
                </div>

                   {/* categories accordians */}
                  { categories.map((categri, index) => (  // index is provided for each array element
                  // it is controlled component
                    <RestaurantCategory key={categri.card.card.title}  
                    data = {categri?.card?.card}
                    setshowIndex = {(value) => setshowIndex(showIndex === value ?  index : value )}
                    showItems={index === showIndex ? true : false}

                    
                    />
                   ))}
    
           
        <div className="w-6/12 bg-slate-400 text-center mx-auto my-auto  ">
          <div className="flex flex-wrap">
           <div className="ml-3 mr-5 mt-3">
            <img className="w-24 h-20" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" + imageId} />
           </div>
           <div className="font-bold my-5 mt-11 ml-3">{text} </div>

          </div>

          <hr class="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

          
        </div>

        </div>
    )
}

export default RestaurantMenu;
