import React from 'react'
import '../../styles/dropdown.scss'
import arrowdown from '../../assets/arrow_back_ios-24px 2_down.svg'
// import arrowup from '../../assets/arrow_back_ios-24px_up.svg'

function AProposDropdown({ id, title, text }) {
    return (
        <div className="dropdown">
            <div className="dropdownHeader">
                <div>{title}</div>
                <img src={arrowdown} alt="fleche" />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default AProposDropdown
