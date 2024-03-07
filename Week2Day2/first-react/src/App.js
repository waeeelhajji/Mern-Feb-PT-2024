
import './App.css';
import SecondeComponets from "./components/SecondeComponets"

function App() {
  console.log("Hello from App.js")

  const x = 3
  const name = "bob 🎈🎈🎈"
  const animals = ['🦁', "🦒", "🐫", "🐊", "🦓"]


  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 100
  }



  return (
    <div className="App">
      <h1>Welome to React MERN Stack Ninjas</h1>

      <h2> here is x = {x} </h2>
      <h2>the name is  {name} </h2>
      <h2>the name is  {person.favFood} </h2>
      <h2>this  is the person {JSON.stringify(person)} </h2>


      <hr />
      <SecondeComponets someData={animals} />


    </div>
  );
}

export default App;
