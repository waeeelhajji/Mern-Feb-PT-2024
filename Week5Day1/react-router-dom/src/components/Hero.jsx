import React, { useEffect } from 'react'
import Axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const Hero = () => {
    const { HeroNumber, hero } = useParams()

    const nav = useNavigate()
    console.log(hero, HeroNumber)
    useEffect(() => {
        Axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${HeroNumber}.json`)
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
                nav("/error")
            })

    }, [])





    return (
        <fieldset>
            <legend>Hero.jsx</legend>
            <h3>HEROES 🦸‍♂️🦸‍♀️🦹🦹‍♀️</h3>
        </fieldset>
    )
}

export default Hero