import React from "react";
import '../Css/Modal.css';



export default function SearchModal({modalValue, closeModal}) {

    if (modalValue) {
        return ( 
            
            <div className="div">
                <h1 style={h1Style}>How is the weather like in...?</h1>
                <div style={btnDiv}>
                    <input type='text' placeholder="Buenos Aires" className="inputStyle"></input>
                    <p style={searchStyle}>Search</p>
                </div>
                <p onClick={closeModal} style={btnCancel}>Cancel</p>
            </div>
            
            
        )
    } else {
       return 
    }
}


const h1Style = {
    textAlign: 'center',
    fontSize: '32px',
    paddingBottom: '20px',
    padding: '0 20px',
    fontFamily: 'Comfortaa',
}

const btnDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const searchStyle = {
    border: 'none',
    padding: '5px 10px',
    background: 'none',
    fontSize: '18px',
    paddingBottom: '18px',
    cursor: 'pointer',
    fontFamily: 'Comfortaa',
}

const btnCancel = {
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '32px',
    opacity: '.5',
    fontFamily: 'Comfortaa',
}