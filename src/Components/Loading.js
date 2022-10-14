import React from "react";
import ReactLoading from 'react-loading';
import ChangeTheme from '../Hooks/ChangeTheme';


export default function Loading() {

  const [theme] = ChangeTheme();

  console.log(theme);

  if (theme === 'light') {
    return (
      <div style={divStyle}>
        <ReactLoading type="spin" color='rgb(71, 62, 62)' height={150} width={150}/>
      </div>
    )
  } else {
    return (
      <div style={divStyle}>
        <ReactLoading type="spin" color='#d8dfe0' height={150} width={150}/>
      </div>
    )
  }
    
}

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const h2Style = {
  textAlign: 'center',
  marginTop: '20px',
  fontFamily: 'monospace'
}