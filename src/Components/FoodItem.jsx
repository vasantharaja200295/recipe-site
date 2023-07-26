import React from 'react'
import './FootItem.css' 
import { captialize } from '../functions/subfunctions'
import clock from "../assets/clock.png"



function FoodItem(props) {
  return (
    <div className='FoodCardContainer'>
      <img className='foodImage' src={props.data.image} alt="food"/>
      <div className='lowerContainer'>
        <div className='chip'>
          <h5 className='foodType'>{props.data.dishTypes[0]?captialize(props.data.dishTypes[0]):"Food"}</h5>
        </div>
        <div className='clockContainer'>
          <img  className="clock" src={clock} alt='ready in'/>
          <p className='foodTime'>{props.data.readyInMinutes} Mins</p>
        </div>
      </div>
      <h3 className='title'>{captialize(props.data.title)}</h3>
  </div>
  )
}

export default FoodItem