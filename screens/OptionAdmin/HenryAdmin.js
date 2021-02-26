import React from 'react';
import { Text } from 'react-native';
import AdminHeader from './AdminHeader';
import AdminNavBar from './AdminNavBar';
import {
	Contenedor,
	ContStudents,
	Options,
	BackImg,
	TituloCard,
  ContText,
  ImgSise,
  LogoSise,
	ContMinf,
	IconContent,
	ImgMinf
} from './styledAdmin';
import Footer from '../Footer/Footer';
let card1 = require('../../src/assets/img/imgCard1.png');

const HenryAdmin = (props) => {

	return (
		<Contenedor>
			<AdminHeader navigation={props.navigation} /* info={info} */ /> 
			<AdminNavBar navigation={props.navigation} />
			<ContStudents>
				<Options onPress={() => props.navigation.navigate('Nuevo Henry', {instructor: false})}>
					<BackImg>
						<ImgSise source={card1} />
					</BackImg>
					<ContText>
						<TituloCard>Invitar un nuevo Henry</TituloCard>
						<Text>Invita a un nuevo henry a una nueva cohorte </Text>
					</ContText>
				</Options>

				<Options onPress={() => props.navigation.navigate('Lista de Estudiantes')}>
					<BackImg>
						<ImgSise source={card1} />
					</BackImg>
					<ContText>
						<TituloCard>Ver Estudiantes</TituloCard>
						<Text>Muestra el listado de alumnos activos y antiguos </Text>
					</ContText>
				</Options>
			</ContStudents>
			{/* Menu inferior General */}
			<Footer navigation={props.navigation} />
		</Contenedor>
	);
};

export default HenryAdmin;
