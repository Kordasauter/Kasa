import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.scss'
import logo from '../../assets/logo.svg'

function Header(props) {
    return (
        <div className='header'>
            <img src={logo} alt='logo Kasa'/>
            <nav>
                <div><Link to="/">Accueil</Link></div>
                <div><Link to="/about">À propos</Link></div>
            </nav>
        </div>
    );
}

export default Header;