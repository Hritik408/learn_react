import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const{ resData } = props;
    const{ cuisines, avgRatingString, costForTwo } = resData?.info;
      return (
          <div className="res_card">
              <img alt="res_img" className="im"  src={CDN_URL + resData.info.cloudinaryImageId} />

              <h3>{resData.info.name}</h3>
              <h3>{cuisines.join(", ")}</h3>
              <h3>{avgRatingString}</h3>
              <h3>{costForTwo}</h3>
          </div>
      )
  }

  export default RestaurantCard;