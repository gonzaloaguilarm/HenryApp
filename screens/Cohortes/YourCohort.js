import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import CohorteHeader from './CohorteHeader';
import CohorteNavBar from './CohorteNavBar';
import { useSelector } from 'react-redux';
import firebase from '../../database/database';

import {
  Contenedor,
  ContGeneral, 
  GroupCard, 
  Img,
  Imagen, 
  Pm, 
  Tarjeta, 
  TarjetaPm, 
  TarjetaProgreso, 
  Titulo, 
  User,
  TituloPm,
  Progreso,
  ContListGen
} from './StyledYourCohort';

import Footer from '../FooterUser';

let card2 = require('../../src/assets/img/imgCard2.png');
let userImg = require('../../src/assets/img/user.png');

const YourCohort = ({ navigation }) => {
  const checkpoint4 = 5;
  const info = useSelector(state => state);
  const [user, setUser] = useState(info);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection('users').onSnapshot((snap) => {
      const estudiantes = [];
      snap.docs.forEach((doc) => {
        const { cohorte, rol, grupo, pm, instructor, progreso } = doc.data();
        console.log(grupo)
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
    <Contenedor>
      <CohorteHeader navigation={navigation} />
      <CohorteNavBar />
      <ContGeneral>
        <ContListGen>
          {/* GRUPO AL QUE PERTENECES */}
          <GroupCard>
              <Tarjeta >
                <Titulo>
                  <Text style={styles.text}>Grupo al que perteneces</Text>
                </Titulo>
                <Img>
                {
                  !user.grupo ? 
                  <Text style={styles.titulo}>Aún no tienes asignado un grupo</Text> :
                  <Text style={styles.titulo}>G - {`${user.grupo}`}</Text>
                }
                  <Imagen source={card2} />
                </Img>
              </Tarjeta>        

            {/* INSTRUCTOR DEL COHORTE */}
              <Tarjeta>
                <Titulo>
                  <Text style={styles.text}>Instructor del Cohorte</Text>
                </Titulo>
                <Img>
                {
                  !user.instructor ? 
                  <Text style={styles.instructor}>Sin instructor aún</Text> :
                  <Text style={styles.instructor}>{`${user.instructor}`}</Text>
                }
                {
                  !user.instructor ? <Text>Sin imagen</Text> : 
                <User source={userImg} />
                }
                </Img>
              </Tarjeta>
            
          </GroupCard>

          {/* TUS PM´S */}
          <Pm>
            <TituloPm>
              <Text style={styles.text}>Tus PM's</Text>
            </TituloPm>
            <Img >
              <ScrollView>
                <View style={styles.usuario}>
                  <Text style={styles.instructor}>{user.pm}</Text>
                  <User source={userImg} />
                </View> 
              </ScrollView>       
            </Img>
          </Pm>
          {/* TU PROGRESO */}
          <Progreso>
              <TituloPm>
                <Text style={styles.text}>Tu progreso</Text>
              </TituloPm>
              <Img style={{ flexDirection: 'row' }}>
              
              {
                checkpoint4 >= 7 && checkpoint4 <=10 ?
                <View style={styles.usuario}>
                <Image
                  style={styles.desahabilitado}
                  source={{ uri: 'https://www.soyhenry.com/static/bootcamp-69298120cfbbd3bd82368b797b6a770d.png' }} />
                <Text style={styles.progreso}>Bootcamp</Text>
              </View> 
              :
                <View style={styles.usuario}>
                  <Image
                    style={styles.habilitado}
                    source={{ uri: 'https://www.soyhenry.com/static/bootcamp-69298120cfbbd3bd82368b797b6a770d.png' }} />
                  <Text style={styles.progreso}>Bootcamp</Text>
                </View>               
              }
              { 
              checkpoint4 >= 7 && checkpoint4 <=10 ?
                <View style={styles.usuario}>
                  <Image
                    style={styles.desahabilitado}
                    source={{ uri: 'https://www.soyhenry.com/static/labs-a68a48d9c1525b60d5d1e874278d88a1.png' }} />
                  <Text style={styles.progreso}>Labs</Text>
                </View> 
                :
                <View style={styles.usuario}>
                  <Image
                    style={styles.habilitado}
                    source={{ uri: 'https://www.soyhenry.com/static/labs-a68a48d9c1525b60d5d1e874278d88a1.png' }} />
                  <Text style={styles.progreso}>Labs</Text>
                </View>
              }
              {
                checkpoint4 >= 7 && checkpoint4 <=10 ?
                <View style={styles.usuario}>
                  <Image
                    style={styles.desahabilitado}
                    source={{ uri: 'https://www.soyhenry.com/static/henryx-42b7eae92b75799f6220f3d659bcaea3.png' }} />
                  <Text style={styles.progreso}>HenryX</Text>
                </View> 
                :
                <View style={styles.usuario}>
                  <Image
                    style={styles.habilitado}
                    source={{ uri: 'https://www.soyhenry.com/static/henryx-42b7eae92b75799f6220f3d659bcaea3.png' }} />
                  <Text style={styles.progreso}>HenryX</Text>
                </View>
              }
              {
                checkpoint4 >= 7 && checkpoint4 <=10 ?
                <View style={styles.usuario}>
                  <Image
                    style={styles.desahabilitado}
                    source={{ uri: 'https://www.soyhenry.com/static/rocket-176b443ed273a2a5a6f5cb11d6d33605.png' }} />
                  <Text style={styles.progreso}>Job Prep</Text>
                </View>
                :
                <View style={styles.usuario}>
                  <Image
                    style={styles.habilitado}
                    source={{ uri: 'https://www.soyhenry.com/static/rocket-176b443ed273a2a5a6f5cb11d6d33605.png' }} />
                  <Text style={styles.progreso}>Job Prep</Text>
                </View>
              }        
              </Img>
        </Progreso>
        </ContListGen>
      </ContGeneral>
      <Footer navigation={navigation} /> 
    </Contenedor>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700'
  },
  titulo: {
    fontSize: 12,
    fontWeight: '700',
  },
  instructor: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  usuario: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  progreso: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  habilitado: {
    width: 45,
    height: 45,
    opacity: 0.3
  },
  desahibilitado: {
    width: 45,
    height: 45,
  }
});

export default YourCohort;