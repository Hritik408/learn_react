import { useState } from "react";
import ItemsList from "./ItemsList";

// const RestaurantCategory = ({ data }) => {
    // console.log(data);

    // const [showItems, setshowItems] = useState(false);

//    const handleClick = () => {
//     setshowItems(!showItems);
//    }  ** if RestaurantCategory have own showItems then it is uncontrol component, bcz it is not controled by anyOne 

const RestaurantCategory = ({ data, showItems, setshowIndex}) => {  // now it is control component, bcz showItems are controlled by RestaurantMenu

    // console.log(data)
         // i want if i click on handleClick then my parent variable change 
           const handleClick = () => {  // as soon as i click on new accordian it just set the showIndex from its parents means change the index and all other are collapse
                 setshowIndex();  // after click it call the setShow index which are presesnt in the restMenu line 45
            } 

    return(
        <div>
        <div className="text-center p-4 bg-gray-50 w-6/12 shadow-lg mx-auto my-4 ">
            {/* Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            {/* <div className="flex justify-between cursor-pointer"> */}


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

