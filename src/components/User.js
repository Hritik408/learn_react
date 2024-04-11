import { useState } from "react";
const User = (props) => {
    // const{res} = props;
    const[count, setcount] = useState(0);
    const[method] = useState("pi");
    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <button onClick={() => {
            setcount(count + 1)
            }} >CountInc</button>

            <h3>{method}</h3>
            <h1>Name:  {props.res}</h1>
            <h2>Place: Muradnagar</h2>
        </div>
    )
}

export default User;