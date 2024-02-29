import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../styles/header.scss'
import logo from '../../assets/logo.svg'

function Header(props) {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className="header">
            <img src={logo} alt="logo Kasa" />
            <nav>
                {location.pathname === '/' ? (
                    <div>
                        <Link className="active" to="/">
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
        </div>
    )
}

export default Header
