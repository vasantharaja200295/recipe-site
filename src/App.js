import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Screens/Home';
import Recipe from './Screens/Recipe';
import Recipes from './Screens/Recipes';
import { useEffect, useState } from 'react';

function App() {
  const[init, setInit] = useState(0);

  useEffect(() => {
    if(!init){
      localStorage.clear();
      setInit(1);
    }
  }, []);

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipe/:id' element={<Recipe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
