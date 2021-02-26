import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import firebase from '../../database/database.js';

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
  IconContent,
  ImgMinf,
  ImgSize,
  LogoSise,
} from './StyledEstudents';
import Footer from '../Footer/Footer';
let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');
let imgRemplazo = require('../../src/assets/img/imgUser.jpg');

const StudentList = ({ navigation }) => {
	const [
		users,
		setUsers
	] = useState([]);

	useEffect(() => {
		firebase.db.collection('users').onSnapshot((snap) => {
			const estudiantes = [];
			snap.docs.forEach((doc) => {
				const { email, rol, first_name, last_name, nacionalidad, photo, dni, github, phone } = doc.data();
				if (rol === 'pm' || rol === 'student') {
					estudiantes.push({
						email,
						rol,
						first_name,
						last_name,
						nacionalidad, 
						photo,
						dni,
						github,
						phone,
						id           : doc.id
					});
				}
			});

			setUsers(estudiantes);
		});
	}, []);
	return (
		<Contenedor >
      <Encabezado >
			  <ConTitle
          onPress={() => navigation.goBack()}
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
          <ImgSize source={card1} />
        </BackImg>
        <ContText>
          <TituloCard>Lista de Estudiantes</TituloCard>
          <Text>Muestra el listado de alumnos activos y antiguos de Henry</Text>
        </ContText>
      </Options> 
      <ContGeneral>
        <ContListGen>
            {users.map((student, i) => (
              <ListItem key={i} bottomDivider>
                {!student.photo ? (
                  <Avatar
                    style={styles.avatar}
                    source={imgRemplazo}
                    onPress={() => navigation.navigate('Perfil', { info: student })}
                  />
                ) : (
                  <Avatar
                    style={styles.avatar}
                    source={{ uri: student.photo }}
                    onPress={() => navigation.navigate('Perfil', { info: student })}
                  />
                )}
                <ListItem.Content>
                  <ListItem.Title
                    style={styles.student}
                    onPress={() => navigation.navigate('Perfil', { info: student })}
                  >
                    {student.last_name},{student.first_name}
                  </ListItem.Title>
                  {/* <ListItem.Title>{student.nombre}</ListItem.Title> */}
                  <ListItem.Subtitle>{student.dni}</ListItem.Subtitle>
                  <ListItem.Subtitle>{student.email}</ListItem.Subtitle>
                  {/* <ListItem.Subtitle style={styles.cohorte}>Cohorte # {student.id_cohorte}</ListItem.Subtitle> */}
                </ListItem.Content>
              </ListItem>
            ))}
        </ContListGen>
      </ContGeneral>
			{/* Menu inferior General */}
			<Footer navigation={navigation}/>
		</Contenedor>
	);
};

const styles = StyleSheet.create({
	container  : {
		flex : 1
	},
	header     : {
		display         : 'flex',
		flexDirection   : 'row',
		alignItems      : 'center',
		backgroundColor : '#e5e500'
	},
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
	estudiante : {
		/* fontWeight : 700, */
		fontSize   : 20
	}
});

export default StudentList;
