import React from 'react'
import { useParams } from 'react-router-dom'
// import { useState } from 'react'
// import { useEffect } from 'react'
import Carrousel from '../Carrousel/Carrousel'
import Tagscontainer from '../TagsContainer/Tagscontainer'
import logementList from '../../datas/logements.json'
import Rating from '../Rating/Rating'
import Dropdown from '../Dropdown/Dropdown'
import NotFound from '../NotFound/NotFound'
import '../../styles/logement.scss'

function Logement(props) {
    const param = useParams()
    const logement = logementList.find((logement) => logement.id === param.id)

    if (!logement) return <NotFound />

    return (
        <div className="logement">
            <div></div> {/* placeholder */}
            <div>
                <Carrousel
                    photos={logement.pictures}
                    size={logement.pictures.length}
                    title={logement.title}
                />
                <div className="horizontal">
                    <div className="vertical">
                        <h2 className="title">{logement.title}</h2>
                        <div className="location">{logement.location}</div>
                        <Tagscontainer tagList={logement.tags} />
                    </div>
                    <div className="vertical left">
                        <div className="horizontal host">
                            <div className="name">{logement.host.name}</div>
                            <img src={logement.host.picture} alt="hôte"></img>
                        </div>
                        <Rating note={logement.rating} />
                    </div>
                </div>
                <div className="descriptionEquipement">
                    <Dropdown title="Description" text={logement.description} />
                    <Dropdown
                        title="Equipements"
                        text={
                            <ul>
                                {logement.equipments.map(
                                    (equipement, index) => (
                                        <li key={'equipment' + index}>
                                            {equipement}
                                        </li>
                                    )
                                )}
                            </ul>
                        }
                    />
                </div>
            </div>
            <div></div> {/* placeholder */}
        </div>
    )
}

export default Logement
