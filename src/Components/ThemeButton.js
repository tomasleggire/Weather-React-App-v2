import React, {useState, useTransition} from 'react';
import ChangeTheme from '../Hooks/ChangeTheme';
import {BiBulb} from "react-icons/bi";
import '../Css/ThemeButton.css';

export default function ThemeButton() {

    const [theme, toggleTheme] = ChangeTheme();
    const [anim, setAnim] = useState(false);
    
    const themeButtonAction = () => {
        toggleTheme();
        setAnim(true);
        setTimeout(function() {
            setAnim(false);
        },800)

    }
    
   
    return (
        <BiBulb style={iconStyle} onClick={themeButtonAction} className={`${!!anim && "animation"}`}/>
    )
}

const iconStyle = {
    width: '38px',
    height: '38px',
    cursor: 'pointer',
}


//{themeValue ? <WiDaySunny style={iconStyle}/> : <WiMoonWaxingCrescent3 style={iconStyle}/>}