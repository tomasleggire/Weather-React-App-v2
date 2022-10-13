import React from "react";


export default function Dates({resApi}) {



    return (
    <div style={divMain}>
        <h1 style={h1Style}>Buenos Aires, AR</h1>
            <p>Now</p>
            <div style={divMain2}>
                <img style={imgStyle1} src="https://cdn-icons-png.flaticon.com/512/2932/2932445.png"/>
                <h2 style={h2Style}>{Math.round(resApi.main.temp) + "º"}</h2>
            </div>
            <p style={pStyle}>{resApi.weather[0].description.toUpperCase()}</p>
            <p style={pStyle2}>Wind</p>
            <div style={divMain3}>
                <img style={imgStyle2} src="https://cdn-icons-png.flaticon.com/512/2011/2011448.png"/>
                <span style={spanStyle}>{resApi.wind.speed}</span>
                
            </div>
    </div>
    )
}

const divMain = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30px',
}

const h1Style = {
    textAlign: 'center',
    fontSize: '18px',
    paddingBottom: '5px',
    fontWeight: '700',
}

const imgStyle1 = {
    height: '60px',
    width: '60px',
    marginTop: '90px',
    color: 'red',
}

const h2Style = {
    textAlign: 'center',
    fontSize: '62px',
    paddingTop: '10px',
    fontWeight: '700',
}

const divMain2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

const pStyle = {
    paddingTop: '20px',
    paddingBottom: '50px',
    fontSize: '16px',
    fontWeight: '700',
}

const pStyle2 = {
    fontSize: '14px',
    textAlign: 'center',
    paddingBottom: '5px',
    fontWeight: '700',
}


const divMain3 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const imgStyle2 = {
    height: '20px',
    width: '20px',
}

const spanStyle = {
    fontSize: '18px',
    paddingLeft: '5px',
    fontWeight: '500',
}





