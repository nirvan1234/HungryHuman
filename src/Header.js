import React from "react";
import './App.css';
import {Link} from "react-router-dom";



const Header = () =>(
    <div className="header">
    <h1>
      Food Villa
    </h1>
    <div className="nav_item">
          <ul>
           <Link to="/"><li>Home</li></Link> 
           <Link to="/about"><li>About</li></Link>
            <li>Search</li>
          </ul>
  
        </div>
    </div>
  )

export default Header;