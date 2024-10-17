import './App.css';
import React, { useEffect , useState} from 'react';
import RestrauntCard , {withPromotedLabel} from './RestrauntCard';
import Shimmer from './shimmer';




const Body =() =>{
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [restaurantEach , setRestaurantEach] = useState();
  const [searchText,setSearchText] = useState("");

  useEffect(() =>{
    getData();
  },[])

  const RestaurantCardPromoted = withPromotedLabel(RestrauntCard);
  
  async function getData(){
  
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.488186&lng=73.934762&page_type=DESKTOP_WEB_LISTING");
  
    const json = await data.json();
  
    // console.log(json?.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
    // setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurant(json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  
  }

  const searchFunc = (p)=>{
    setSearchText(p);
    if(p.length > 0){
      const showsearchRest = allRestaurant.filter((item) =>  item.info.name.toLowerCase().includes(p.toLocaleLowerCase()))
      console.log("showsearchRest two",showsearchRest)
      setFilteredRestaurant(showsearchRest)
      console.log("showsearchRest", searchText)
    }else{
      setFilteredRestaurant(allRestaurant)
    }
    
  }


  // useEffect(
  //   () =>{
  //   if(searchText.length > 0){
  //     const showsearchRest = allRestaurant.filter((item) =>  item.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
  //     console.log("showsearchRest two",showsearchRest)
  //     setFilteredRestaurant(showsearchRest)
  //     console.log("showsearchRest", searchText)
  //   }else{
  //     setFilteredRestaurant(allRestaurant)
  //   }
  // }
  // ,[searchText])

  

 

  return <div>
    <div className='search_bar'>
      <input
          type="text"
          value={searchText}
          placeholder="Type Restuarant Name"
          onChange={(e) => searchFunc(e.target.value)}
          className='search_bar_input'
          
          />
         
      </div>
      {
         filteredRestaurant.length === 0?

         (<div>
           <Shimmer />
         </div>):
         (
           <div>
           
           {
           filteredRestaurant.map((item, index) =>{
             return (
               <div className='res_container'
               key={index}>
                 {/* {item.restaurantNew?.info.isOpen ?
                  <RestrauntCard restaurantNew={item} />:
                  <RestaurantCardPromoted restaurantNew={item}/>

                 } */}
                 <RestrauntCard restaurantNew={item} />
               </div>
                
             )
           })
          }
           </div>
          
          
         )
      }
  </div>
  
 
}



export default Body;
