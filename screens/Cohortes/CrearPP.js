import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';
//Componentes Estilizados
import { Icon, ListItem, Text } from 'react-native-elements';
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
    ListAdd,
    ContBtnOut,
    ListText,
    ContTextList,
    ImgSise,
    TextButtonOp2,
    ContPirnTable,
    TextContTable,
    LogoSise,
    BotonLog,
    TextButton,
    BodyUnitItem
} from './StyledCohorteList';

//Imagen
let card1 = require('../../src/assets/img/imgCard1.png');

//Base de datos
import firebase from '../../database/database';


const CrearPp = (props) => {
    const grupo1 = []
    const grupo2 = []
    const grupo3 = []
    const grupo4 = []
    const grupo5 = []
    const [alumnos, setAlumnos] = useState([])
    const [alumnosSinPP, setAlumnosSinPP] = useState({
        isVisible: false,
        alumnos
    })
    const [prevAlumn, setPrevAlumn] = useState({
        alumno: ''
    })

    useEffect(() =>{
		firebase.db.collection('users').where('cohorte', '==', props.route.params.cohorte).onSnapshot((snap) => {
			const estudiantes = [];
            const SinPP = []
			snap.docs.forEach((doc) => {
				const { first_name, last_name, pair_programing } = doc.data();
				if(pair_programing === undefined){
                    SinPP.push({
                        first_name,
                        last_name,
                        id           : doc.id                        
                    })
                }
                estudiantes.push({
					first_name,
					last_name,
					id           : doc.id
				});
			});
			setAlumnos(estudiantes)
            setAlumnosSinPP({
                ...alumnosSinPP,
                alumnos: SinPP
            })
            
		});
    }, [])
    const asignarAleatoriamente = () => {
        if(alumnos.length === 0){
            return alert('No hay alumnos')
        }
        if(alumnos.length < 6){
            alumnos.forEach((alumno) =>{
                firebase.db.collection("users").doc(alumno.id).update({
                    pair_programing: "grupo1"
                })
                grupo1.push(alumno)
            })
            firebase.db.collection('pair programing').add({
                cohorte: props.route.params.cohorte,
                user : grupo1
            })  
        }
        if(alumnos.length === 30){
            while(grupo1.length < 7){
                grupo1.push(alumnos.pop())
                firebase.db.collection('pair programing').add({
                    cohorte: props.route.params.cohorte,
                    user : grupo1
                }) 
            }
            while(grupo2.length < 7){
                grupo2.push(alumnos.pop())
                firebase.db.collection('pair programing').add({
                    cohorte: props.route.params.cohorte,
                    user : grupo2
                }) 
            }
            while(grupo3.length < 7){
                grupo3.push(alumnos.pop())
                firebase.db.collection('pair programing').add({
                    cohorte: props.route.params.cohorte,
                    user : grupo3
                }) 
            }
            while(grupo4.length < 7){
                grupo4.push(alumnos.pop())
                firebase.db.collection('pair programing').add({
                    cohorte: props.route.params.cohorte,
                    user : grupo4
                }) 
            }
            while(grupo5.length < 7){
                grupo5.push(alumnos.pop())
                firebase.db.collection('pair programing').add({
                    cohorte: props.route.params.cohorte,
                    user : grupo5
                }) 
            }
        }
    }
    const mostrarView = (alum) => {
        setAlumnosSinPP({
            ...alumnosSinPP,
            isVisible: true
        })
        setPrevAlumn({
            alumno: alum
        })
    }
    const asignarGrupo = (e) => {
        [e].push(prevAlumn.alumno)
        setAlumnosSinPP({
            ...alumnosSinPP,
            isVisible: false
        })
        firebase.db.collection('pair programing').add({
            cohorte: props.route.params.cohorte,
            user : [e]
        }) 
        console.log(prevAlumn.alumno.id)
        firebase.db.collection("users").doc(prevAlumn.alumno.id).update({
            pair_programing: "grupo1"
        })
    }
    return(
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
                <TextTitle>Grupos PP</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise source={card1} />
                </BackImg>
                <ContText>
                    <TituloCard>Crear Grupos de Pair Programing</TituloCard>
                    <Text>Puedes ver y Crear grupos de Pair Programing</Text>
                </ContText>
            </Options>
            <ContGeneral>
            <ContListGen>
            {
                alumnosSinPP.alumnos.map((alum, i) =>(
                  <ListItem key={i} style={{ width: '100%', }}>
                    <ListAdd >
                      <ContTextList>
                        <ListText>{`${alum.last_name} ${alum.first_name}`}</ListText>
                      </ContTextList>
                      <ContBtnOut >
                          <BotonLog onPress={() => mostrarView(alum)}>
                            <TextButton>Agregar a un grupo</TextButton>
                          </BotonLog>
                        </ContBtnOut>
                    </ListAdd>
                  </ListItem>
                ))
            }

                <BotonLog onPress={() => asignarAleatoriamente()}>
                    <TextButton onPress={() => asignarAleatoriamente()}>Crear grupos Pair Programing</TextButton>
                </BotonLog>
            </ContListGen>
            </ContGeneral>
            {   
              alumnosSinPP.isVisible && 
              <View style={s.feed}>
                <View style={s.container_feed}>
                        <Button title='Grupo1' name="Grupo1" onPress={() => asignarGrupo("Grupo1")}/>
                        <Button title='Grupo2' name="Grupo2" onPress={() => asignarGrupo("Grupo2")}/>
                        <Button title='Grupo3' name="Grupo3" onPress={() => asignarGrupo("Grupo3")}/>
                        <Button title='Grupo4' name="Grupo4" onPress={() => asignarGrupo("Grupo4")}/>
                        <Button title='Grupo5' name="Grupo5" onPress={() => asignarGrupo("Grupo5")}/>

                </View>
              </View>
            }
            {/* Menu inferior General */}
			      <Footer navigation={props.navigation}/>
        </Contenedor>
    )
}

export default CrearPp

const s = StyleSheet.create({
    feed: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, .2)",
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "space-evenly",
        alignContent: "center",
        zIndex: 1000
    },
    container_feed: {
        width: "85%",
        maxHeight: "70%",
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        margin: "auto",
        borderRadius: 8,
        padding: 50,
    },
})