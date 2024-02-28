import React from 'react'
import Banner from '../Banner/Banner'
import CardsContainer from '../CardsContainer/CardsContainer'
import bannerImage from '../../assets/homeBanner.jpg'
import '../../styles/home.scss'

function Home(props) {
    return (
        <div className="home">
            <div></div> {/* placeholder */}
            <div className="home_content">
                <Banner
                    imgURL={bannerImage}
                    text="Chez vous, partout et ailleurs"
                />
                <CardsContainer />
            </div>
            <div></div> {/* placeholder */}
        </div>
    )
}

export default Home
