import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import '../../styles/cardsContainer.scss'
import logementList from '../../datas/logements.json'

function CardsContainer(props) {
    return (
        <div className="cardContainer">
            {logementList.map((loge) => (
                <Link key={'lo' + loge.id} to={'/logement/' + loge.id}>
                    <Card key={loge.id} title={loge.title} cover={loge.cover} />
                </Link>
            ))}
        </div>
    )
}

export default CardsContainer
