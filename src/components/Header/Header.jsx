//composants React
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
//image do logo
import logo from '../../assets/logo.svg'
//style
import '../../styles/header.scss'

function Header(props) {
    const location = useLocation()
    return (
        <header>
            <img src={logo} alt="logo Kasa" />
            <nav>
                {location.pathname === '/' ? (
                    <div>
                        <Link className="active" to="/Kasa">
                            Accueil
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/">Accueil</Link>
                    </div>
                )}
                {location.pathname === '/about' ? (
                    <div>
                        <Link className="active" to="/about">
                            À propos
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/about">À propos</Link>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header
