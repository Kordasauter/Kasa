import React from 'react';
import Banner from '../Banner/Banner';
import AProposDropdown from '../AProposDropdown/AProposDropdown';
import '../../styles/dropdownContainer.scss'

function APropos(props) {
    return (
        <div>
             <Banner/>
             <div className='dropdownContainer'>
                <AProposDropdown />
                <AProposDropdown />
                <AProposDropdown />
                <AProposDropdown />
             </div>
            
        </div>
    );
}

export default APropos;