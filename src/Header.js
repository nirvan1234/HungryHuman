import React from "react";
import './App.css';
import {Link} from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";



const Header = () =>{

  const cartItem = useSelector((store) => store.cart.items)

  console.log("cart", cartItem);

  return(

    <div className="header">
    <div className="header_container">
      <img 
        className="header_logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/011/405/724/small/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg"
      />        
    </div>
  <div className="nav_item">
      <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/about'>Search</Link>
      </li>
      <li>
      <Link to='/cart'>Cart {cartItem.length}</Link>
      </li>
        </ul>

      </div>
  </div>
  )


  }

export default Header;