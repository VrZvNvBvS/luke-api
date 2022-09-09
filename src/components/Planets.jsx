import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = () => {

    const [planets, setPlanets] = useState()

    const { planets_id } = useParams()

    useEffect(() => {

        axios.get(`https://swapi.dev/api/planets/${planets_id}`)
            .then(response => {
                console.log(response.data)
                setPlanets(response.data)
            })
            .catch(error => console.log(error))
    }, [planets_id])
    return (
        <fieldset className={'text-light text-start'}>
            {
                (planets) ?
                    <>
                        <h1 className={"mb-5 mt-5 text-success text-center"}><strong>{planets.name}</strong></h1>
                        <h2><b>Climate: </b> <span className={"text-success"}>{planets.climate}</span></h2>
                        <h2><b>Terrain: </b> <span className={"text-success"}>{planets.terrain}</span></h2>
                        <h2><b>Surface Water: </b> <span className={"text-success"}>{planets.surface_water}</span></h2>
                        <h2><b>Population: </b><span className={"text-success"}>{planets.population}</span></h2>
                        
                    </> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Planets