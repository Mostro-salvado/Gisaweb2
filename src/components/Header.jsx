import {React, useState} from 'react'
import { useNavigate } from "react-router-dom";
import "../assets/css/header.css"
import Logo from "../assets/statics/Gisa.webp"


export default function Header2() {
    const Navigate = useNavigate();

    const redirectToHome = () => {
        Navigate("/");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };
    

    const [menu , setMenu] = useState(false)

    const handleMenu =()=>{
        setMenu(!menu)
        console.log(menu)
    }
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMenu(false);
    };

    return (
    <>
        <header>
            <img onClick={redirectToHome} className="logo" src={Logo} alt="Logo" />
            <button id="abrir" className="abrir-menu" onClick={handleMenu}><i className="bi bi-list"></i></button>
            <nav  className={`nav ${menu ? 'visible scale-up-center' : ''}`} id="nav">
                <button id="cerrar" className="cerrar-menu" onClick={handleMenu}><i className="bi bi-x"></i></button>
                <ul className="nav-list">
                    <li><span onClick={() => scrollToSection('servicios')}><i className="bi bi-cone-striped"></i> Servicios</span></li>
                    <li><span onClick={() => scrollToSection('somos-container')}><i className="bi bi-person"></i> Quienes Somos</span></li>
                    <li><span onClick={() => scrollToSection('Contacto')}><i className="bi bi-envelope"></i> Contacto</span></li>
                </ul>
            </nav>
        </header>
    </>
)
}
