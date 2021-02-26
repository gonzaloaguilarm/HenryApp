import React from 'react';
import {
  BotonLog,
  TextButton,
  ContGeneral,
  TituloGen,
  TextGen,
  ImgContCenter
} from './StyledMsg';
let imgMsg = require('../../src/assets/img/imgMensaje.jpg'); 

const MsgRegistro = ({navigation}) => {
  return (   
      <ContGeneral>
        <ImgContCenter  source={imgMsg} />
        <TituloGen>Bienvenido a henry</TituloGen>
        <TextGen>Tienes algún inconveniente?  No te preocupues ahora eres parte de la familia Henry dejanos ayudarte.</TextGen>
        <BotonLog 
          onPress={()=> navigation.navigate('Iniciar Sesion')}>
          <TextButton>Ir al inicio</TextButton>
        </BotonLog>
      </ContGeneral>
   );
}
 
export default MsgRegistro;