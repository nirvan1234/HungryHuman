import React from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemCard = (props) => {
    console.log("propsOne",props);
    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }

    return (
        <div class="container">
  <div class="row">
    <div class="col"> {
        props.items.map(
            (i) =>
                <div class="card">
                    <div class="card-header">
                    {i.card.info.name}
                    </div>
                    <div class="card-body">
                    <p class="card-text">{i.card.info.description}</p>
                        <h5 class="card-title">Rs: {i.card.info.defaultPrice}</h5>
                        <button onClick={() =>handleAddItem(i)}>
                        <a class="btn btn-primary">ADD</a>
                        </button>
                    </div>
                </div>
        )
    } 
    </div>
    </div>
    </div>
    )
}

export default ItemCard;


{/* <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
</div>
</div> */}