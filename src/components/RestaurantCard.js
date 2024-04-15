import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const{ resData } = props;
    const{ cuisines, avgRatingString, costForTwo } = resData?.info;

      const{loggedInfo} = useContext(UserContext);

      return (
          <div className="p-3 m-2 w-48 bg-green-100 h-auto rounded-lg">
              <img alt="res_img" className="w-52 h-44 rounded-lg"  src={CDN_URL + resData.info.cloudinaryImageId} />

              <h3 className="font-bold py-2 text-md font-serif">{resData.info.name}</h3>
              <h3>{cuisines.join(", ")}</h3>
              <h3>{avgRatingString}</h3>
              <h3>{costForTwo}</h3>
              <h2 className="font-mono">{loggedInfo}</h2>
          </div>
      )
  }

//   export default RestaurantCard;

//  export const withPromotedCard = (RestaurantCard) => {
//     return(props) => {
//       return(
//         <div> 
//             <label>Veg</label>
//             <RestaurantCard {...props}/> 
//         </div>
//       )
//     }
// }

export default RestaurantCard;