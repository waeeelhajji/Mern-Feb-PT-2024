import React from 'react'

const SecondeComponets = (props) => {
    console.log("this is props =====>", props.someData)
    
    const someAnimals = props.someData

  return (
      <div>
          <h1>hello SecondeComponents.jsx</h1>

          {JSON.stringify(props.someData)}
          <h2>Here are some of my animals : {someAnimals.map(eachAnimal => {
              return <li>{eachAnimal}</li>
          })}</h2>
      
      </div>
  )
}

export default SecondeComponets