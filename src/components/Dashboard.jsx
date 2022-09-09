import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Dashboard = () => {

    // initial state hooks
    const [category, setCategory] = useState("people")

    const [id, setId] = useState()

    const navigate = useNavigate()

    const runSearch = (event) => {
        event.preventDefault();
        navigate(`/${category}/${id}`)
        // URL params added to endpoints


    }


    return (
        <div className={"container text-light"}>
        <div className={"mt-5 row text-start"}>

        <fieldset>

            <form onSubmit={runSearch}><span className={"mx-3 fs-3"}>Search for:</span>

                <select onChange={(event) => setCategory(event.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>

                <span className={"mx-2"}>ID: </span>
                <input onChange={(event) => setId(event.target.value)} type="number" name="" id="" />
                {/* pass user input to call back*/}

                <button className={"btn btn-primary mx-3"}>Search</button>

            </form>
        </fieldset>
        </div>
        </div>
    )
}

export default Dashboard

