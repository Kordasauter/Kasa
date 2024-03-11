//composants React
import React from 'react'
import { Link } from 'react-router-dom'
//cartes de logements
import Card from '../Card/Card'
//données logements
import logementsList from '../../datas/logements.json'
//style
import '../../styles/cardsContainer.scss'

function CardsContainer(props) {
    return (
        <section className="cardContainer">
            {logementsList.map((loge) => (
                <Link key={'lo' + loge.id} to={'/logement/' + loge.id}>
                    <Card key={loge.id} title={loge.title} cover={loge.cover} />
                </Link>
            ))}
        </section>
    )
}

export default CardsContainer
