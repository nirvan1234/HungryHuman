import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Accordion from "./components/Accordion";

const RestaurantMenu = () =>{
    const params = useParams();
    const [resMenu, setResMenu] = useState([]);
    // const [showItem, setShowItem] = useState(false);
    const [showIndex, setShowIndex] = useState(0);
    const useUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.488186&lng=73.934762&restaurantId="+params.resId.slice(1)+"&catalog_qa=undefined&submitAction=ENTER";

    async function  callApi(){
        const res =  await fetch(useUrl);
        const jsonRes = await res.json();
        const filteredRes = jsonRes?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (item)  => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        setResMenu(filteredRes);
    }

    
    useEffect(() =>{
        callApi();
    },[])



    return(
        <div>
            <h1>Restaurant Menu</h1>
            {
                resMenu.map((item , index) =>

                <Accordion key={item.card.card.title} showItem={index === showIndex ? true: false} restaurant ={item} setShowIndex={() => setShowIndex(index)}/>
                
                )
            }

        </div>

    )

}



export default RestaurantMenu;