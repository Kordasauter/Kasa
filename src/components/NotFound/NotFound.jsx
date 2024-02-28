import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/notFound.scss'

const NotFound = () => {
    return (
        <div className="notFound">
            <div></div> {/* placeholder */}
            <p className="errorCode">404</p>
            <p className="errorText">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <div className="link">
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
            <div></div> {/* placeholder */}
        </div>
    )
}

export default NotFound
