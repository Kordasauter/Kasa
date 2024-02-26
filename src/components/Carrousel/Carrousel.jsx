import React from 'react'
import '../../styles/carrousel.scss'
import { useState } from 'react'
import leftArrow from '../../assets/LeftArrow.svg'
import rightArrow from '../../assets/RightArrow.svg'

function Carrousel({ photos, size, title }) {
    const [index, setIndex] = useState(0)
    return (
        <div className="carrousel">
            <div className="button previous">
                <img
                    className="arrow"
                    src={leftArrow}
                    onClick={() =>
                        index <= 0 ? setIndex(0) : setIndex(index - 1)
                    }
                    alt="bouton précédent"
                />
            </div>
            <img src={photos[index]} alt={title} />
            <div className="compteurPhoto">
                {index + 1}/{size}
            </div>
            <div className="button next">
                <img
                    className="arrow"
                    src={rightArrow}
                    onClick={() =>
                        index >= size - 1
                            ? setIndex(size - 1)
                            : setIndex(index + 1)
                    }
                    alt="bouton suivant"
                />
            </div>
        </div>
    )
}

export default Carrousel
