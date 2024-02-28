import React from 'react'
//Bannière
import Banner from '../Banner/Banner'
import bannerImage from '../../assets/aboutBanner.jpg'
//Menu déroulant
import Dropdown from '../Dropdown/Dropdown'
//Contenu des menus déroulants
import aboutList from '../../datas/about.json'

import '../../styles/aPropos.scss'

function APropos(props) {
    return (
        <div className="aPropos">
            <div></div> {/* placeholder */}
            <Banner imgURL={bannerImage} />
            <div className="dropdownContainer">
                {aboutList.map(({ id, title, text }) => (
                    <Dropdown
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                        open={false}
                    />
                ))}
            </div>
            <div></div> {/* placeholder */}
        </div>
    )
}

export default APropos
