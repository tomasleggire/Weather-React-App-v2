import React from "react";

export default function Dates2({resApi}) {



    return (
        <div style={divStyle}>
            <div style={divStyle2}>
                <span style={spanStyle}>Feels Like</span>
                <span style={spanStyle}>Humidity</span>
                <span style={spanStyle}>Pressure</span>
                <span style={spanStyle}>Wind Speed</span>
            </div>
            <div style={divStyle3}>
                <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/2078/2078262.png"/>
                <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/2078/2078262.png"/>
                <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/2078/2078262.png"/>
                <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/2078/2078262.png"/>
            </div>
            <div style={divStyle4}>
                <span style={porcentaje}>{Math.round(resApi.main.feels_like) + 'º'}</span>
                <span style={porcentaje}>{resApi.main.humidity + "%"}</span>
                <span style={porcentaje}>{resApi.main.pressure}</span>
                <span style={porcentaje}>{resApi.wind.speed}</span>
            </div>
        </div>
    )
}

const divStyle = {
    width: '280px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
}

const divStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-around',
    color: 'black',
}

const divStyle3 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingRight: '20px',
}

const divStyle4 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
}

const spanStyle = {
    fontSize: '18px',
    
}

const imgStyle = {
    width: '25px',
    height: '25px',
    margin: '0 0 0 auto',
}

const porcentaje = {
    textAlign: 'right',
}


{/* <div style={divStyle2}>
                <span style={spanStyle}>Feels Like</span>
                <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/2078/2078262.png"/>
                <span style={porcentaje}>{Math.round(resApi.main.feels_like) + 'º'}</span>
             </div>
            <div style={divStyle2}>
                <span style={spanStyle}>Humidity</span>
                <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/2078/2078262.png" />
                <span style={porcentaje}>{resApi.main.humidity + "%"}</span>
             </div>
           <div style={divStyle2}>
                
                <span style={spanStyle}>Pressure</span>
                <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/2078/2078262.png" />
                <span style={porcentaje}>{resApi.main.pressure}</span>
            </div>
            <div style={divStyle2}>
                
                <span style={spanStyle}>Wind Speed</span>
                <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/2078/2078262.png" />
                <span style={porcentaje}>{resApi.wind.speed}</span>
            </div>  */}