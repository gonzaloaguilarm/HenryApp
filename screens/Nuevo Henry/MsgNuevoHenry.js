import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Icon, Image, Text} from 'react-native-elements'
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
} from './StyledMsg';
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
        <TituloGen>Felicidades correo enviado</TituloGen>
        <TextGen>El correo fue enviado con éxito al destinatario seleccionado, regresa al inicio.</TextGen>
        <BotonLog 
          onPress={()=> navigation.navigate('Henry Admin')}>
          <TextButton>Volver al inicio</TextButton>
        </BotonLog>
      </ContGeneral>
    </Contenedor>
   );
}
 
export default MsgNuevoHenry;