import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Screens/Home';
import Recipe from './Screens/Recipe';
import Recipes from './Screens/Recipes';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/:name' element={<Recipe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
