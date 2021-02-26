import React from 'react';
import { Icon} from 'react-native-elements'
import {
  Contenedor,
  Encabezado,
  ConTitle,
  TextTitle,
  BotonLog,
  TextButton,
  ContGeneral,
  TituloGen,
  TextGen,
  ImgContCenter
} from './StyledMsgCohorte';
let imgMsg = require('../../src/assets/img/imgMensaje.jpg'); 

const MsgNuevoHenry = ({ navigation }) => {
  return ( 
    <Contenedor>  
      <Encabezado>
        <ConTitle
          onPress={() => navigation.navigate('Henry Admin')}
        >
          <Icon
						solid={true}
            name="chevron-left"
						type="font-awesome-5"
          />
          <TextTitle>Home</TextTitle>
        </ConTitle>
      </Encabezado>
      <ContGeneral>
        <ImgContCenter  source={imgMsg} />
        <TituloGen>Felicidades Creaste la Cohorte con Exito</TituloGen>
        <TextGen>Ahora puedes asignar estudiantes a la cohorte o reasignar repitentes.</TextGen>
        <BotonLog 
          onPress={()=> navigation.navigate('Henry Admin')}>
          <TextButton>Volver al inicio</TextButton>
        </BotonLog>
      </ContGeneral>
    </Contenedor>
   );
}
 
export default MsgNuevoHenry;