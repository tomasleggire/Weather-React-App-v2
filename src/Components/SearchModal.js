import React from "react";


export default function SearchModal({modalValue, closeModal}) {

   

    if (modalValue) {
        return ( 
            <div style={divStyle}>
                <button type="button" onClick={closeModal}>X</button>
            </div>
        )
    } else {
       return 
        
       
    }
}

const divStyle = {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    backgroundColor: 'red',
    top: '0',
    left: '0',
}