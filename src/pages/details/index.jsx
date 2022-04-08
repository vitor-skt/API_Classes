import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {

    const params = useParams()
    console.log(params)

    return (
        <>
            <h1>Pagina Details</h1>
        </>
    )
}

export default Details