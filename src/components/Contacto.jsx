import React, { useRef, useState} from 'react';
import "../assets/css/contacto.css"
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const form = useRef();
    const [enviadoConExito, setEnviadoConExito] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3n6n239', 'template_nfa5xxh', form.current, 'XRuyq49Q064sTIL4V')
            .then((result) => {
                console.log(result.text);
                setEnviadoConExito(true);
                form.current.reset(); 
            }, (error) => {
                console.log(error.text);
                setEnviadoConExito(false);
            });
    };
  return (
    <>
      <div className="wraper-contacto" id='Contacto'>
        <div className="titulo-contacto">Llena el formulario para contactarnos</div>
        {enviadoConExito &&   <h1 className='Mensaje-exito'>Mensaje enviado con exito</h1>}
        <form ref={form} onSubmit={sendEmail} className="formulario">
          <label>Nombre</label>
          <input className="entrada" type="text" name="user_name" placeholder="Ingresa tu nombre" />
          <label>Correo</label>
          <input className="entrada" type="email" name="user_email" placeholder="Correo electrónico" />
          <label>Mensaje</label>
          <textarea className="textarea" name="message" placeholder="Escribe tu mensaje aquí" />
          <button type="submit" className="icono-enviar">
          <i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </>
  )
}
