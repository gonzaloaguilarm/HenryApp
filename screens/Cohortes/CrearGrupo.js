import React, {useEffect, useState} from 'react'; 
import { StyleSheet, View, Button, ScrollView } from 'react-native';
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
    BackInOut,
    ContBtnOut,
    BackInIn,
    TextPrin,
    ImgSise,
    ListAdd,
    ListText,
    ContTextList,
    LogoSise,
    BotonLog,
    TextButton,
    BodyUnitItem
} from './StyledCohorteList';

//Imagen
let card1 = require('../../src/assets/img/imgCard1.png');

//Base de datos
import firebase from '../../database/database';



const CrearGrupos = (props) => {
    const {nombre, id} = props.route.params.cohorte
    const [isVisible, setIsVisible] = useState({
        grupo: false,
        alumnos: false,
        pm: false,
        datosFinales: false,
        noHayGrupos: true
    })
    const [grupos, setGrupos] = useState([])
    const [PMs, setPMS] = useState([])
    const [alumnos, setAlumnos] = useState([])
    const alumnosInsertados = []
    const [state, setState] = useState({
        pms: '',
        alumnos: []
    })
    useEffect(() =>{
		firebase.db.collection('cohorte').doc(id).collection('grupos').onSnapshot((snap) => {
			const grupo = [];
			snap.docs.forEach((doc, i) => {
                const {alumnos, pms} = doc.data()
                if(alumnos === undefined && pms === undefined){
                    setIsVisible({
                        ...isVisible,
                        noHayGrupos: true
                    })
                    setGrupos(grupo)
                }else{
                grupo.push({
                    alumnos,
                    pms
                })}
			}); 
            setGrupos(grupo)
		});
        firebase.db.collection('users').where('rol', '==', 'pm').onSnapshot((snap) => {
			const pms= [];
			snap.docs.forEach((doc) => {
                const {last_name, first_name } = doc.data()
                pms.push({
                    last_name,
                    first_name,
                    id: doc.id
                })
			}); 
            setPMS(pms)
		});
        firebase.db.collection('users').where('rol', '==', 'student').onSnapshot((snap) => {
			const students= [];
			snap.docs.forEach((doc) => {
                const {last_name, first_name, cohorte, grupo} = doc.data()
                if(cohorte === nombre && grupo === undefined){
                        students.push({
                            last_name,
                            first_name,
                            idAlumn: doc.id
                        })
                }

			}); 
            setAlumnos(students)
		});
    }, [])
    const CrearGrupos = async () =>{
        setIsVisible({
            ...isVisible,
            grupo : false
        })
        await firebase.db.collection('cohorte').doc(id).collection('grupos').add({
            numero: grupos.length + 1,
            pms: state.pms,
            alumnos: alumnosInsertados
        })
         alumnosInsertados.forEach((al, i) => {
            console.log(al.alumn)
            console.log(al.alumn.idAlumn)
            console.log(grupos.length)
             firebase.db.collection('users').doc(al.alumn.idAlumn).update({
                grupo: grupos.length
            }) 
			}); 
    }
     return(
         <Contenedor>
             <Encabezado>
                 <ConTitle
                    onPress ={() => props.navigation.goBack()}
                 >
                     <Icon
                        solid={true}
                        name="chevron-left"
                        type="font-awesome-5"
                     />
                     <TextTitle> Grupos </TextTitle>
                 </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise source={card1}/>
                </BackImg>
                <ContText>
                    <TituloCard> Crear Grupos y asignar PM's</TituloCard>
                    <Text>Puedes ver y crear Grupos juntos con sus PM's</Text>
                </ContText>
            </Options>
            <ContGeneral>
                <ContListGen>
                    {/* Lista de Grupos */}
                    {
                        isVisible.noHayGrupos &&  
                        <BodyUnitItem >
                          <ContText>
                              <TextPrin>Aun no hay grupos creados </TextPrin>
                              <TextPrin>Cree el primer grupo </TextPrin>
                          </ContText>
                        </BodyUnitItem>
                    }
                    <BotonLog onPress={() => setIsVisible({
                        ...isVisible,
                        grupo: true
                    })}>
                        <TextButton onPress={() => setIsVisible({
                          ...isVisible,
                          grupo: true
                        })}>Crear grupo</TextButton>
                    </BotonLog>
                </ContListGen>
            </ContGeneral>
            {   
              isVisible.grupo && 
              <BackInOut >
                <BackInIn >
                    <Text>Grupo numero {grupos.length + 1}</Text>
                    <Text>Del cohorte {nombre}</Text>
                    <Text>Asignar PM </Text>
                    <ScrollView>
                        {
                            PMs.map((pm, i) =>(
                                <ListItem key={i} style={{ width: '100%'}}>
                                  <ListAdd >
                                    <ContTextList>
                                      <ListText>{`${pm.last_name} ${pm.first_name}`}</ListText>
                                    </ContTextList>
                                    <ContBtnOut >
                                      <BotonLog onPress={() => setState({
                                          ...state,
                                          pms: {
                                              last_name: pm.last_name,
                                              first_name : pm.first_name,
                                              id : pm.id,
                                          }
                                      })}>
                                        <TextButton onPress={() => setState({
                                          ...state,
                                          pms: {
                                              last_name: pm.last_name,
                                              first_name : pm.first_name,
                                              id : pm.id,
                                          }
                                        })}>Agregar</TextButton>
                                      </BotonLog>
                                    </ContBtnOut>
                                  </ListAdd>
                                </ListItem>   
                            ))                                    
                        }
                        <Text>Asignar Alumnos </Text>
                        {
                            alumnos.map((alumn, i) =>(
                                <ListItem key={i} style={{ width: '100%', }}>
                                  <ListAdd >
                                    <ContTextList>
                                      <ListText>{`${alumn.last_name} ${alumn.first_name}`}</ListText>
                                    </ContTextList>
                                    <ContBtnOut >
                                        <BotonLog onPress={() => alumnosInsertados.push({
                                            alumn
                                        })}>
                                          <TextButton onPress={() => alumnosInsertados.push({
                                            alumn
                                        })}>Agregar</TextButton>
                                        </BotonLog>
                                      </ContBtnOut>
                                  </ListAdd>
                                </ListItem>   
                            ))                                    
                        }                                
                    </ScrollView>
                    <ContBtnOut>
                        <BotonLog>
                            <TextButton onPress={() => CrearGrupos()}>Aceptar</TextButton>
                        </BotonLog>
                        <BotonLog>
                            <TextButton onPress={() => setIsVisible({
                                ...isVisible,
                                grupo: false
                            })}
                            >
                                Cancelar
                            </TextButton>
                        </BotonLog>
                    </ContBtnOut>
                </BackInIn>
              </BackInOut>
            }
            {/* Menu inferior General */}
			      <Footer navigation={props.navigation}/>
         </Contenedor>

     )
}

export default CrearGrupos;