import React from 'react'

const ShowAnimals = (props) => {
    const {allMyAnimals} = props


  return (
      <fieldset>
          <legend>ShowAnimals.jsx</legend>
          <h1>All Animals List</h1>
          {
              allMyAnimals.map((elem,idx) => {
                  return (
                     
                       <li key={idx}>
                          {elem}
                      </li>
                  )
              })
          }
      </fieldset>
  )
}

export default ShowAnimals