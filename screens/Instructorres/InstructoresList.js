import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import firebase from '../../database/database.js';
import AdminHeader from '../OptionAdmin/AdminHeader';
import AdminNavBar from '../OptionAdmin/AdminNavBar';
import Footer from '../Footer/Footer';
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
  IconContent,
  ImgMinf,
  ImgSise,
  LogoSise,
  Btn
} from './StyledInstructores';

let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');


const InstructoresList = ({ navigation }) => {
	const [
		instructores,
		setInstructores
	] = useState([]);

	useEffect(() => {
		firebase.db.collection('users').onSnapshot((snap) => {
			const profesores = [];
			snap.docs.forEach((doc) => {
				const { first_name, last_name, email, rol, dni, nacionalidad, photo, phone } = doc.data();
				if (rol === 'instructor') {
					profesores.push({ first_name, last_name, email, rol, dni, nacionalidad, photo, phone, id: doc.id });
				}
			});
			setInstructores(profesores);
		});
	}, []);

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
          <TituloCard>Lista de Instructores</TituloCard>
          <Text>Muestra el listado de instructores de Henry</Text>
        </ContText>
      </Options> 
      <ContGeneral>
        <ContListGen>
          <Btn onPress={() => navigation.navigate("Nuevo Henry", {instructor: true})}><Text>Agregar nuevo instructor</Text></Btn>
          <View>
            {instructores.map((instructor, i) => (
              <ListItem key={i} bottomDivider>
                {!instructor.photo ? (
                  <Avatar
                    style={styles.avatar}
                    source={{
                      uri :
                        'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'
                    }}
                    onPress={() => navigation.navigate('Perfil', { info: instructor })}
                  />
                ) : (
                  <Avatar
                    style={styles.avatar}
                    source={{ uri: instructor.photo }}
                    onPress={() => navigation.navigate('Perfil', { info: instructor })}
                  />
                )}
                <ListItem.Content>
                  <ListItem.Title
                    style={styles.instructor}
                    onPress={() => navigation.navigate('Perfil', { info: tor })}
                  >
                    {instructor.last_name},{instructor.first_name}
                  </ListItem.Title>
                  {/* <ListItem.Title>{student.nombre}</ListItem.Title> */}
                  <ListItem.Subtitle>{instructor.dni}</ListItem.Subtitle>
                  <ListItem.Subtitle>{instructor.email}</ListItem.Subtitle>
                  {/* <ListItem.Subtitle style={styles.cohorte}>Cohorte # {student.id_cohorte}</ListItem.Subtitle> */}
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </ContListGen>
      </ContGeneral>
      {/* Menu inferior General */}
      <Footer navigation={navigation}/>
	  </Contenedor>
	);
};

const styles = StyleSheet.create({
	marco      : {
		backgroundColor : '#e5e500',
		textAlign       : 'center'
	},
	text       : {
		fontSize : 30
	},
	avatar     : {
		width  : 100,
		height : 100
	},
	instructor : {
		/* fontWeight : 700, */
		fontSize   : 20
	}

});

export default InstructoresList;
