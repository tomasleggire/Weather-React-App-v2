import React from 'react';
import { useEffect, useState } from 'react';


export default function ChangeTheme() {


    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    )
    
    
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            
        } else {
            setTheme('light')
          
 
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
       
        document.body.className = theme;
    }, [theme]);

   

    return [theme, toggleTheme]
}

