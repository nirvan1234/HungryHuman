import React from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const params = useParams();
    console.log("parma", params)
    return(
        <div>
            <h1>Restaurant Menu</h1>
        </div>

    )

}

export default RestaurantMenu;