import React from "react";
import Dates2 from "./Components/Dates2";
import Dates from "./Components/Dates";

export default function WeatherApp({resApi}) {


     return (
        <div style={divStyle}>
            <Dates resApi={resApi}/>
            <Dates2 resApi={resApi}/>
        </div>
    )
}



const divStyle = {
    height: '98vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}