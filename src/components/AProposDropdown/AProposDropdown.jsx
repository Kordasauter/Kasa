import React from 'react';
import '../../styles/dropdown.scss'
import arrowdown from '../../assets/arrow_back_ios-24px 2_down.svg'
// import arrowup from '../../assets/arrow_back_ios-24px_up.svg'

function AProposDropdown({title}) {
    return (
        <div className='dropdown'>
        <div className='dropdownHeader' >
            <div>{title}</div>
            <img src={arrowdown} alt='fleche' />
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
    );
}

export default AProposDropdown;