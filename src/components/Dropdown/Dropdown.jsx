import React from 'react'
import { useState } from 'react'
import '../../styles/dropdown.scss'
import arrowdown from '../../assets/arrow_back_ios-24px 2_down.svg'
// import arrowup from '../../assets/arrow_back_ios-24px_up.svg'

function Dropdown({ title, text, open }) {
    const [isOpen, setIsOpen] = useState(open)
    return (
        <div className="dropdown">
            <div className="dropdownHeader">
                <div>{title}</div>
                <img
                    src={arrowdown}
                    alt="fleche"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {isOpen && <p>{text}</p>}
        </div>
    )
}

export default Dropdown
