import React, {useEffect, Component} from 'react';
import {Text, ScrollView, Image} from 'react-native';
import { Icon, ListItem} from 'react-native-elements';
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
    ContBtnOut,
    IconContent,
    ImgMinf,
    ImgSise,
    TextPrin,
    BodyUnitItem,
    LogoSise,
    BotonLog,
    ImgListUn,
    TextButton
  } from './StyledCohorteList';
import firebase from '../../database/database';

class AlumnosCohorte extends Component {

    state = {
        alumnos: [],
        alumnosFiltrados : '',
        grupos: ['1', '2', '3'],
        filterActive: false
    }
    componentDidMount(){
            firebase.db.collection('users').where('rol', '==', 'student').onSnapshot((query) =>{
                var data = []
                query.docs.forEach((docs) => {
                    const {cohorte, dni, email, first_name, grupo, last_name, nacionalidad, phone, photo} = docs.data()
                    if(this.props.route.params.nombre === cohorte){
                        data.push({
                            cohorte, 
                            grupo,
                            dni, 
                            email, 
                            first_name,  
                            last_name, 
                            nacionalidad, 
                            phone,
                            photo
                        });
                    }
                });
                this.setState({
                    alumnos : data,
                    preAlumnos : data
                });
    
            });
    }
    filtrado(group){
        const alumnos = [...this.state.alumnos];
        if(!isNaN(group)){
            this.setState({
                 filterActive : true, 
                alumnosFiltrados : alumnos.filter(alumno => alumno.grupo === group)
            })
        }else{
            this.setState({
                 filterActive : false, 
            })
        }

    }
    render(){
    return(
        <Contenedor>
            <Encabezado>
                <ConTitle
                    onPress={() => this.props.navigation.goBack()}
                >          
                <Icon
                    solid={true}
                    name="chevron-left"
                    type="font-awesome-5"
                />
                <TextTitle>Cohorte {this.props.route.params.nombre}</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise/>
                </BackImg>
                    <ContText>
                        <TituloCard>Alumnos</TituloCard>
                        <Text>Listado de los alumnos</Text>
                </ContText>
            </Options>

            <ContGeneral>
              <ContListGen>
                <ConTitle
                    onPress={() => this.filtrado("Todos")}
                > 
                    <TextTitle>Todos</TextTitle>
                </ConTitle>
              {
                  this.state.grupos.map((l,i) => (
                      <ConTitle
                          key={i}
                          onPress={() => this.filtrado(l)}
                      > 
                          <TextTitle>Grupo {l}</TextTitle>
                      </ConTitle>
                  ))
              }

              {
              this.state.filterActive === false && 
              this.state.alumnos.map((l, i) => (
                  <ListItem key={i} style={{ width: '100%', }}>
                    <BodyUnitItem >
                        <ImgListUn source={l.photo} />
                      <ContText>
                        <TextPrin>{`${l.last_name} ${l.first_name}`}</TextPrin>
                        <Text>{`${l.email}`}</Text>
                      </ContText>
                    </BodyUnitItem>
                  </ListItem>
                ))
              }
              {
                  this.state.filterActive === true &&
                  this.state.alumnosFiltrados.map((l, i) => (
                      <ListItem key={i} style={{ width: '100%', }}>
                        <BodyUnitItem >
                            <ImgListUn source={l.photo} />
                          <ContText>
                            <TextPrin>{`${l.last_name} ${l.first_name}`}</TextPrin>
                            <Text>{`${l.email}`}</Text>
                          </ContText>
                        </BodyUnitItem>
                      </ListItem>
                    ))
              }
              </ContListGen>            
            </ContGeneral>
            {/* Menu inferior General */}
			      <Footer navigation={null}/>
        </Contenedor>
    )}
}

export default AlumnosCohorte;


