//composants React
import React from 'react'
import { useState } from 'react'
//Images des fleches
import leftArrow from '../../assets/LeftArrow.svg'
import rightArrow from '../../assets/RightArrow.svg'
//style
import '../../styles/gallery.scss'

function Gallery({ photos, size, title }) {
    const [index, setIndex] = useState(0)
    return (
        <section className="gallery">
            {/* si une seule image présente, ne pas afficher les flèches de navigation */}
            {size > 1 && (
                <div
                    className="button previous"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        index <= 0 ? setIndex(size - 1) : setIndex(index - 1)
                    }}
                >
                    <img
                        className="arrow"
                        src={leftArrow}
                        alt="bouton précédent"
                    />
                </div>
            )}
            <img
                className="photo"
                src={photos[index]}
                alt={title}
                onMouseDown={(e) => {
                    e.preventDefault()
                }}
            />
            {/* si une seule image présente, ne pas afficher le compteur d'images */}
            {size > 1 && (
                <div className="compteurPhoto">
                    {index + 1}/{size}
                </div>
            )}
            {/* si une seule image présente, ne pas afficher les flèches de navigation */}
            {size > 1 && (
                <div
                    className="button next"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        index >= size - 1 ? setIndex(0) : setIndex(index + 1)
                    }}
                >
                    <img
                        className="arrow"
                        src={rightArrow}
                        alt="bouton suivant"
                    />
                </div>
            )}
        </section>
    )
}

export default Gallery
