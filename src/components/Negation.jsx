import React from "react";
import '../styles/Negation.css'

const Negation = () => {

return (<div className="Negation">
            <h2>Please Allow Permisions</h2>
            <p>Go to the information symbol in your browser and change the location to -always- </p>
            <p>If doesn´t appear, <span className="span-green">just refresh the page ;)</span></p>
            <p> <span className="span-white">If you already allowed</span>, go ahead adn click the button!</p>
        </div>)

}

export default Negation;