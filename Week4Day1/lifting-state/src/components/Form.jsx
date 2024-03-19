import React, { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState("")
    const [height, setHeight] = useState(0)
    const [color, setColor] = useState("")

    const { functionProps } = props





    const CreatePerson = (e) => {
        e.preventDefault()
        // console.log("hello from Form")
        const newPerson = {
            name,
            height,
            color
        }
        // console.log(newPerson)
        functionProps(newPerson)
    }




    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <div>
                name: {JSON.stringify(name)} <br />
                height: {JSON.stringify(height)} <br />
                color: {JSON.stringify(color)}
            </div>
            <hr />
            <form onSubmit={CreatePerson}>
                <div>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    Height:
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    Color:
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <button> add to party List 🥳</button>
            </form>



        </fieldset>
    )
}

export default Form