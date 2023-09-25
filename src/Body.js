import './App.css';
import React, { useEffect , useState} from 'react';
import RestrauntCard from './RestrauntCard';


const Body =() =>{
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [restaurantEach , setRestaurantEach] = useState();
  const [searchText,setSearchText] = useState("");

  useEffect(() =>{
    getData();
  },[])
  
  async function getData(){
  
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.488186&lng=73.934762&page_type=DESKTOP_WEB_LISTING");
  
    const json = await data.json();
  

    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  
  }

  const FilterRest = () =>{
    console.log("showsearchRest")
    if(searchText.length > 0){
      const showsearchRest = allRestaurant.filter((item) =>  item.data?.name.includes(searchText))
      console.log("showsearchRest two",showsearchRest)
      setFilteredRestaurant(showsearchRest)

    }else{
     setFilteredRestaurant(allRestaurant)
    }
  
  }

  return(
    <>
    <input
          type="text"
          value={searchText}
          placeholder="Type Restraunt Name"
          onChange={(e) => setSearchText(e.target.value)}
          
          />
          <button
          onClick={() =>
          FilterRest()
          }>
            Search
          </button>
    {
    filteredRestaurant.map((item, index) =>{
      return (
        <div key={index}>
          
          <RestrauntCard restaurantNew={item}/>
        </div>
         
      )
    })
   }
    </>
   
   
  )
}



export default Body;
