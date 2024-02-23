import React from 'react'
import { useParams } from 'react-router-dom'

const Logement = () => {
    const param = useParams()
    console.log(param)
    return <div>Logement {param.id}</div>
}

export default Logement
