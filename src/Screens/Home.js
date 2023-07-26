import React, { useEffect, useState } from 'react'
import './Home.css'
import '../Global.css'
import bg_image from '../assets/food_background-transformed.png'
import { Link } from 'react-router-dom'
import next from '../assets/next.png'
import FoodItem from '../Components/FoodItem'
import axios from 'axios'


function Home() {

    const [topRecipes, setTopRecipes] = useState([]);


    const fetchTopRecipes = async () => {

        const temp = localStorage.getItem('topRecipes');
        if(temp){
            setTopRecipes(JSON.parse(temp));
        }else{
            try {

                const response = await axios.get(
                  'https://api.spoonacular.com/recipes/random?apiKey=d0c921905eb148eca448cd8ab07de352&number=9'
                );
                const data = response.data; 
                console.log(data);
                setTopRecipes(data.recipes);

                localStorage.setItem('topRecipes', JSON.stringify(data.recipes));

              } catch (error) {
                console.error('Error fetching recipes:', error.message);
              }
        }

        
      };
      

    useEffect(()=>{
        fetchTopRecipes();
    },[])


  return (
    <div className='HomeContainer'>
        {/* hero section */}
        <div className='HeroSection'>
            <div className='HeroContainer'>
                <h1 className='HeroText'>Find new Recipes and fest your taste buds with <h2 className='logo'>Recipe<span className='logo_second'>Zone</span></h2></h1>
                <h3 className='HeroDes'>Satisfy your cravings with our diverse collection of mouthwatering recipes, expertly curated for food lovers of all levels. From easy weeknight dinners to gourmet delights, our website is your ultimate culinary companion.</h3>
                <div className='ExploreContain'>
                    <Link to='/recipes' className='ExploreBtn'>Explore Recipes</Link>
                    <img src={next} alt='next'/>
                </div>
            </div>
            <img className='HeroImg' src={bg_image} alt='bg_image'/>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        {/* other sections */}
        <div className='DataSection'>
            <div className='TopRecipes'>
                <h1 className='heading'>Top Recipes</h1>
                <div className='FoodContiner'>
                    {
                        topRecipes.map((recipe, key)=>{
                            return(
                                <Link className='FoodItemLinks' key={key} to={"/recipe/"+recipe.id}>
                                    <FoodItem data={recipe}/>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home