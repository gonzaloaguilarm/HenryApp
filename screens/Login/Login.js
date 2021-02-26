import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	Contenedor,
	Encabezado,
	ContGen,
	Back,
	TituloPrin,
	ContInputs,
	InpText,
	BorderBotInput,
	BotonLog,
	TextButton,
	ContSocialRed,
	IconSocialRed
} from './styledLogin';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from '../../database/database.js';

import * as Google from 'expo-google-app-auth';

import {useDispatch } from 'react-redux';
import {login} from '../../src/action';


const Login = ({ navigation }) => {
	const dispatch = useDispatch()

	const initalState = {
		password : '',
		email    : '',
	};

	const [
		users,
		setUsers
	] = useState([]);
	const [
		invitedUsers,
		setInvitedUsers
	] = useState([]);

	const [
		state,
		setState
	] = useState(initalState);

	useEffect(() => {
		firebase.db.collection('invited users').onSnapshot((snap) => {
			const invitados = [];
			snap.docs.forEach((doc) => {
				const { email } = doc.data();
				invitados.push({
					email
					
				});
			});
			setInvitedUsers(invitados);
			
		});
		firebase.db.collection('users').onSnapshot((snap) => {
			const estudiantes = [];
			snap.docs.forEach((doc) => {
				const { email, rol, first_name, last_name, nacionalidad, photo, dni, github, phone, cohorte, grupo } = doc.data();
				estudiantes.push({
					cohorte,
					grupo,
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
			});
			setUsers(estudiantes);
		});
	}, []);

	const handleChangeText = (value, name) => {
		setState({ ...state, [name]: value });
	};

	const loginManual = async () => {
		if (state.email === '' || state.password === '') {
			if (state.email === '' || !state.email.includes('@')) {
				alert('Ingrese un email válido');
			}
			if (state.password === '') {
				alert('Ingrese un password');
			}
		}
		else {
			var found = users.find((user) => user.email === state.email);
			if (found) {
				firebase.firebase
					.auth()
					.signInWithEmailAndPassword(state.email, state.password)
					.then((result) => {
						dispatch(login(found))
						if (found.rol === 'admin' || found.rol === 'instructor') {
							navigation.navigate('Henry Admin');
						}
						else {
							navigation.navigate('Menu Usuario');
						}
					})
					.catch((error) => {
						alert(error);
					});
			}
			else {
				alert('el usuario no se encuentra en la base de datos de estudiantes de Henry');
			}
		}
	};

	const loginGoogle = async () => {

		console.log('entre')
			try {
				const result = await Google.logInAsync({
					androidClientId:"317747874645-ugo92c3m57drffqse6gfl25u1fv2g8o2.apps.googleusercontent.com",
					scopes: ['profile', 'email'],
				});
				if (result.type === 'success') {
					console.log(result.user.email)
					var found = invitedUsers.find((user) => user.email === result.user.email);
					var found2 = users.find((user) => user.email === result.user.email);
					dispatch(login(found2))
					if (!found) {

					throw 'el email no se encuentra en la base de datos de estudiantes invitados :(';
				}
				if(!found2){

					navigation.navigate('RegisterUser', { info: found2 });
				}
				if (found2) {
					if (found.rol === 'admin') {
						navigation.navigate('Henry Admin', { info: found2 });
					}
					else {
						navigation.navigate('Menu Usuario', { info: found2 });
					}
				}
				} else {
					console.log('canceled');
				}
			} catch (e) {
				console.log('error',e)
			}
		// console.log('se ejecuta la funcionLoginGoogle');
		// firebase.firebase
		// 	.auth()
		// 	.signInWithPopup(new firebase.firebase.auth.GoogleAuthProvider())
		// 	.then((result) => {
		// 		console.log(result.user.email);
		// 		console.log(invitedUsers);
		// 		var found = invitedUsers.find((user) => user.email === result.user.email);
		// 		var found2 = users.find((user) => user.email === result.user.email);
		// 		if(!found){
		// 			throw 'el email no se encuentra en la base de datos de estudiantes invitados :(';
		// 		}
		// 		if(!found2){
		// 			navigation.navigate('RegisterUser', { info: found2 });
		// 		}
		// 		if (found2) {
		// 			if (found.rol === 'admin') {
		// 				navigation.navigate('Henry Admin', { info: found2 });
		// 			}
		// 			else {
		// 				navigation.navigate('Menu Usuario', { info: found2 });
		// 			}
		// 		}
				
		// 	})
		// 	.catch((error) => {
		// 		alert(error);
		// 	});
	};

	const loginGithub = async () => {
		console.log('se ejecuta la funcionLoginGithub');
		firebase.firebase
			.auth()
			.signInWithPopup(new firebase.firebase.auth.GithubAuthProvider())
			.then((result) => {
				var found = invitedUsers.find((user) => user.email === result.user.providerData[0].email);
				var found2 = users.find((user) => user.email === result.user.providerData[0].email);
				if (!found) {
					throw 'el email no se encuentra en la base de datos de estudiantes invitados :(';
				}
				if (!found2) {
					navigation.navigate('RegisterUser', { info: found2 });
				}
				if (found2) {
					if (found.rol === 'admin') {
						navigation.navigate('Henry Admin', { info: found2 });
					}
					else {
						navigation.navigate('Menu Usuario', { info: found2 });
					}
				}
			})
			.catch((error) => {
				alert(error);
			});
	};
	const goToRegister = () => {
		navigation.navigate('RegisterUser');
	};

	return (
		<Contenedor>
			{/* Encabezado Back */}
			<Encabezado>
				{/* <FontAwesomeIcon icon={faArrowLeft} size={18} /> */}
        <Icon 
          name = 'chevron-left'
          type = 'font-awesome-5'
          onPress={() => navigation.navigate('Home')}
        />
				<Back onPress={() => navigation.navigate('Home')}>Regresar</Back>
			</Encabezado>
			<ContGen>
				<TituloPrin>Bienvenido a Henry World</TituloPrin>
				<ContInputs>
					{/* Email Input */}
					<BorderBotInput>
						<InpText
							textContentType="emailAddress"
							keyboardType="email-address"
							placeholder="Ingresa el email"
							onChangeText={(value) => handleChangeText(value, 'email')}
							value={state.email}
						/>
					</BorderBotInput>
					{/* Input Password*/}
					<BorderBotInput>
						<InpText
							secureTextEntry={true}
							placeholder="Ingrese una password"
							onChangeText={(value) => handleChangeText(value, 'password')}
							value={state.password}
						/>
					</BorderBotInput>
				</ContInputs>

				<BotonLog onPress={() => loginManual()}>
					<TextButton>Iniciar Sesion</TextButton>
				</BotonLog>

				<ContSocialRed style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<Text> O inicia sesión con </Text>
					<IconSocialRed>
						<TouchableOpacity onPress={() => loginGoogle()}>
							{/* <FontAwesomeIcon icon={faGoogle} size={20} /> */}
              <Icon 
                name = 'google'
                type = 'font-awesome-5'
                size = {20}
              /> 
						</TouchableOpacity>
						<TouchableOpacity onPress={() => loginGithub()}>
							{/* <FontAwesomeIcon icon={faGithub} size={20} /> */}
              {/* <Icon 
                name = 'github'
                type = 'font-awesome-5'
                size = {20}
              />  */}
						</TouchableOpacity>
					</IconSocialRed>
				</ContSocialRed>
				{/* 
		<TouchableOpacity>
		<Text style={styles.btntext} onPress={() => goToRegister()}>
			{' '}
			Crear Cuenta {' '}
		</Text>
		</TouchableOpacity> */}
			</ContGen>
		</Contenedor>
	);
};

export default Login;
