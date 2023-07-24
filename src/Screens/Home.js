import React from 'react'
import './Home.css'
import '../Global.css'
import bg_image from '../assets/food_background-transformed.png'
import { Link } from 'react-router-dom'
import next from '../assets/next.png'
import FoodItem from '../Components/FoodItem'

function Home() {
  return (
    <div className='HomeContainer'>
        {/*  */}
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
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home