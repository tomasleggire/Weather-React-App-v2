import React from "react";
import {BiSearchAlt2} from "react-icons/bi";


 
export default function SearchButton({openModal}) {

    

    return (

        <BiSearchAlt2 onClick={openModal} style={iconStyle}/>    

    )
}


const iconStyle = {
    width: '38px',
    height: '38px',
    cursor: 'pointer',
}

