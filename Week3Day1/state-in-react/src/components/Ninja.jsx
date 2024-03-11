import React from 'react'

const Ninja = (props) => {
    
    // console.log(props.myNinja)

    const { myNinja } = props
    
  return (
      <fieldset>
          <legend>Ninja.jsx</legend>

          here is the ninja { JSON.stringify(myNinja)}
    </fieldset>
  )
}

export default Ninja