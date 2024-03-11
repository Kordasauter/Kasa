//composants React
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
//image de flèche
import arrowup from '../../assets/arrow_back_ios-24px_up.svg'
//style
import '../../styles/collapse.scss'

function Collapse({ title, text, open }) {
    const [isOpen, setIsOpen] = useState(open)
    const [initialLoad, setInitialLoad] = useState(true)
    useEffect(() => {}, [isOpen])
    return (
        <div className="collapse">
            <div
                className="collapseHeader"
                onMouseDown={(e) => {
                    e.preventDefault()
                    setIsOpen(!isOpen)
                    setInitialLoad(false)
                }}
            >
                <div className="collapseTitle">{title}</div>
                <img
                    src={arrowup}
                    alt="fleche"
                    id="arrow"
                    className={isOpen ? 'fleche--up' : 'fleche'}
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

export default Collapse
