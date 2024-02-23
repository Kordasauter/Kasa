import React from 'react'
import Banner from '../Banner/Banner'
import AProposDropdown from '../AProposDropdown/AProposDropdown'
import bannerImage from '../../assets/aboutBanner.jpg'
import '../../styles/dropdownContainer.scss'
import aboutList from '../../datas/about.json'

function APropos(props) {
    return (
        <div>
            <Banner imgURL={bannerImage} />
            <div className="dropdownContainer">
                {aboutList.map(({ id, title, text }) => (
                    <AProposDropdown key={id} title={title} text={text} />
                ))}
            </div>
        </div>
    )
}

export default APropos
