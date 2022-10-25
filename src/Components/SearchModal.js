import React from "react";
import '../Css/Modal.css';




export default function SearchModal({modalValue, closeModal, actualizarDatos}) {
        return ( 
            <form className={`div ${!!modalValue && "show"}`} onSubmit={actualizarDatos}>
                <h1 style={h1Style}>How is the weather like in...?</h1>
                <div style={btnDiv}>
                    <input type='text' placeholder="Buenos Aires" className="inputStyle" name="city" autoComplete="none"></input>
                    <button className="btnSearch">Search</button>
                </div>
                <p onClick={closeModal} style={btnCancel}>Cancel</p>
            </form>
            
            
        )
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

const btnCancel = {
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '32px',
    opacity: '.5',
    fontFamily: 'Comfortaa',
}