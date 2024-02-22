import React from 'react';
import '../../styles/banner.scss'

function Banner({imgURL}) {
    return (
        <div className='bannerWrapper'>
            <img className='banner' src={imgURL} alt="bannière" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    );
}

export default Banner;