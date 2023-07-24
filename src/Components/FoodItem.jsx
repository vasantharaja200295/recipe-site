import React from 'react'
import { foodData } from '../Dummy'
import './FootItem.css'
import { Link } from 'react-router-dom'


function FoodItem(props) {
  return (
    <Link to={"/recipe/"+props.name}>
        <div className='FoodCardContainer'>
        <img className='foodImage' src={foodData.image} alt="food"/>
        <h3>{foodData.title}</h3>
        <h5>Ready in {foodData.readyInMinutes}</h5>
    </div>
    </Link>
    
  )
}

export default FoodItem