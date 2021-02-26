import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements'
import firebase from '../../database/database'
import {
    Contenedor,
    Encabezado,
    ConTitle,
    TextTitle,
    BotonLog,
    TextButton,
    ContGeneral,
    TituloGen,
  } from './StyledRegister'

const selectTime = (props) => {
    const {email} = props.route.params
    const [cohortes, setCohortes] = useState('')
    const [modal, setModal] = useState('')
    const [loading, setLoading] = useState(true)
    const dbRef = firebase.db.collection('cohorte')

    useEffect(() => {
        dbRef.onSnapshot(snap => {
            let cohorteFull = {}
            let cohortePart = {}
            snap.docs.forEach(doc => {
                const {nombre, comienzo, modalidad} = doc.data()
                const cohorte = {
                    nombre, comienzo, modalidad, id: doc.id
                }
                if(modalidad === 'Full Time'){
                    if(!Object.keys(cohorteFull).length) cohorteFull = cohorte
                    else if(Number(cohorteFull.nombre) < Number(nombre)) cohorteFull = cohorte
                }
                if(modalidad === 'Part Time'){
                    if(!Object.keys(cohortePart).length) cohortePart = cohorte
                    else if(Number(cohortePart.nombre) < Number(nombre)) cohortePart = cohorte
                }
            })
            setCohortes({
                fullTime: cohorteFull,
                partTime: cohortePart
            })
        })
        setLoading(false)
    }, [])

    const toForm = async () => {
        setLoading(true)
        if(!modal) return alert('Selecciona una modalidad')
        else{
            let newDate = new Date()
            newDate = newDate.toDateString().split(" ")
            let month = getMonthOfDate(newDate[1])
            let day = newDate[2]
            let age = newDate[3]
            let start = cohortes[modal].comienzo.split("/")
            if(start[2] >= age){
                if(start[1] > month){
                    props.navigation.navigate('Formulario Datos', {
                        email: email,
                        instructor: false,
                        cohorte: cohortes[modal].nombre
                    }) 
                }else if(start[1] === month){
                    if(start[0] > day){
                        props.navigation.navigate('Formulario Datos', {
                            email: email,
                            instructor: false,
                            cohorte: cohortes[modal].nombre
                        }) 
                    }else return alert('Tu cohorte todavia no esta preparado')
                }else return alert('Tu cohorte todavia no esta preparado')
            }else return alert('Tu cohorte todavia no esta preparado')
        }
        setLoading(false)
    }

    const getMonthOfDate = name => {
        return ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(name) / 3 + 1)
    }

	return loading ? <ActivityIndicator size="large"/> : (
        <Contenedor>
            <Encabezado>
                <ConTitle onPress={() => props.navigation.navigate('Home')}>
                    <Icon
                    solid={true}
                    name="chevron-left"
                    type="font-awesome-5"
                    />
                    <TextTitle>Home</TextTitle>
                </ConTitle>
            </Encabezado>
            <ContGeneral>
                <TituloGen>Que modalidad quieres cursar?</TituloGen>
                <BotonLog style={modal === 'fullTime' && {backgroundColor: '#e5e500'}} onPress={() => setModal('fullTime')}>
                    <TextButton>
                        Full Time
                    </TextButton>
                </BotonLog>
                <BotonLog style={modal === 'partTime' && {backgroundColor: '#e5e500'}} onPress={() => setModal('partTime')}>
                    <TextButton>
                        Part Time
                    </TextButton>
                </BotonLog>
                <BotonLog onPress={toForm}>
                    <TextButton>
                        Continuar
                    </TextButton>
                </BotonLog>
            </ContGeneral>
        </Contenedor>
	)
}

export default selectTime
