//composant React
import React from 'react'
//style
import '../../styles/banner.scss'

function Banner({ imgURL, text }) {
    return (
        <section className="bannerWrapper">
            <img className="banner " src={imgURL} alt="bannière" />
            {text && <p>{text}</p>}
        </section>
    )
}

export default Banner
