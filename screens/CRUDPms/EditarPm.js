import { ScrollView, Text, StyleSheet, Picker, Button, View, TouchableHighlight } from 'react-native';
import React, { useState, useEffect} from 'react';
import { Avatar, Icon } from 'react-native-elements';
import firebase from '../../database/database';
import RNPickerSelect from 'react-native-picker-select';

const EditarPms = ({navigation, route}) => {
    
    const [state, setState] = useState(
        {
            label: route.params.pm.modadlidad+" "+route.params.pm.cohorte,
            id: route.params.pm.id,
            email: route.params.pm.email,
            nombre: route.params.pm.nombre,
            photo:  route.params.pm.photo ? route.params.pm.photo : "",
            cohorte: {
                alumnos: [],
                comienzo: route.params.pm.comienzo ? route.params.pm.comienzo : "", 
                description: "", 
                fin:  route.params.pm.fin ? route.params.pm.fin : "", 
                modalidad: route.params.pm.modalidad, 
                nombre: route.params.pm.cohorte,
                numero_de_grupo: route.params.pm.grupo
            },
        }
    )
    const [cohortes, setCohortes] = useState([])
    const [grupos, setGrupos] = useState([
        {
            label: 'Grupo 1' , 
            value: '1'
        },
        {
            label: 'Grupo 2' , 
            value: '2'
        },
        {
            label: 'Grupo 3' , 
            value: '3'
        },
        {
            label: 'Grupo 4' , 
            value: '4'
        }
    ])
    //Solicitamos cohortes creados 
    useEffect(() =>{
        firebase.db.collection('cohorte').onSnapshot((snap) => {
            const cohorte = [];
            snap.docs.forEach((doc) => {
                const {
                    comienzo,  
                    fin, 
                    modalidad, 
                    nombre,
                    numero_de_grupo,
                    alumnos
                } = doc.data()
                cohorte.push({
                    label: modalidad+" "+nombre,
                    value: modalidad+" "+nombre,
                    data: {
                        comienzo, 
                        description: "", 
                        fin, 
                        modalidad, 
                        nombre,
                        numero_de_grupo,
                        alumnos
                    },
                    id: doc.id
                })
            });
            setCohortes(cohorte)
        })
    }, []);
    const update = async () => {
        const dbRef = firebase.db.collection('PMs').doc(state.id);
        await dbRef.update({
            cohorte: state.cohorte  
        });
        navigation.goBack()
    }
    return(
        <ScrollView >
            
            {/* Cabecera */}
            <View style={styles.header}>
                <Button title="Go back" onPress={() => navigation.goBack()}/>
            </View>
            {/* Titulo */}
            <View style={styles.marco}>
                <Text style={styles.text}>Editar PM</Text>
            </View>
            {/* Contenedor */}
            <View style={styles.container}>
                <Avatar
                    style={styles.avatar}
                    source={{
                        uri:'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'
                    }}        
                />  
                <View style={styles.cohorte}>
                    <Text> Cohortes </Text>
                    <RNPickerSelect
                        placeholder={{}}
                        items={cohortes}
                        onValueChange={(value, index) =>{ 
                            setState({
                                ...state,
                                cohorte: cohortes[index].data,
                                label: cohortes[index].label
                            });

                        }}
                        value={state.label}
                    />

                </View>
                <View style={styles.grupo}>
                    <Text> Grupo </Text>
                    <RNPickerSelect
                        placeholder={{}}
                        items={grupos}
                        onValueChange={(value, index) =>{ 
                            state.cohorte.numero_de_grupo = value
                            console.log(state)
                        }}
                        value={state.cohorte.numero_de_grupo}
                    />
                </View>
                <Button title="Agregar cambios" onPress={() => update()}/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e5e500'
    },
    marco: {
        backgroundColor: '#e5e500',
        textAlign: 'center'
    },
    text: {
        fontSize: 30
    },
    avatar: {
        width: 100,
        height: 100
    },
    pm: {
        /* fontWeight : 700, */
        fontSize: 20
    },
    button: {
        backgroundColor: '#b8c',
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    grupo:{
        textAlign: 'center'
    },
    cohorte:{
        textAlign: 'center'
    },
    container:{
        textAlign: 'center'
    }
});
export default EditarPms;