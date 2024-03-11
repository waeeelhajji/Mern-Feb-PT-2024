
import { useState } from 'react';
import './App.css';
import Ninja from './components/Ninja';

function App() {

  const ninja = {
    name: "Raphael",
    powerLevel: 100
  };
   const ninja1 = {
    name: "Donatello",
    powerLevel: 500
  };


  //? Create State for this Components
  const [num, setNum] = useState(0)
  //!---------------------

  const [ninjaOBJ,setNinjaObj] = useState(ninja1)
  

  //? Increment Function 
  // const incrementNum = () => {
  //   console.log("clicked")
  //   setNum(num + 1)
    
  // }

  //? NinjaLevelUP 
  const ninjaLevelUP = () => {
    
    setNinjaObj({...ninjaOBJ, powerLevel:ninjaOBJ.powerLevel +1})
    
    
    console.log(ninjaOBJ)
  }




  return (
    <fieldset className='App'>
      <legend> App.js</legend>
      <h1>Name : {ninja.name} </h1>
      <h2>Power Level : {ninja.powerLevel}</h2>

      <Ninja myNinja={ninjaOBJ} />
      this is the numBer : {num}
      <p></p>
      

      <button onClick={() => {
    console.log("clicked")
    setNum(num + 1)
    
      }}>Click Me</button>
<p></p>

      <button   onClick={ninjaLevelUP}>NINJA level UP </button>


    </fieldset>
  );
}

export default App;
