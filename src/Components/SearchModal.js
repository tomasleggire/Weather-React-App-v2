import React, {useState} from "react";
import '../Css/Modal.css';
import {FiHeart} from 'react-icons/fi';
import {FiX} from 'react-icons/fi';




export default function SearchModal({modalValue, closeModal, actualizarDatos}) {

    const [listado, setListado] = useState(['Madrid', 'Peru', 'Alemania', 'Alemania', 'Alemania', 'Alemania', 'Alemania', 'Alemania']);

    const ItemListado = (text) => {
        return (
            <div className="listado-div">
              <li className="li">
                  {text}
              </li>
                <FiX className="delete"/>
            </div>
        )
    }


        return ( 
            <form className={`div ${!!modalValue && "show"}`} onSubmit={actualizarDatos}>
                <div className="search-div">
                  <h1 style={h1Style}>How is the weather like in...?</h1>
                  <div style={btnDiv}>
                      <input type='text' placeholder="Buenos Aires" className="inputStyle" name="city" autoComplete="off"></input>
                      <FiHeart className="fav"/>
                      <button className="btnSearch">Search</button>
                  </div>
                <ul className="ul">
                    {listado.map((item) => (
                        ItemListado(item)
                    ))}
                </ul>
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
    marginTop: '65px',
}

const btnCancel = {
    fontSize: '18px',
    cursor: 'pointer',
    opacity: '.5',
    fontFamily: 'Comfortaa',
    paddingBottom: '30px',
}