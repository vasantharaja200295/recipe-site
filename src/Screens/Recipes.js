import React from 'react'
import { Link } from 'react-router-dom';

function Recipes() {
  const name = "Pasta"
  return (
    <div>
      <h1>View Pasta</h1>
      <Link to={'/recipes/'+name}>Click to view</Link>
    </div>
  )
}

export default Recipes