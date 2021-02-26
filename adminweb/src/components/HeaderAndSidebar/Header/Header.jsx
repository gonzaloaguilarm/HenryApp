import React from 'react';
import LogedIn from './LogedIn';
/* Estilos */
import {
  ContenedorHeader,
  ContenedorImagen
} from '../stylesHeaderSide';
/* Import imagen */
import ImgLog from "../../../assets/Img/henry_logo.jpg";

function Header() {
  return (
    <ContenedorHeader>
      <ContenedorImagen>
        <div>
          <img src={ImgLog} alt='HenryLogo' with='50px' height='50px'/>
        </div>
        <h3>HENRY WORLD</h3>
      </ContenedorImagen>
      <LogedIn/>
    </ContenedorHeader>
  );
}

export default Header;