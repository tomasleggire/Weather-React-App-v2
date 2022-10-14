import React from 'react';

import ChangeTheme from '../Hooks/ChangeTheme';
import {BiBulb} from "react-icons/bi";


export default function ThemeButton() {

    const [theme, toggleTheme] = ChangeTheme();
    
    
   
    return (
        <div onClick={toggleTheme} style={btnStyle}>
            <BiBulb style={iconStyle}/>
        </div>
    )
}

const btnStyle = {
    position: 'absolute',
    display: 'inline',
    paddingLeft: '62px',
    top: '15px',
}

const iconStyle = {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
}


//{themeValue ? <WiDaySunny style={iconStyle}/> : <WiMoonWaxingCrescent3 style={iconStyle}/>}