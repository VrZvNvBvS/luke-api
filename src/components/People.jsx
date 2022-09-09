import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const People = () => {

    const [character, setCharacters] = useState()

    const {peoples_id} = useParams()

    // encapsulate "side effect"
    useEffect(() => {

        axios.get(`https://swapi.dev/api/people/${peoples_id}`)
            .then(response => {
                console.log(response.data)
                setCharacters(response.data)
                // change in data passed to callback
            })
            .catch(error => console.log(error))

    }, [peoples_id])

    return (
        <fieldset className={'text-light text-start'}>
            {
                (character) ?
                    <div className="card bg-dark text-light">
                        <h1 className={"text-center text-info mb-5 mt-5"}><b><strong>{character.name}</strong></b></h1>
                        <h2><b>Gender:</b> <span className={"text-info"}>{character.gender}</span></h2>
                        <h2><b>Height:</b> <span className={"text-info"}>{character.height}</span> cm</h2>
                        <h3><b>Mass: </b> <span className={"text-info"}> {character.mass}</span> kg</h3>
                        <h3><b>Hair Color: </b> <span className={"text-info"}>{character.hair_color} </span></h3>
                        <h3><b>Skin Color:</b> <span className={"text-info"}>{character.skin_color}</span></h3>
                    </div> : <h1 className="container text-center mt-4">
                <a href="https://bit.ly/3RtgIq0" className={"text-danger"}>These aren't the droids you are looking for.....</a>
                <img src="https://bit.ly/3RtgIq0" className="img-fluid mt-5" alt="Obi-Wan"/>
                </h1>

            }
        </fieldset>
    )
}

export default People