import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//import de formularios
import SignIn from './SignIn'
import Register from './Register/Register'
/* Estilos */
import {
  Contenedor,
  FormuContenedor,
  ContenedorInFormu,
  ContenedorPanel,
  PanelLeft,
  PanelRight,
  InContentPanel,
  ImgPanel
} from './StyledPrincipal';
/* Import imagen */
import ImgLog from "../../assets/Img/Cohete.svg";
import ImgRegistro from "../../assets/Img/Register.svg";

const PrincipalScreen = () => {

  const [registerMode, setRegisterMode] = useState('');
  const [registerModePanel, setRegisterModePanel] = useState('');
  const [panelRight, setPanelRight] = useState('');
  const [formUp, setFormUp] = useState('');

  const addClass = (opt) => {
    if(opt === 'ok'){
      setRegisterModePanel('registerPanelImg')
      setRegisterMode('registerMode')
      setPanelRight('panelRight')
      setFormUp('formUp')
    }else if(opt === 'quit'){
      console.log('aqui ---->')
      setRegisterModePanel('')
      setRegisterMode('')
      setPanelRight('')
      setFormUp('')
    }
  }

  return ( 
    <Contenedor className={registerMode}>
      <FormuContenedor>
        <ContenedorInFormu className={formUp}>
          <SignIn />
          <Register />
        </ContenedorInFormu>
      </FormuContenedor>

      <ContenedorPanel >
        <PanelLeft className={registerModePanel} >
          <InContentPanel>
            <h2>Nuevo aqui?</h2>
            <p>Se te ha enviado un correo, para ser parte de la familia Henry Admin, registrate con el coreo al que te llego el mensaje para continuar</p>
            <button onClick={()=> addClass('ok')}>Registrate</button>
          </InContentPanel>
          <ImgPanel src={ImgLog} alt="No esta la Img"/>
        </PanelLeft>
        <PanelRight className={panelRight}>
          <InContentPanel>
            <h2>Eres uno de nosotros?</h2>
            <p>Si ya eres parte de la familia Henry Admin, dirígete a la otra pestaña para iniciar sesión.</p>
            <button onClick={()=> addClass('quit')}>Inicia Sesion</button>
          </InContentPanel>
          <ImgPanel src={ImgRegistro} alt="No esta la Img"/>
        </PanelRight>
      </ContenedorPanel>
    </Contenedor>
   );
}
 
export default PrincipalScreen;