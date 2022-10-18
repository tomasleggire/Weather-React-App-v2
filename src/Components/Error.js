import React from "react";
import { BiRefresh } from "react-icons/bi";
import { TiWarningOutline } from "react-icons/ti";

export default function Error() {

    const reload = () => {
        window.location.reload();
    }

    return (
        <div style={divStyle}>
          <TiWarningOutline style={imgStyle}/>
          <h2 style={h2Style}>Something's wrong...</h2>
          <BiRefresh onClick={reload} style={btnStyle}/>
          
        </div>
    )
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

const imgStyle = {
    width: '150px',
    height: '150px'
}

const btnStyle = {
    width: '60px',
    height: '60px',
    marginTop: '50px',
    cursor: 'pointer',
}