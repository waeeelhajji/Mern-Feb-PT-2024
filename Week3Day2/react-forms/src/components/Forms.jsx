import React, { useState } from 'react'
import ShowAnimals from './ShowAnimals'

const Forms = () => {


    // CREATE STATE VARS for this Components / for Inputs
    const [animal, setAnimal] = useState("")
    const [zoo,setZoo] = useState(["🦛", "🐄", "🦆"])



    const createAnimal = (e) => {
        e.preventDefault()
        // console.log("is working")
        console.log(animal)
      
        setZoo([...zoo, animal])
        setAnimal("")
    }
    
    const checkAnimalInZoo = (array) => {
        setAnimal(array)
        if (array.length <= 5)
        {
            console.log(array.length)
            }
        
    }

  return (
      <fieldset>
          <legend>Forms.jsx</legend>
          animal : {JSON.stringify(animal)} <br />
          zoo :  {JSON.stringify(zoo)}
          <p></p>
          <form onSubmit={createAnimal}>
              <div>
                  enter animal emoji : <input onChange={(e)=>checkAnimalInZoo(e.target.value)} value={animal} />
              </div>
              <br />
              {zoo.length <= 5 ? <p style={{ backgroundColor: "red" }} >this is cool</p> : <p style={{ backgroundColor: "blue" }}>the zoo is full please go back another day</p> }
              <button>Create</button>
          </form>
          <ShowAnimals allMyAnimals={zoo} />
      
      </fieldset>
  )
}

export default Forms