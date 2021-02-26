import React, { useState } from 'react';
import firebase from '../../database/database.js';
import { Icon } from 'react-native-elements'
import { TextInput, ActivityIndicator } from 'react-native';

import {
  Contenedor,
  Encabezado,
  ConTitle,
  TextTitle,
  BotonLog,
  TextButton,
  ContGeneral,
  TituloGen,
  TextGen,
  ContsInputs,
  InputsIndv,
} from './StyledRegister';

const RegisterUser = ({navigation}) => {
	const [loading, setLoading] = useState(false)
	const initalState = {
		password         : '',
		password_checked : '',
		email            : ''
	};

	const [
		state,
		setState
	] = useState(initalState);

	const handleChangeText = (value, name) => {
		setState({ ...state, [name]: value });
	};

	const saveNewUser = async () => {
		if (state.email === '') {
			alert('Ingrese un email');
		}
		if (state.password === '') {
			alert('Ingrese un password');
		}
		if (state.password_checked === '') {
			alert('Verifique contraseña');
		}
		if (state.password !== state.password_checked) {
			alert('Las claves son coinciden');
		}
		else {
			setLoading(true)
			try {
				let snapshot = await firebase.db.collection('invited users').where("email", "==", state.email).get()
				if(!snapshot.empty){
					firebase.firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
				/* 	navigation.navigate('SelectTime', {email: state.email}) */
					navigation.navigate('Formulario Datos', {email: state.email, instructor: false, cohorte: false})
				}else{
					let newSnapshot = await firebase.db.collection('invited instructor').where("email", "==", state.email).get()
					if(!newSnapshot.empty){
						firebase.firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
						navigation.navigate('Formulario Datos', {email: state.email, instructor: true, cohorte: false})
					}
				}
			} catch (error) {
				setLoading(false)
				console.log(error);
				alert('Error');
			}
		}
	};

	return loading ? <ActivityIndicator size="large"/> : (
		<Contenedor>
			{/* Email Input */}
			<Encabezado>
        <ConTitle
          onPress={() => navigation.navigate('Home')}
        >
          <Icon
						solid={true}
            name="chevron-left"
						type="font-awesome-5"
          />
          <TextTitle>Home</TextTitle>
        </ConTitle>
			</Encabezado>
			<ContGeneral>
        <TituloGen>Invertimos en tu educación</TituloGen>
        <TextGen>Haz sido invitado para ser parte de la familia de Henry, en la Cohorte 08, Completa tu registro para finalizar el proceso</TextGen>
        
        <ContsInputs>
          <InputsIndv >
            <TextInput
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={(value) => handleChangeText(value, 'email')}
              value={state.email}
            />
          </InputsIndv>

          {/* Input Password*/}
          <InputsIndv >
            <TextInput
              secureTextEntry={true} 
              placeholder="Ingrese una password"
              onChangeText={(value) => handleChangeText(value, 'password')}
              value={state.password}
            />
          </InputsIndv>
          {/* Input Password Checked*/}
          <InputsIndv >
            <TextInput
              secureTextEntry={true} 
              placeholder="Validar password"
              onChangeText={(value) => handleChangeText(value, 'password_checked')}
              value={state.password_checked}
            />
          </InputsIndv>
          <BotonLog 
            onPress={() => saveNewUser()}>
            <TextButton>ENVIAR</TextButton>
          </BotonLog>
        </ContsInputs>
      </ContGeneral>
    </Contenedor>
	);
};

export default RegisterUser;
