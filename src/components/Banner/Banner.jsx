import React from 'react';
import '../../styles/banner.scss'

function Banner({imgURL,text}) {
    return (
        <div className='bannerWrapper'>
            <img className='banner' src={imgURL} alt="bannière" />
            {text && (<p>{text}</p>)}
        </div>
    );
}

export default Banner;