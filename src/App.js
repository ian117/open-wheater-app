import React, { useState, useEffect } from "react";
import './App.css';
import WheaterApp from "./components/WheaterApp";
import Negation from './components/Negation'

function App() {

  //Constantes 
  const APIKEY = "d4a39f4e2c0f8c4a88fe362d60b661ae";
  const [ lat, setLat ] = useState()
  const [ lon, setLon ] = useState()
  const [ knownData, setKnownData ] = useState(false);
  //Props para Wheather
  const [ cityName, setCityName] = useState()
  const [ country, setCountry] = useState()
  const [ wheater, setWheater ] = useState()
  const [ wheaterTEXT, setWheaterTEXT ] = useState()
  const [ temperatureCEN, setTemperatureCEN ] = useState()
  const [ isInCen, setIsInCen ] = useState(true);

  //Component ternary
  const IfTernaryComponent = ({ condition }) => {
    if(condition) {
      return <WheaterApp city={cityName} country={country} wheater={wheater} wheaterTEXT={wheaterTEXT} temp={temperatureCEN} ternaryTemp={isInCen} convertCF={convertCF} /> 
    } else {
      return <Negation/> 
    }
  }

  //Kelvin to CEN
  const convertKeltoCen = (kel) => {
    const cel = kel - 273.15
    setIsInCen(true)
    return cel
  }

  //Celsius To Farenheit
  const convertCF = () => {
    if(isInCen){
      const Far = (temperatureCEN*1.8)+32
      setTemperatureCEN(Far)
      setIsInCen(false)
    } else {
      const Cel = (temperatureCEN-32)/1.8
      setTemperatureCEN(Cel)
      setIsInCen(true)
    }
  }

  //Setea los props de WheaterApp y el condicional para mostrar el componente
  const setTheProps = (data) => {
    if(data.cod === "400"){
      return
    } else {
      setKnownData(true)
    }
    setCityName(data.name)
    setCountry(data.sys["country"])
    setWheater(data.weather[0].icon)
    setWheaterTEXT(data.weather[0].description)
    setTemperatureCEN(convertKeltoCen(data.main.temp))
  }
    

  //Navigator, establece Lat y Lon
  const locationFunc = () => {

    const success = (position) => {
      setLat(position.coords["latitude"])
      setLon(position.coords["longitude"])
    }
    const failure = (error) => {
      setKnownData(false)
    }
  
    navigator.geolocation.getCurrentPosition(success, failure)
  }

  // Llamado a la API openwathermap
  const callApi = () =>{
  const res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)

  
  
  return (res.then((value) => value.json().then( (json) =>
  setTheProps(json))));
  }


  //efectCallback-->Qué hará cuando haga un Render por primera vez?<---
  const effectCallback = () => {
    locationFunc();
  }

  //Uso del UseEffect para llamarlo la primera vez
  useEffect(effectCallback, [])


  return (<div className="App">
    <button onClick={callApi} className="display-btn">I want to know my weather</button>
    <IfTernaryComponent condition={knownData}/>
    </div>);
}

export default App;
