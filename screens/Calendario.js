import React, { useEffect, useState } from 'react';
import { Text, Linking, TouchableOpacity, ScrollView, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux';
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
    ImgSise,
} from './Cohortes/StyledCohorteList'
import firebase from '../database/database';
import Footer from './FooterUser';

let card1 = require('../src/assets/img/imgCard1.png');




const Calendario = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [calendar, setCalendar] = useState([])
    const cohorte = useSelector(state => state.cohorte)
    const dbRef = firebase.db.collection('cohorte')
    useEffect(() => {
        if(!cohorte){
            setLoading(false)
        }else{
            dbRef.onSnapshot(snap => {
                snap.docs.forEach(doc => {
                    const { nombre } = doc.data()
                    if (cohorte === nombre) traerClases(doc.id)
                })
            })
        }
    }, [])
    
    const traerClases = id => {
        dbRef.doc(id).collection('clases').onSnapshot(snap => {
            let clases = []
            snap.docs.forEach(doc => {
                const { clase, link, tema } = doc.data()
                clases.push({
                    clase, link, tema
                })
            })
            setLoading(false)
            setCalendar(clases)
        })
    }

    const sorted = React.useMemo(()=> calendar.slice().sort((a,b) => a.clase - b.clase), [calendar]);

    const OpenURLButton = ({ url, title, link }) => {
        const handlePress = async () => {
            const supported = await Linking.canOpenURL(url)
            if (supported) {
                await Linking.openURL(url)
            } else {
                Alert.alert(`No se puede abrir esta URL: ${url}`)
            }
        }
        return (<TouchableOpacity onPress={handlePress} style={s.containerLink}>
            <Text style = {s.titulo}>clase {title}:</Text>            
            <Text style={s.link}>{link}</Text>
        </TouchableOpacity>)
    }

    return loading ? (
        <ActivityIndicator
            size="large"
            style={{
                flex: 1,
                aligntContent: "center",
                justifyContent: "center",
            }}
        />
    ) : (
        <Contenedor>
            <Encabezado>
                <ConTitle onPress={() => navigation.goBack()}>
                    <Icon
                        solid={true}
                        name="chevron-left"
                        type="font-awesome-5"
                    />
                    <TextTitle>Calendario</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise source={card1} />
                </BackImg>
                <ContText>
                    <TituloCard>Calendario del cohorte {cohorte}</TituloCard>
                    <Text>Conoce la agenda de actividades de tu cohorte</Text>
                </ContText>
            </Options>
            <ContGeneral>
                <ContListGen>
                    <ScrollView style={s.container}>
                        {sorted.length ? sorted.map(clas => (
                            <View key={clas.clase}>
                                <OpenURLButton url={clas.link} title={clas.clase} link={clas.tema} />
                            </View>
                        )) : (
                            <View>
                                <Text>
                                    Todavia no hay clases, estamos preparando todo
                                </Text>
                            </View>
                        )}
                    </ScrollView>
                </ContListGen>
            </ContGeneral>
            <Footer navigation={navigation} /> 
        </Contenedor>
    )
}

export default Calendario;

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center"
    },
    containerLink: {
        padding: 15,
        backgroundColor: '#ffff01',
        marginTop: 5,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 5,
        height: 100,
    },
    link: {
        color: "blue",
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 15
    },
    titulo: {
      fontSize: 17,
      fontWeight: '700',
      textTransform: 'capitalize',
      textAlign: 'center',
      textDecorationColor: '#fff',
      textDecorationLine: 'underline',
    }
})