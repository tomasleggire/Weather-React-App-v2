import React, { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import WeatherApp from "./WeatherApp";
import SearchModal from "./Components/SearchModal";




function App() {

  const [modalValue, setModalValue] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [resApi, setResApi] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=82ba7e681789f0bac388a129ec9847b8&units=metric`)
      .then((response) => response.json())
      .then((clima) => {
        setResApi(clima);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(true)
      })
  }, []);

    const openModal = () => {
        setModalValue(true);
        console.log('Modal abierto');
    }

    const closeModal = () => {
        setModalValue(false);
        console.log('Modal cerrado');
    }

    const actualizarDatos = async e => {
      e.preventDefault();
      const {city} = e.target.elements;
      const cityValue = city.value;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=82ba7e681789f0bac388a129ec9847b8&units=metric`;
      setIsLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) {
        setError(true);
      }
      const data = await res.json();
      setIsLoading(false);
      setResApi(data);
      console.log(data);
      setModalValue(false);
    }

  if (error) {
    return (
      <Error />
    )
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }


  return (
    <>
    <WeatherApp resApi={resApi} openModal={openModal}/>
    <SearchModal 
      modalValue={modalValue} 
      closeModal={closeModal}
      actualizarDatos={actualizarDatos}/>
    </>
  )


  
}

export default App;


//82ba7e681789f0bac388a129ec9847b8