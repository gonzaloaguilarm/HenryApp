import React from 'react';
import { Icon } from 'react-native-elements';

import { Contenedor, Encabezado, Home, TextTitle } from './StyledYourCohort';

const CohorteHeader = ({navigation}) => {
  return (
      <Encabezado >
        <Home onPress = {() => navigation.navigate('Menu Usuario')}>
          <Icon 
            solid = {true}
            name = 'chevron-left'
            type = 'font-awesome-5'
          />
          <TextTitle>Home</TextTitle>
        </Home>
      </Encabezado>
  )
};

export default CohorteHeader;