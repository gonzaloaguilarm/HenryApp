import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import firebase from '../database/database.js';

const StudentList = ({ navigation, route }) => {
    const [
        users,
        setUsers
    ] = useState([]);
    
    var numeroCohorte = route.params.state.numero_de_cohorte
    useEffect(() => {
        firebase.db.collection('users').onSnapshot((snap) => {
            const estudiantes = [];
            snap.docs.forEach((doc) => {
                const { email, rol, first_name, last_name, nacionalidad, photo, dni, github, phone ,cohorte} = doc.data();
                if (rol === 'student' && !cohorte ) {
                    estudiantes.push({
                        email,
                        rol,
                        first_name,
                        last_name,
                        nacionalidad,
                        photo,
                        dni,
                        github,
                        phone,
                        id: doc.id,
                        cohorte
                    });
                }
            });

            setUsers(estudiantes);
        });
    }, []);
    const add =(num, id )=>{
        console.log(users, id )
        var user=[]
        var aux=[]
        users.map(e=>{
            if(e.id ===id){
                console.log("entre",e.id)
                e.cohorte=num
                aux.push(e)
                user.push(e)
            }else{
                aux.push(e)
            }
        })
        console.log(aux);
        setUsers(aux);
        console.log(users);
        firebase.db.collection('users').doc(id).set(user[0])
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="left" type="antdesign"  />
                <Text h4>Home</Text>
            </View>

            <View style={styles.marco}>
                <Text style={styles.text}>Lista de Estudiantes</Text>
            </View>
            <View>
                {users.map((student, i) => (
                    <ListItem key={i} bottomDivider>
                        {!student.photo ? (
                            <Avatar
                                style={styles.avatar}
                                source={{
                                    uri:
                                        'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'
                                }}
                                
                            />
                        ) : (
                                <Avatar
                                    style={styles.avatar}
                                    source={{ uri: student.photo }}
                                />
                            )}
                        <ListItem.Content>
                            <ListItem.Title
                                style={styles.student}
                            >
                                {student.last_name},{student.first_name}
                            </ListItem.Title>
                           
                            <ListItem.Subtitle>{student.dni}</ListItem.Subtitle>
                            <ListItem.Subtitle>{student.email}</ListItem.Subtitle>
                           
                        </ListItem.Content>
                        <Button
                                title="agregar"
                            onPress={() => add(numeroCohorte,student.id)}
                        />
                    </ListItem>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
    estudiante: {
        /* fontWeight : 700, */
        fontSize: 20
    }
});

export default StudentList;