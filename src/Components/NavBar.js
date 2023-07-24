import React from 'react'
import './NavBar.css'
import menu from '../assets/menu.png'

function NavBar() {
  return (
    <div className='navContainer'>
        <h2 className='logo'>Recipe<span className='logo_second'>Zone</span></h2>
        <div className="nav-logo">
            <div id= "logo">
                <h2 className='logo'>Recipe<span className='logo_second'>Zone</span></h2>
            </div>
        </div>
        <input type="checkbox" id="nav_check" hidden/>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/recipes">Recipes</a></li> 
            </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
            <div>
                <img src = {menu} alt='menu' className='menu'/>
            </div>
        </label>
        
    </div>
  )
}

export default NavBar