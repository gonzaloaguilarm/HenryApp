import React, { useState, useEffect, Component } from 'react'; 
import { StyleSheet, View, Button, Alert } from 'react-native';
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
    ContBtnOut,
    TextPrin,
    ImgSise,
    TextButtonOp2,
    ContPirnTable,
    TextContTable,
    ImgListUn,
    BotonLog,
    TextButton,
    BodyUnitItem
} from '../Cohortes/StyledCohorteList';
let card1 = require('../../src/assets/img/imgCard1.png');
import firebase from '../../database/database';


  

class ListaPms extends Component{
    state = {
        grupo: [],
        cohorte: '',
        idCohorte: ''
    }
   componentDidMount(){
        firebase.db.collection('cohorte').where("nombre", "==", this.props.route.params.cohorte).onSnapshot((snap) => {
            let coh = [];
            let grupos = []
            snap.docs.forEach((doc) => {
                this.setState({
                    idCohorte : doc.id
                })
            })
            firebase.db.collection('cohorte').doc(this.state.idCohorte).collection('grupos')
            .get()
            .then(querySnapshot=>{
                querySnapshot.forEach(doc => {
                    const {numero, pms} = doc.data()
                    grupos[numero] = pms

                })
            })
            this.setState({
                grupo: grupos
            })
            this.render()
        })

    }
    render(){
    return (
        <Contenedor >
            <Encabezado >
                <ConTitle
                onPress={() => this.props.navigation.goBack()}
                >
                <Icon
                    solid={true}
                    name="chevron-left"
                    type="font-awesome-5"
                />
                <TextTitle>Lista de PM</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise source={card1} />
                </BackImg>
                <ContText>
                    <TituloCard>PMs de este cohortes</TituloCard>
                    <Text>Puedes ver los PMs de este cohorte</Text>
                </ContText>
            </Options>
            <ContGeneral>
                <ContListGen>
                    {
                        this.state.grupo[1] ? this.state.grupo[0] : 'Nada'
                    }
                </ContListGen>
                <ContBtnOut >
                        <BotonLog onPress={() => this.render()}>
                            <TextButton>Agregar PM</TextButton>
                        </BotonLog>
                    </ContBtnOut>
                <Footer navigation={this.props.navigation}/>
            </ContGeneral>
            {
                pms.length === 0 && <ContBtnOut >
                <BotonLog onPress={() => console.log(pms)}>
                  <TextButton>Agregar PM</TextButton>
                </BotonLog>
              </ContBtnOut>
            }
            {/* Menu inferior General */}
			      <Footer navigation={props.navigation}/>
        </Contenedor>
    );}
}
export default ListaPms;