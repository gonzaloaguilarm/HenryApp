import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Footer from '../Footer/Footer';

/* Estilos */
import {
  Contenedor,
  Encabezado,
  ConTitle,
  TextTitle,
  ContGeneral,
  ContListGen,
  Options,
  BackImg,
  ContText,
  TituloCard,
  ContMinf,
  ContBtnOut,
  IconContent,
  ImgMinf,
  ImgSise,
  ContBtnLog,
  ContPirnTable,
  TextContTable,
  LogoSise,
  BotonLog,
  TextButton
} from './StyledCohorteList';

let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');


const VerCohorte = (props) => {
  const { comienzo, descripcion, fin, modalidad, nombre, instructor, id } = props.route.params.cohorte;
console.log(props.route.params.cohorte)
  return (
    <Contenedor>
      <Encabezado >
        <ConTitle
          onPress={() => props.navigation.navigate('Lista de Cohortes')}
        >
          <Icon
            solid={true}
            name="chevron-left"
            type="font-awesome-5"
          />
          <TextTitle>Cohortes</TextTitle>
        </ConTitle>
      </Encabezado>
      <Options>
        <BackImg>
          <ImgSise source={card1} />
        </BackImg>
        <ContText>
          <TituloCard>Detales de Cohorte</TituloCard>
          <Text>Detalle completo del Cohorte {nombre}</Text>
        </ContText>
      </Options>
      <ContGeneral>
        <ContListGen>

          <ContPirnTable>
            <View>
              <TextContTable>COHORTE N° {nombre}</TextContTable>
              <TextContTable>{descripcion}</TextContTable>
              <TextContTable>Fecha de inicio: {comienzo} </TextContTable>
              <TextContTable>Fecha de finalizacion: {fin}</TextContTable>
              <TextContTable>Modalidad: {modalidad}</TextContTable>
              <TextContTable>Instructor: {instructor}</TextContTable>
            </View>
          </ContPirnTable>

          <ContBtnLog>
            <BotonLog onPress={() => props.navigation.navigate('Alumno Cohorte', {nombre: nombre})}>
              <TextButton onPress={() => props.navigation.navigate('Alumno Cohorte', {nombre: nombre})}>Alumnos</TextButton>
            </BotonLog>

            <BotonLog onPress={() => props.navigation.navigate("Lista PMs", {cohorte: nombre})}>
              <TextButton onPress={() => props.navigation.navigate("Lista PMs", {cohorte: nombre})}>PMs</TextButton>
            </BotonLog>

            <BotonLog onPress={() => props.navigation.navigate('Crear Grupos', {cohorte: props.route.params.cohorte})}>
              <TextButton onPress={() => props.navigation.navigate('Crear Grupos', {cohorte: props.route.params.cohorte})}>Crear Nuevo Grupo</TextButton>
            </BotonLog>
            
            <BotonLog onPress={() => props.navigation.navigate('Modificar Clases', {cohorte: nombre})}>
              <TextButton>Clases</TextButton>
            </BotonLog>

            <BotonLog onPress={() => props.navigation.navigate("Grupos PP", {cohorte: nombre})}>
              <TextButton onPress={() => props.navigation.navigate("Grupos PP", {cohorte: nombre})}>CRUD de PP</TextButton>
            </BotonLog>
          </ContBtnLog>
        </ContListGen>
      </ContGeneral>
      {/* Menu inferior General */}
			<Footer navigation={props.navigation}/>
    </Contenedor>
  )
};

export default VerCohorte;