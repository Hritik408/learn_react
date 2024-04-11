import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
    console.log(data);
    return(
        <div className="text-center p-4 bg-gray-50 w-6/12 shadow-lg mx-auto my-4 ">
            <div className="flex justify-between">
            <span className="font-mono font-bold">{data.title}({data.itemCards.length})</span>   
            <span>⬇️</span>   
            </div>
          
        </div>
    )
}

export default RestaurantCategory;
