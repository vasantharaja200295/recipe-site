import React from 'react'
import './FootItem.css'


function FoodItem(props) {
  return (
  <div className='FoodCardContainer'>
        <img className='foodImage' src={props.data.image} alt="food"/>
        <h3>{props.data.title}</h3>
        <h5>Ready in {props.data.readyInMinutes}</h5>
    </div>
    
  )
}

export default FoodItem