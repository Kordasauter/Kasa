import React from 'react';
import '../../styles/footer.scss'
import logo from '../../assets/LOGOwhite.svg'

function Footer(props) {
    return (
        <div className='footer'>
            {/* <div>Logo</div> */}
            <img src={logo} alt='logo Kasa' />
            <div>© 2020 Kasa. All rights reserved</div>
        </div>
    );
}

export default Footer;