//composant React
import React from 'react'
//Bannière
import Banner from '../Banner/Banner'
import bannerImage from '../../assets/aboutBanner.jpg'
//Menu déroulant
import Collapse from '../Collapse/Collapse'
//Contenu des menus déroulants
import aboutList from '../../datas/about.json'
//style
import '../../styles/aPropos.scss'

function APropos(props) {
    return (
        <main className="aPropos">
            <Banner imgURL={bannerImage} />
            <section className="collapseContainer">
                {aboutList.map(({ id, title, text }) => (
                    <Collapse
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                        open={false}
                    />
                ))}
            </section>
        </main>
    )
}

export default APropos
