import React from "react";
import "../assets/css/Botonwhatsapp.css";

export default function Botonwhatsapp() {
    const handleClick = () => {
        window.open("https://wa.me/+5493416164792?text=Hola" , "_blank");
};

    return (
        <>
            <div className="boton-flotante" onClick={handleClick}></div>
        </>
);
}
