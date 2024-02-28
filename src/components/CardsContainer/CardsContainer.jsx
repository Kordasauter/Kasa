import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../Card/Card'

import logementsList from '../../datas/logements.json'

import '../../styles/cardsContainer.scss'

function CardsContainer(props) {
    return (
        <div className="cardContainer">
            {logementsList.map((loge) => (
                <Link key={'lo' + loge.id} to={'/logement/' + loge.id}>
                    <Card key={loge.id} title={loge.title} cover={loge.cover} />
                </Link>
            ))}
        </div>
    )
}

export default CardsContainer
