//composant React
import React from 'react'
//style
import '../../styles/footer.scss'
//logo
import logo from '../../assets/LOGOwhite.svg'

function Footer(props) {
    return (
        <footer>
            <img src={logo} alt="logo Kasa" />
            <div className="copyright">© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer
