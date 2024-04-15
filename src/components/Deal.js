const Deal = (props) => {
    const{data} = props;
    // console.log(data)
    const{header, couponCode, offerLogo} = data.info;
    return(
        <div className="mr-12 flex mb-3 ">
            <div className="mr-3">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" + offerLogo}
            className="w-9 h-9" />
            </div>
            <div>
            <div className="font-bold">{header}</div>
            <div className=" font-mono text-gray-700">{couponCode}</div>
            </div>
           
        </div>
    )
}

export default Deal;