import React from 'react';
import Banner from '../Banner/Banner';
import CardsContainer from '../CardsContainer/CardsContainer';
import bannerImage from '../../assets/homeBanner.jpg'

// import Card from '../Card/Card';

const Home = () => {
    return (
        <div>
            <Banner imgURL={bannerImage} />
            <CardsContainer />
        </div>
    );
};

export default Home;