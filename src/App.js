import React, { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import WeatherApp from "./WeatherApp";
import SearchModal from "./Components/SearchModal";



function App() {

  const [modalValue, setModalValue] = useState(false);

    const openModal = () => {
        setModalValue(true);
        console.log('Modal abierto');
    }

    const closeModal = () => {
        setModalValue(false);
        console.log('Modal cerrado');
    }

  const [isLoading, setIsLoading] = React.useState(true);
  const [resApi, setResApi] = React.useState(null);
  const [error, setError] = React.useState(false);

  

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=-34.60&lon=-58.43&appid=82ba7e681789f0bac388a129ec9847b8&units=metric")
      .then((response) => response.json())
      .then((clima) => {
        setResApi(clima);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(true)
      })
  }, []);

  console.log(resApi);

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
    <SearchModal modalValue={modalValue} closeModal={closeModal}/>
    </>
  )


  
}

export default App;


//82ba7e681789f0bac388a129ec9847b8