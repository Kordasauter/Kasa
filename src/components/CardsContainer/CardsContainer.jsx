import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
import Card from '../Card/Card'
import '../../styles/cardsContainer.scss'
import { logementList } from '../../datas/logements'

function CardsContainer(props) {
    // const [surveyData, setSurveyData] = useState({})
    // useEffect(() => {
    // setDataLoading(true)
    //     fetch(`https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`)
    //         // .then((response) => response.json()
    //         .then(({ surveyData }) => console.log(surveyData))
    //         .catch((error) => console.log(error))
    //     // )
    // }, [])
    // const logementsList = fetch("../../datas/logements.json").then((response) => console.log(response))
    console.log(logementList)
    return (
        <div className="cardContainer">
            {logementList.map(({ id, title, cover }) => (
                <Card key={id} title={title} cover={cover} />
            ))}
        </div>
    )
}

export default CardsContainer
