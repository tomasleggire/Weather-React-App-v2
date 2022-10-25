import React from "react";
import Dates2 from "./Components/Dates2";
import Dates from "./Components/Dates";


export default function WeatherApp({resApi, openModal}) {


     return (
        <div style={divStyle}>
            <Dates resApi={resApi} openModal={openModal}/>
            <Dates2 resApi={resApi}/>
        </div>
    )
}



const divStyle = {
    height: '80vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}