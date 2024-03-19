import React from 'react'

const Display = (props) => {

    const { people } = props;
    console.log(people)



    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {
                people.map((person, i) => {
                    return <div key={i} style={{ backgroundColor: person.color }}>
                        <h3>{person.name}</h3>
                        <p>height: {person.height}</p>
                    </div>
                })

            }
        </fieldset>
    )
}

export default Display