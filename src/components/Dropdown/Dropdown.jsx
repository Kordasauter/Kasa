import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../../styles/dropdown.scss'
// import arrowdown from '../../assets/arrow_back_ios-24px 2_down.svg'
import arrowup from '../../assets/arrow_back_ios-24px_up.svg'

function Dropdown({ title, text, open }) {
    const [isOpen, setIsOpen] = useState(open)
    const [initialLoad, setInitialLoad] = useState(true)
    useEffect(() => {}, [isOpen])
    return (
        <div className="dropdown">
            <div className="dropdownHeader">
                <div className="dropdownTitle">{title}</div>
                <img
                    src={arrowup}
                    alt="fleche"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        setIsOpen(!isOpen)
                        setInitialLoad(false)
                        e.currentTarget.className === 'fleche--up'
                            ? (e.currentTarget.className = 'fleche')
                            : (e.currentTarget.className = 'fleche--up')
                    }}
                />
            </div>
            {isOpen ? (
                <div className="textContainer">
                    <div className="text">{text}</div>
                </div>
            ) : !initialLoad ? (
                <div className="textContainer--hidden">
                    <div className="text">{text}</div>
                </div>
            ) : (
                <div className="textContainer--init">
                    <div className="text">{text}</div>
                </div>
            )}
        </div>
    )
}

export default Dropdown
