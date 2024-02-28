import React from 'react'
import '../../styles/footer.scss'
import logo from '../../assets/LOGOwhite.svg'

function Footer(props) {
    return (
        <div className="footer">
            <img src={logo} alt="logo Kasa" />
            <div className="copyright">© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer
