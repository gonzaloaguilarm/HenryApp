import React, { useEffect, useState } from 'react';
import { Icon, ListItem, Text } from 'react-native-elements';
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
  TextPrin,
  BodyUnitItem,
  LogoSise,
  BotonLog,
  ImgListUn,
  TextButton
} from './StyledCohorteList';
import firebase from '../../database/database';
import Footer from '../Footer/Footer';

let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');

const CohorteList = ({ navigation }) => {

  const [
    cohorte,
    setCohorte
  ] = useState([]);
  useEffect(() => {
    firebase.db.collection('cohorte').onSnapshot((query) => {
      var data = [];
      query.docs.forEach((docs) => {
        const { comienzo, descripcion, fin, modalidad, nombre, instructor } = docs.data();
        console.log(comienzo)
        data.push({
          id: docs.id,
          comienzo,
          descripcion,
          fin,
          modalidad,
          nombre,
          instructor
        });
      });
      setCohorte(data);
    });
  }, []);

  const onPressSee = () => { };
  const onPressEdit = () => { };

  return (
    <Contenedor>
      <Encabezado >
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
      <Options>
        <BackImg>
          <ImgSise source={card1} />
        </BackImg>
        <ContText>
          <TituloCard>Cohortes</TituloCard>
          <Text>Historial de todas las cohortes de Henry</Text>
        </ContText>
      </Options>
      {/* <Text h2> Listado de cohortes</Text> */}
      <ContGeneral>
        <ContListGen>
          {cohorte.map((l, i) => (
            <ListItem key={i} style={{ width: '100%', }}>
              <BodyUnitItem >
                <BackImg>
                  <ImgListUn source={logFont} />
                </BackImg>
                <ContText>
                  <TextPrin>{`Cohorte ${l.nombre}`}</TextPrin>
                  <Text>{`Comienzo ${l.comienzo}`} - {`Fin ${l.fin}`}</Text>
                  <ContBtnOut >
                    <BotonLog onPress={() => navigation.navigate("Ver Cohorte", {cohorte: l})}>
                      <TextButton>Ver</TextButton>
                    </BotonLog>
                    <BotonLog onPress={() => navigation.navigate("Editar Cohorte", { cohorte: l })} >
                      <TextButton>Editar</TextButton>
                    </BotonLog>
                  </ContBtnOut>
                </ContText>
              </BodyUnitItem>
            </ListItem>
          ))}
        </ContListGen>
      </ContGeneral>
      {/* Menu inferior General */}
			<Footer navigation={navigation}/>
    </Contenedor>
  );
};
export default CohorteList;