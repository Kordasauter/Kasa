import React from 'react'
//import { useState } from 'react'
import Banner from '../Banner/Banner'
import Dropdown from '../Dropdown/Dropdown'
import bannerImage from '../../assets/aboutBanner.jpg'
import '../../styles/dropdownContainer.scss'
import aboutList from '../../datas/about.json'

function APropos(props) {
    //const [dropdownstate, updateDropdown] = useState(false)
    return (
        <div>
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
        </div>
    )
}

export default APropos
