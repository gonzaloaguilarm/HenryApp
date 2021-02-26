import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native';
import MsgRegistro from './MsgRegistro'

import {
  Contenedor,
  Encabezado,
  ConTitle,
  TextTitle,
  BotonLog,
  TextButton,
  ContGeneral,
  TituloGen,
  ScrollInView,
  ContsFormIn,
  InputsIndv,
} from './StyledRegister';
import firebase from '../../database/database';

const FormularioDatos = ({navigation, route}) => {
  const [goHome, setGoHome] = useState(false)
  const { instructor, cohorte } = route.params

  const initalState = {
    first_name: '',
    last_name: '',
    email: route.params.email,
    phone: '',
    dni: '',
    nacionalidad: '',
    github: '',
    rol: instructor ? 'instructor' : 'student',
    cohorte: cohorte ? cohorte : '',
    photo:
      'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg'
  };

  const [
    state,
    setState
  ] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    for (var i = 0; state.length < i; i++) {
      console.log(state[i]);
    }
    if (state.first_name === '') {
      alert('Ingrese un nombre');
    }
    if (state.last_name === '') {
      alert('Ingrese un apellido');
    }
    if (state.dni === '') {
      alert('Ingrese un numero dni/cedula');
    }
    if (state.nacionalidad === '') {
      alert('Ingrese una nacionalidad');
    }
    if (state.github === '') {
      alert('Ingrese una cuenta de github');
    }
    else {
      try {
        await firebase.db.collection('users').add({
          first_name: state.first_name,
          last_name: state.last_name,
          email: state.email,
          phone: state.phone,
          dni: state.dni,
          nacionalidad: state.nacionalidad,
          github: state.github,
          rol: state.rol,
          photo: state.photo,
          cohorte: state.cohorte
        });
        navigation.navigate('Mensaje Registro')
        /* setGoHome(true) */
      } catch (error) {
        console.log(error);
      }
    }
  };

  return goHome ? (
    {/* <MsgRegistro navigation={navigation}/> */}
  ) : (
      <Contenedor>
        {/* Email Input */}
        <Encabezado>
          <ConTitle
            onPress={() => props.navigation.navigate('Home')}
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
          <TituloGen>Completa el registro</TituloGen>
          <ContsFormIn>
            <ScrollInView>
              {/* Input Nombre*/}
              <InputsIndv >
                <TextInput
                  placeholder="Nombre"
                  onChangeText={(value) => handleChangeText(value, 'first_name')}
                  value={state.first_name}
                />
              </InputsIndv>
              {/* Input Apellidos*/}
              <InputsIndv >
                <TextInput
                  placeholder="Apellidos"
                  onChangeText={(value) => handleChangeText(value, 'last_name')}
                  value={state.last_name}
                />
              </InputsIndv>
              {/* Input Email*/}
              <InputsIndv >
                <TextInput
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  placeholder="Email"
                  value={state.email}
                />
              </InputsIndv>
              {/* Input Telefono/Celular*/}
              <InputsIndv >
                <TextInput
                  placeholder="Telefono/Celular"
                  keyboardType="name-phone-pad"
                  onChangeText={(value) => handleChangeText(value, 'phone')}
                  value={state.phone}
                />
              </InputsIndv>
              {/* Input Numero DNI/Cedula de identidad*/}
              <InputsIndv >
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Numero DNI/Cedula de identidad"
                  onChangeText={(value) => handleChangeText(value, 'dni')}
                  value={state.dni}
                />
              </InputsIndv>
              {/* Input Link a cuenta de Github*/}
              <InputsIndv >
                <RNPickerSelect
                  onValueChange={(value) => handleChangeText(value, 'nacionalidad')}
                  value={state.nacionalidad}
                  items={[
                    { label: 'Argentina', value: 'Argentina' },
                    { label: 'Colombia', value: 'Colombia' },
                    { label: 'Venezuela', value: 'Venezuela' },
                    { label: 'Chile', value: 'Chile' },
                    { label: 'Uruguay', value: 'Uruguay' },
                    { label: 'Peru', value: 'Peru' },
                    { label: 'Bolivia', value: 'Bolivia' },
                    { label: 'Mexico', value: 'Mexico' },
                    { label: 'Otros', value: 'Otros' },
                  ]}
                />
              </InputsIndv>
              <InputsIndv >
                <TextInput
                  keyboardType="web-search"
                  placeholder="Link a cuenta de Github"
                  onChangeText={(value) => handleChangeText(value, 'github')}
                  value={state.github}
                />
              </InputsIndv>
              {/* Input Link a cuenta de Github*/}
            </ScrollInView>
              <BotonLog
                onPress={() => saveNewUser()}>
                <TextButton>Completar</TextButton>
              </BotonLog>
           
           
          </ContsFormIn>
        </ContGeneral>
      </Contenedor>
    );
};

export default FormularioDatos;
