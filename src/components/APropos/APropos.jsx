import React from 'react';
import Banner from '../Banner/Banner';
import AProposDropdown from '../AProposDropdown/AProposDropdown';
import bannerImage from '../../assets/aboutBanner.jpg'
import '../../styles/dropdownContainer.scss'

function APropos(props) {
    return (
        <div>
             <Banner imgURL={bannerImage} />
             <div className='dropdownContainer'>
                <AProposDropdown title="Fiabilité"/>
                <AProposDropdown title="Respect"/>
                <AProposDropdown title="Service"/>
                <AProposDropdown title="Sécurité"/>
             </div>
            
        </div>
    );
}

export default APropos;