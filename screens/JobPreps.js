import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import FooterUser from './FooterUser';

import {
  Contenedor,
  Encabezado,
  ConTitle,
  Options,
  BackImg,
  ImgSize,
  ContText,
  TituloCard,
  ContGeneral,
  ContMinf
} from './StyledJobPreps';

const JobPreps = ({ navigation }) => {

  const construction = require('../src/assets/img/constructions.png')
  const job = require('../src/assets/img/job.png');
  return (
    <Contenedor>
      <Encabezado>
        <ConTitle onPress={() => navigation.goBack()}>
          <Icon
            solid={true}
            name='chevron-left'
            type='font-awesome-5'
          />
        </ConTitle>
      </Encabezado>
      <Options>
        <BackImg>
          <ImgSize source={job} />
        </BackImg>
        <ContText>
          <TituloCard>Job Preps</TituloCard>
          <Text>Preparacion para el trabajo</Text>
        </ContText>
      </Options>
      <ContGeneral>
        <Image
          source={construction}
          style={styles.construccion}
        />
        <Text style={styles.text}>Seccion en construccion. Pronto estará disponible!!</Text>
      </ContGeneral>
      <FooterUser navigation={navigation} />
    </Contenedor>
  )
};

const styles = StyleSheet.create({
  construccion: {
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 30
  },
  text: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 350,
    fontWeight: '700'
  }
})

export default JobPreps;