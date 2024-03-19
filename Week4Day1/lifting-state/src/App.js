
import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [people, setPeople] = useState([
    {
      name: "Mario",
      height: 7,
      color:"red"
    },
    {
      name: "Luigi",
      height: 8,
      color: "green"
    },
    {
      name: "Princess Peach",
      height: 6,
      color:"pink"
    }
  ])


  const AddPersonToPeople = (param) => {
    console.log(param)
    //update state
    setPeople([...people,param])
  } 


  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h1>Lifting State 🏋️‍♂️</h1>
      {JSON.stringify(people)}
      <hr />

      <Form functionProps={AddPersonToPeople} />

      <Display people={people} />

    </fieldset>
  );
}

export default App;
