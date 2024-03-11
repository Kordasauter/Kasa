//composant React
import React from 'react'
//bannière
import Banner from '../Banner/Banner'
import bannerImage from '../../assets/homeBanner.jpg'
//conteneur des cartes logement
import CardsContainer from '../CardsContainer/CardsContainer'
//style
import '../../styles/home.scss'

function Home(props) {
    return (
        <main className="home">
            <Banner
                imgURL={bannerImage}
                text="Chez vous, partout et ailleurs"
            />
            <CardsContainer />
        </main>
    )
}

export default Home
