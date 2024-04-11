import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const[resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const deta = await fetch(MENU_URL + resId);

        const json = await deta.json();

        setresInfo(json?.data);
    }

    return resInfo;
}

export default useRestaurantMenu;