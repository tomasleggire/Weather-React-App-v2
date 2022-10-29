import React from "react";
import Dates2 from "./Dates2";
import Dates from "./Dates";


export default function WeatherApp({resApi, openModal, modalValue}) {


     return (
        <div style={divStyle} className={`${!!modalValue && 'hide-div'}`}>
            <Dates resApi={resApi} openModal={openModal}/>
            <Dates2 resApi={resApi}/>
        </div>
    )
}



const divStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0'
}

