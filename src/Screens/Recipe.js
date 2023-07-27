import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Recipe.css'
import Ingredient from '../Components/Ingredient'
import axios from 'axios'


function Recipe() {
    let {id} = useParams()
    const [data, setData] = useState({})

    const fetchRecipe = async () => {


          try {

              const response = await axios.get(
                'https://api.spoonacular.com/recipes/'+id+'/information?apiKey=d0c921905eb148eca448cd8ab07de352'
              );
              console.log(response.data)
              setData(response.data)
            } catch (error) {
              console.error('Error fetching recipes:', error.message);
            }
      
    };

    useEffect(()=>{
      fetchRecipe()
    },[]);
  return (
    
    <div className='MainContainer'>
      <h1>{data.title}</h1>
      {
          
          <div className='RecipeContainer'>
            <img className='RecipeImage' src={data.image} alt={data.title}/>
            <div className='RightContainer'>
              <h1>Instructions:</h1>
              <p dangerouslySetInnerHTML={{ __html: data.instructions }}></p> 
              <div className='RecipeIngredients'>
              {
                data.extendedIngredients?(
                  data.extendedIngredients.map((item)=>{
                  return(
                    <Ingredient key={item.id} ingre={item}/>
                  )
                })
                ):(<></>)
              }
              </div>
            </div>
          </div>
      }
      <Ingredient/>
    </div>
  )
}

export default Recipe