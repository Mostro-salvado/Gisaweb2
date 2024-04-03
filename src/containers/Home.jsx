import React from 'react'
import "../assets/css/home.css"
//import Hero from '../components/Hero'
import QuienesSomos from '../components/QuienesSomos'
import Obras from '../components/Obras'
import Contacto from '../components/Contacto'
import Botonwhatsapp from '../components/BotonWatsapp'

export default function Home() {
  return (
    <>
      <QuienesSomos></QuienesSomos>
      <Obras></Obras>
      <Contacto></Contacto>
      <Botonwhatsapp></Botonwhatsapp>
    </>
  )
}
