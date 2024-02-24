import React from 'react'
import { useParams } from 'react-router-dom'
import Carrousel from '../Carrousel/Carrousel'
import Tagscontainer from '../TagsContainer/Tagscontainer'
import logementList from '../../datas/logements.json'
import Rating from '../Rating/Rating'
import Dropdown from '../Dropdown/Dropdown'
import '../../styles/logement.scss'

function Logement(props) {
    const param = useParams()
    const logement = logementList.find((logement) => logement.id === param.id)

    const equipements = (
        <ul>
            {logement.equipments.map((equipement, index) => (
                <li key={'equipment' + index}>{equipement}</li>
            ))}
        </ul>
    )
    return (
        <div className="logement">
            <Carrousel />
            <div className="horizontal space-between ">
                <div className="vertical">
                    <h2 className="title">{logement.title}</h2>
                    <div className="location">{logement.location}</div>
                </div>
                <div className="horizontal host">
                    <div className="name">{logement.host.name}</div>
                    <img src={logement.host.picture} alt="hôte"></img>
                </div>
            </div>
            <div className="horizontal space-between gap30">
                <Tagscontainer tagList={logement.tags} />
                <Rating note={logement.rating} />
            </div>
            <div className="horizontal space-between descriptionEquipement">
                <Dropdown title="Description" text={logement.description} />
                <Dropdown title="Equipements" text={equipements} />
            </div>
        </div>
    )
}

export default Logement
