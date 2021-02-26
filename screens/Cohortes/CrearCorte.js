import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import firebase from '../../database/database'
//import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePicker from "react-native-modal-datetime-picker";
import Footer from '../Footer/Footer';

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
  ContBtnOut,
  IconContent,
  ImgMinf,
  ImgSise,
  TextButtonOp2,
  ContPirnTable,
  TextContTable,
  LogoSise,
  BotonLog,
  TextButton
} from './StyledCohorteList';
let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');


const CrearCohorte = (props) => {
  
  //Botones Full Time - Part Time
  const [index, setIndex] = useState(1)
  const buttons = ['Full Time', 'Part Time']
 
  const updateIndex = (index) => {
    setIndex(index)
    handleChangeText(buttons[index], 'modalidad')
  }

  //Modal Calendario
  const [isVisibleStart, setIsVisibleStart] = useState(false)
  const [isVisibleEnd, setIsVisibleEnd] = useState(false)
  const showDateTimePicker = (date) => {
    date === 'start' ? setIsVisibleStart(true) : setIsVisibleEnd(true)
  };
  const hideDateTimePicker = () => {
    setIsVisibleStart(false);
    setIsVisibleEnd(false)
  };
  const handleDatePickedStart = (date) => {
    let newDate = date.toString().split(" ")
    let returnDate = [newDate[2], getMonthOfDate(newDate[1]), newDate[3]]
    handleChangeText(returnDate.join("/"), 'fecha_de_inicio')
    hideDateTimePicker();
  };
  const handleDatePickedEnd = (date) => {
    let newDate = date.toString().split(" ")
    let returnDate = [newDate[2], getMonthOfDate(newDate[1]), newDate[3]]
    handleChangeText(returnDate.join("/"), 'fecha_de_finalizacion')
    hideDateTimePicker();
  };
  const getMonthOfDate = name => {
    return ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(name) / 3 + 1)
  }

  const initalState = {
    numero_de_cohorte: '',
    modalidad: '',
    fecha_de_inicio: '00/00/0000',
    fecha_de_finalizacion: '00/00/0000',
    instructor: '',
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
    console.log('state', state)
  };

  const saveNewCohorte = async () => {
    for (var i = 0; state.length < i; i++) {
      console.log(state[i]);
    }
    if (state.modalidad === '') {
      alert('Ingrese modalidad');
    }
    if (state.fecha_de_inicio === '') {
      alert('Ingrese fecha de inicio');
    }
    if (state.fecha_de_finalizacion === '') {
      alert('Ingrese fecha de finalizacio');
    }
    if (state.instructor === '') {
      alert('Ingrese un instructor');
    }
    else {
      try {
        await firebase.db.collection('cohorte').add({
          nombre: state.numero_de_cohorte,
          modalidad: state.modalidad,
          comienzo: state.fecha_de_inicio,
          fin: state.fecha_de_finalizacion,
          instructor: state.instructor,
        });
        props.navigation.navigate('Mensaje Cohorte');
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <Contenedor>
      <Encabezado >
        <ConTitle
          onPress={() => props.navigation.goBack()}
        >
          <Icon
            solid={true}
            name="chevron-left"
            type="font-awesome-5"
          />
          <TextTitle>Atras</TextTitle>
        </ConTitle>
      </Encabezado>
      <Options>
        <BackImg>
          <ImgSise source={card1} />
        </BackImg>
        <ContText>
          <TituloCard>Crear Cohorte</TituloCard>
          <Text>Crea un nuevo espacio para el desarrollo de actividades académicas</Text>
        </ContText>
      </Options>
      <ContGeneral>
        <ContListGen>
          <View>
            <TextContTable>COHORTE N°</TextContTable>
            <RNPickerSelect
              onValueChange={(value) => handleChangeText(value, 'numero_de_cohorte')}
              value={state.value}
              items={[
                { label: '01', value: '01' },
                { label: '02', value: '02' },
                { label: '03', value: '03' },
                { label: '04', value: '04' },
                { label: '05', value: '05' },
                { label: '06', value: '06' },
                { label: '07', value: '07' },
                { label: '08', value: '08' },
                { label: '09', value: '09' },
                { label: '10', value: '10' },
                { label: '11', value: '11' },
              ]}
            />
          </View>

          <ContPirnTable>
            <View>
              <TextContTable>MODALIDAD</TextContTable>
            </View>
            <ContBtnOut >
              <BotonLog
                onPress={() => updateIndex(0)}
                style={index === 0 && { border: '2px solid black' }}>
                <TextButtonOp2>Full Time</TextButtonOp2>
              </BotonLog>
              <BotonLog
                onPress={() => updateIndex(1)}
                style={index === 1 && { border: '2px solid black' }} >
                <TextButtonOp2>Part Time</TextButtonOp2>
              </BotonLog>
            </ContBtnOut>
          </ContPirnTable>

          <ContPirnTable>
            <View>
              <TextContTable>FECHA DE INICIO</TextContTable>
            </View>
            <View>
              <Text>{state.fecha_de_inicio}</Text>
              <Icon
                name='calendar-sharp'
                type='ionicon'
                size={40}
                onPress={() => showDateTimePicker('start')} />
              <DateTimePicker
                mode='date'
                display="default"
                style={{ width: 320, backgroundColor: "white" }}
                isVisible={isVisibleStart}
                name='fecha_de_inicio'
                onConfirm={val => handleDatePickedStart(val)}
                onCancel={hideDateTimePicker}
              />
            </View>
          </ContPirnTable>

          <ContPirnTable>
            <View>
              <TextContTable>FECHA DE FINALIZACION</TextContTable>
            </View>
            <View>
              <Text>{state.fecha_de_finalizacion}</Text>
              <Icon
                name='calendar-sharp'
                type='ionicon'
                size={40}
                onPress={() => showDateTimePicker('end')}
              />
              <DateTimePicker
                mode='date'
                display="default"
                style={{ width: 320, backgroundColor: "white" }}
                isVisible={isVisibleEnd}
                name='fecha_de_finalizacion'
                onConfirm={val => handleDatePickedEnd(val)}
                onCancel={hideDateTimePicker}
              />
            </View>
          </ContPirnTable>

          <View>
            <View>
              <TextContTable>INSTRUCTOR</TextContTable>
            </View>
            <RNPickerSelect
              onValueChange={(value) => handleChangeText(value, 'instructor')}
              value={state.value}
              items={[
                { label: 'Franco Etcheverry', value: 'Franco Etcheverry' },
                { label: 'Toni Tralice', value: 'Toni Tralice' },
              ]}
            />
          </View>

          <BotonLog onPress={saveNewCohorte}>
            <TextButton onPress={saveNewCohorte}>CREAR COHORTE</TextButton>
          </BotonLog>
        </ContListGen>
      </ContGeneral>
      {/* Menu inferior General */}
			<Footer navigation={props.navigation}/>
    </Contenedor>
  )
};

export default CrearCohorte;
