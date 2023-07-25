import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { foodData } from '../Dummy'
import Error from '../Components/Error'
import './Recipe.css'
import Ingredient from '../Components/Ingredient'



function Recipe() {
    let {id} = useParams()
    const [data, setData] = useState({})
    const [flag, setFlag] = useState(false)

    const findData = () =>{
      foodData.forEach((item)=>{
          if (item.id===parseInt(id)){
            setFlag(true)
            setData(item)
            console.log(data);
            return
          }
          else{
             setFlag(false)
          }
      })
    }

    useEffect(()=>{
        findData()
    });

  return (
    <div className='MainContainer'>
      <h1>{data.title}</h1>
      {
        flag?(
          <div className='RecipeContainer'>
            <img className='RecipeImage' src={data.image} alt={data.title}/>
            <div className='RightContainer'>
              <h1>Instructions:</h1>
              <p>{data.instructions}</p>
              <div className='RecipeIngredients'>
              {
                data.extendedIngredients.map((item)=>{
                  return(
                    <Ingredient key={item.id} ingre={item}/>
                  )
                })
              }
              </div>
            </div>
          </div>
        ):(
            <Error/>
        )
      }
      <Ingredient/>
    </div>
  )
}

export default Recipe