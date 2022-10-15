import React from 'react';
import ChangeTheme from '../Hooks/ChangeTheme';
import {BiBulb} from "react-icons/bi";


export default function ThemeButton() {

    const [theme, toggleTheme] = ChangeTheme();
    
    
   
    return (
        <BiBulb style={iconStyle} onClick={toggleTheme}/>
    )
}



const iconStyle = {
    width: '38px',
    height: '38px',
    cursor: 'pointer',
}


//{themeValue ? <WiDaySunny style={iconStyle}/> : <WiMoonWaxingCrescent3 style={iconStyle}/>}