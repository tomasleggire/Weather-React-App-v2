import React from "react";
import {WiDayCloudy} from 'react-icons/wi';
import {FiWind} from 'react-icons/fi';
import ThemeButton from "./ThemeButton";
import SearchButton from "./SearchButton";




export default function Dates({resApi, openModal}) {



    return (
    <div style={divMain}>
        <h1 style={h1Style}>{resApi.name + ", " + resApi.sys.country}</h1>
            <p style={pStyleNOW}>Now</p>
            <div style={divMain2}>
                <WiDayCloudy style={imgStyle1}/>
                <h2 style={h2Style}>{Math.round(resApi.main.temp) + "º"}</h2>
            </div>
            <p style={pStyle}>{resApi.weather[0].description[0].toUpperCase() + resApi.weather[0].description.slice(1)}</p>
            <p style={pStyle2}>Wind</p>
            <div style={divMain3}>
                <FiWind style={imgStyle2}/>
                <span style={spanStyle}>{resApi.wind.speed + '/s'}</span>
            </div>
            <div style={divBtnStyle}>
                <SearchButton openModal={openModal}/>
                <ThemeButton/>
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
    fontWeight: '600',
    fontFamily: 'Red Hat Display',
}

const pStyleNOW = {
    fontWeight: '600',
    fontSize: '13px',
}

const imgStyle1 = {
    height: '65px',
    width: '65px',
    marginTop: '90px',
}

const h2Style = {
    textAlign: 'center',
    fontSize: '64px',
    paddingTop: '10px',
    fontWeight: '700',
    fontFamily: 'Comfortaa',
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
    fontWeight: '600',
    fontFamily: 'Kumbh Sans',
    letterSpacing: '0.5px',
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
    fontSize: '16px',
    paddingLeft: '5px',
    fontWeight: '500',
    fontFamily: 'Comfortaa',
}

const divBtnStyle = {
    width: '330px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '25px',
}



