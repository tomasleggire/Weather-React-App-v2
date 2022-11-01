import React, {useState, useEffect} from "react";
import '../Css/Modal.css';
import {FiHeart} from 'react-icons/fi';
import {FiX} from 'react-icons/fi';


export default function SearchModal({modalValue, closeModal, actualizarDatos, setResApi, setIsLoading, setError, setModalValue, setPingCity}) {

    const [listado, setListado] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );
    const [itemFav, setItemFav] = useState('');

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(listado))
    }, [listado]);


    const changeFav = (e) => {
        setItemFav(e.target.value);
    }

    const addFav = (text) => {
        if(text) {
          setListado([...listado, text]);
          setItemFav('');
        } else return
    }

    const deleteFav = (text) => {
        let index = listado.indexOf(text);
        listado.splice(index, 1);
        setListado([...listado]);
    }

    const mostrarFav = async (text) => {
        setPingCity(text);
        setIsLoading(true);
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=82ba7e681789f0bac388a129ec9847b8&units=metric`);
        if (!res.ok) {
          setError(true);
        }
        const data = await res.json();
        setIsLoading(false);
        setResApi(data);
        console.log(data);
        setModalValue(false);
    }

    const ItemListado = (text) => {
        return (
            <div className="listado-div">
              <li className="li" onClick={() => mostrarFav(text)}>
                  {text}
              </li>
                <FiX className="delete" onClick={() => deleteFav(text)}/>
            </div>
        )
    }

        return ( 
            <form className={`div ${!!modalValue && "show"}`} onSubmit={actualizarDatos}>
                <div className="search-div">
                  <h1 style={h1Style}>How is the weather like in...?</h1>
                  <div style={btnDiv}>
                      <input type='text' placeholder="Buenos Aires" className="inputStyle" name="city" autoComplete="off" onChange={changeFav} value={itemFav}></input>
                      <FiHeart className="fav" onClick={() => addFav(itemFav)}/>
                      <button className="btnSearch">Search</button>
                  </div>
                <ul className="ul">
                    {listado.length === 0 && <p className="emptyList">Try to add to fav</p>}
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
    paddingBottom: '15px',
}