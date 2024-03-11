//composant React
import React from 'react'
//style
import '../../styles/card.scss'

function Card({ title, cover }) {
    return (
        <div className="card">
            <div className="fadding">
                <img src={cover} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    )
}

export default Card
