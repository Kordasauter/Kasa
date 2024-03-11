//composants React
import React from 'react'
import { Link } from 'react-router-dom'
//style
import '../../styles/notFound.scss'

function NotFound(props) {
    return (
        <section className="notFound">
            <p className="errorCode">404</p>
            <p className="errorText">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <div className="link">
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </section>
    )
}

export default NotFound
