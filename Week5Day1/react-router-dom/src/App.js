
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cool from './components/Cool';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <h1>REACT Routing 🗺️🗾</h1>

      {/* <a href="/cool"> 😎😎😎</a> */}
      <Link to="/cool">here is our cop with Link</Link>

      {/* THEATER STAGE */}
      <Routes>

        {/* ACT 1 - Home */}
        <Route path="/home" element={
          <>
        <Home /> 
        <Cool />
        </>
        } />
        
        {/* ACT 2 Cool  */}
        <Route path="/cool" element={<Cool />} />

        {/* ACT 3 Hero */}
        <Route path='/hero/:HeroNumber' element={<Hero />} />


        {/* ERROR catch all routes  */}
        <Route path="/error" element={<h3>404 not found</h3>} />

      </Routes>
      
    </div>
  );
}

export default App;
