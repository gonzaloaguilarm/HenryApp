import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import firebase from '../../database/database';

import { BackImg, Contenedor, ContText, ImgSize, Options, TituloCard } from './StyledYourCohort';

const card3 = require('../../src/assets/img/imgCard3.png');

const CohorteNavBar = () => {
  const info = useSelector(state => state);
  const [user, setUser] = useState(info);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection('users').onSnapshot((snap) => {
      const estudiantes = [];
      snap.docs.forEach((doc) => {
        const { cohorte, rol, grupo, pm, instructor, progreso } = doc.data();
        console.log(grupo);
        if(rol === 'student') {
          estudiantes.push({
            cohorte,
            grupo,
            pm,
            instructor,
            progreso,
            id: doc.id
          });
        }
      });
      console.log(estudiantes);
      setUsers(estudiantes);
    });
  }, []);

  return (
        <Options>
          <BackImg>
            <ImgSize source = {card3}/>
          </BackImg>
          <ContText>
            {
              !user.cohorte ?
              <TituloCard>Aún no tienes asignado Cohorte</TituloCard>
              :
              <TituloCard>Tu Cohorte es el N°{user.cohorte}</TituloCard>
            }
            <Text>Conoce quien es tu Instructor, a tus PM´s y a tu grupo de Cohorte...</Text>
          </ContText>
        </Options>
  )
};

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 100,
    alignItems: 'center',
    top: 80
  }
})

export default CohorteNavBar;