import { CDN_URL } from "../utils/constants";

const ItemsList = ({items}) => {
    // const{items} = props;
    // console.log(items)
    return (
       <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between">

            <div>
           <div className="py-2">
           {/* <img src={CDN_URL + item.card.info.imageId} className="w-28 h-28 " /> */}

            <span className="text-lg text-gray-900 font-mono py-3">{item.card.info.name}</span>
            <span className="text-zinc-600" > ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          
          <div className="">
            <div className="absolute">
          <button className="bg-black text-white rounded-lg font-semi-bold ">Add+</button>
          </div>
          <img src={CDN_URL + item.card.info.imageId} className="w-36 h-24 rounded-lg" />

          </div>

          </div>

        ))}
       </div>
    )
}

export default ItemsList;