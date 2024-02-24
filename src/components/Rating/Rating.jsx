import React from 'react'
import activeStar from '../../assets/star-active 3.svg'
import inactiveStar from '../../assets/star-inactive 1.svg'

function Rating({ note }) {
    const range = [1, 2, 3, 4, 5]
    return (
        <div>
            {range.map((rangeNum, index) =>
                note >= rangeNum ? (
                    <img
                        key={'rate' + index}
                        src={activeStar}
                        alt="étoile rempli"
                    />
                ) : (
                    <img
                        key={'rate' + index}
                        src={inactiveStar}
                        alt="étoile vide"
                    />
                )
            )}
        </div>
    )
}

export default Rating
