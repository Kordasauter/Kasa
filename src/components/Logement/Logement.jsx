import React from 'react'
import { useParams } from 'react-router-dom'
import Carrousel from '../Carrousel/Carrousel'
import Tagscontainer from '../TagsContainer/Tagscontainer'
import logementList from '../../datas/logements.json'
import AProposDropdown from '../AProposDropdown/AProposDropdown'
import '../../styles/logement.scss'

function Logement(props) {
    const param = useParams()
    // console.log(logementList.find((logement) => logement.id === param.id))
    const logement = logementList.find((logement) => logement.id === param.id)
    return (
        <div className="logement">
            <Carrousel />
            <div className="horizontal space-between ">
                <div className="vertical">
                    <div className="title">{logement.title}</div>
                    <div className="location">{logement.location}</div>
                </div>
                <div className="horizontal host">
                    <div className="name">{logement.host.name}</div>
                    <img src={logement.host.picture} alt="hôte"></img>
                </div>
            </div>
            <div className="horizontal space-between">
                {/* Liste */}
                <Tagscontainer tagList={logement.tags} />
                {/* fonction à faire */}
                <div>{logement.rating}</div>
            </div>
            <div className="horizontal space-between descriptionEquipement">
                {/* dropdown */}
                {/* <div>{logement.description}</div> */}
                <AProposDropdown
                    title="Description"
                    text={logement.description}
                />
                {/* dropdown */}
                {/* <div>{logement.equipments}</div> */}
                <AProposDropdown
                    title="Equipements"
                    text={logement.equipments}
                />
            </div>
        </div>
    )
}

export default Logement
