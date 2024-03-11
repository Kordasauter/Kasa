//composants React
import React from 'react'
import { useParams } from 'react-router-dom'
//liste des logements
import logementList from '../../datas/logements.json'
//Gallery de photos
import Gallery from '../Gallery/Gallery'
//liste des tags
import Tagscontainer from '../TagsContainer/Tagscontainer'
//notes du logement
import Rating from '../Rating/Rating'
//texte dépliant
import Collapse from '../Collapse/Collapse'
//404
import NotFound from '../NotFound/NotFound'
//style
import '../../styles/logement.scss'

function Logement(props) {
    const param = useParams()
    const logement = logementList.find((logement) => logement.id === param.id)

    if (!logement) return <NotFound />

    return (
        <main className="logement">
            <Gallery
                photos={logement.pictures}
                size={logement.pictures.length}
                title={logement.title}
            />
            <section className="infoLogement">
                <div className="blocInfo">
                    <h2 className="title">{logement.title}</h2>
                    <div className="location">{logement.location}</div>
                    <Tagscontainer tagList={logement.tags} />
                </div>
                <div className="blocInfo left">
                    <div className="infoLogement host">
                        <div className="name">{logement.host.name}</div>
                        <img src={logement.host.picture} alt="hôte"></img>
                    </div>
                    <Rating note={logement.rating} />
                </div>
            </section>
            <section className="descriptionEquipement">
                <Collapse title="Description" text={logement.description} />
                <Collapse
                    title="Equipements"
                    text={
                        <ul>
                            {logement.equipments.map((equipement, index) => (
                                <li key={'equipment' + index}>{equipement}</li>
                            ))}
                        </ul>
                    }
                />
            </section>
        </main>
    )
}

export default Logement
