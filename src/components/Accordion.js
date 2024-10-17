import React ,{useState} from 'react';
import ItemCard from './ItemCard';

const Accordion = ({restaurant , showItem , setShowIndex}) =>{


    console.log("pro", restaurant);

    const openAcc = () =>{
        console.log(showItem);
        setShowIndex();
    }

    return (
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" onClick={openAcc}>
              {restaurant.card.card.title}
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
             {showItem && <ItemCard items={restaurant.card.card.itemCards} />} 
            </div>
          </div>
        </div>


      </div>
    )

}

export default Accordion;