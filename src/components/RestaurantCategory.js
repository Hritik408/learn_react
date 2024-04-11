import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
    // console.log(data);

    const [showItems, setshowItems] = useState(false);

   const handleClick = () => {
    setshowItems(!showItems);
   }

    return(
        <div>
        <div className="text-center p-4 bg-gray-50 w-6/12 shadow-lg mx-auto my-4 ">
            {/* Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>

            <span className="font-mono font-bold">{data.title}({data.itemCards.length})</span>   
            <span>⬇️</span>  

            </div>

            {showItems && <ItemsList items = {data.itemCards}/> } 

            {/* {<ItemsList items = {data.itemCards}/> }  */}

        </div>
        </div>
    )
}

export default RestaurantCategory;

// ItemsList is the ui layer
