import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const params = useParams();
    const [resMenu, setResMenu] = useState([]);

    console.log("parma", params)

    const useUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.488186&lng=73.934762&restaurantId="+params.resId.slice(1)+"&catalog_qa=undefined&submitAction=ENTER";

    console.log("useUrl", useUrl)
    
    async function  callApi(){
        const res =  await fetch(useUrl);
        const jsonRes = await res.json();

        setResMenu(jsonRes?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);



    }

    console.log(resMenu);
    
    useEffect(() =>{
        callApi();

    },[])

    return(
        <div>
            <h1>Restaurant Menu</h1>
            {
                resMenu.map((item) =>
                <h3>{item.card.info.name}</h3>)
            }
        </div>

    )

}

export default RestaurantMenu;