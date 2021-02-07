import React, { useState, useEffect } from "react";
import '../styles/WheaterApp.css'
import IsCel from "./IsCel";
import IsFar from "./IsFar";
import image01d from '../utilities/01d.png'
import image02d from '../utilities/02d.png'
import image03d from '../utilities/03d.png'
import image04d from '../utilities/04d.png'
import image09d from '../utilities/09d.png'
import image10d from '../utilities/10d.png'
import image11d from '../utilities/11d.png'
import image13d from '../utilities/13d.png'
import image50d from '../utilities/50d.png'
import image01n from '../utilities/01n.png'
import image02n from '../utilities/02n.png'
import image03n from '../utilities/03n.png'
import image04n from '../utilities/04n.png'
import image09n from '../utilities/09n.png'
import image10n from '../utilities/10n.png'
import image11n from '../utilities/11n.png'
import image13n from '../utilities/13n.png'
import image50n from '../utilities/50n.png'

const WheaterApp = ({city, country, wheater, wheaterTEXT, temp, ternaryTemp, convertCF}) => {

    const selectImage = (prop) => {
        switch(prop) {
            case "01d":
                return image01d
                break;
            case "02d":
                return image02d
                break;
            case "03d":
                return image03d
                break;
            case "04d":
                return image04d
                break;
            case "09d":
                return image09d
                break;
            case "10d":
                return image10d
                break;
            case "11d":
                return image11d
                break;
            case "13d":
                return image13d
                break;
            case "50d":
                return image50d
                break;
            case "01n":
                return image01n
                break;
            case "02n":
                return image02n
                break;
            case "03n":
                return image03n
                break;
            case "04n":
                return image04n
                break;
            case "09n":
                return image09n
                break;
            case "10n":
                return image10n
                break;
            case "11n":
                return image11n
                break;
            case "13n":
                return image13n
                break;
            case "50n":
                return image50n
                break;
        }
    }

    const IfCelOrFar = ({condition}) => {
        if (condition) {
            return <IsCel temp={temp} />
        } else {
            return <IsFar temp={temp} />
        }
    }


    return (
        <div className="wheaterApp">
            <div className="wheaterAppBox">
                <h2>Current Weather</h2>
               <img src={selectImage(wheater)}/>
               <h3>{wheaterTEXT}</h3>
                <p>{city}, {country}</p>
                <IfCelOrFar condition={ternaryTemp}/>
                <button onClick={convertCF}>Convert C/F</button>
            </div>
        </div>
    )
}

export default WheaterApp;