import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity, Button } from 'react-native'
import ItemList from './itemList';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import firebase from '../database/database';

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
    BotonLog,
    TextButton,
    BackInOut,
    BackInIn
} from './Cohortes/StyledCohorteList'

import Footer from './FooterUser';

let card1 = require('../src/assets/img/imgCard1.png');


const PairPrograming = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [group, setGroup] = useState([])
    const [feedbacks, setFeedbacks] = useState([])
    const [editFeed, setEditFeed] = useState({ see: false })
    const user_id = useSelector(state => state.id)
    const user_name = useSelector(state => state.first_name)

    const dbRef = firebase.db.collection('pair programing')

    useEffect(() => {
        dbRef.onSnapshot(snap => {
            snap.docs.forEach(doc => {
                const { user } = doc.data()
                user.map(obj => {
                    if (obj.id === user_id) {
                        setGroup({
                            data: doc.data(),
                            id: doc.id
                        })
                        seetFeed(doc.id)
                        setLoading(false)
                    }
                })
            })
            setLoading(false)
        })
    }, [])

    const seetFeed = (id) => {
        dbRef.doc(id).collection('feedbacks').where("from_id", "==", user_id).onSnapshot(snap => {
            let feeds = []
            snap.docs.forEach(doc => {
                const { to_id, to_name, data } = doc.data()
                feeds.push({
                    to_name,
                    to_id,
                    data,
                    id: doc.id
                })
            })
            setFeedbacks(feeds)
        })
    }

    const seeFeed = (user) => {
        const { first_name, id } = user
        const myFeed = feedbacks.filter(feed => feed.to_name === first_name)[0] || { to_name: first_name, data: "", to_id: id }
        setEditFeed({
            see: true,
            value: myFeed.data,
            to_name: myFeed.to_name,
            to_id: myFeed.to_id,
            id: myFeed.id
        })
    }

    const addFeedback = () => {
        let newDbRef = dbRef.doc(group.id).collection('feedbacks')
        editFeed.id ? (
            newDbRef.doc(editFeed.id).set({
                to_name: editFeed.to_name,
                to_id: editFeed.to_id,
                data: editFeed.value,
                from_name: user_name,
                from_id: user_id,
            })
        ) : (
            newDbRef.add({
                to_name: editFeed.to_name,
                to_id: editFeed.to_id,
                data: editFeed.value,
                from_name: user_name,
                from_id: user_id,
            })
        )
        seetFeed(group.id)
        setEditFeed({ see: false })
    }

    return loading ? (
        <View style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center"
        }}>
            <ActivityIndicator size="large" />
        </View>) 
        : (
        <Contenedor>
            <Encabezado>
                <ConTitle onPress={() => navigation.goBack()}>
                    <Icon
                        solid={true}
                        name="chevron-left"
                        type="font-awesome-5"
                    />
                    <TextTitle>Grupo de Pair Programing</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise source={card1} />
                </BackImg>
                <ContText>
                    <TituloCard>Grupo de PP</TituloCard>
                    <Text>Conoce a tu grupo de Pair Programing</Text>
                </ContText>
            </Options>
            <ContGeneral>
                <ContListGen>
                    <ScrollView>
                        {group.data ? group.data.user.filter(user => user.id !== user_id).map(user => (
                            <View key={user.id}>
                                <ItemList
                                    user={user}
                                    feed={feedbacks.map(feed => feed.to_id === user.id).includes(true)}
                                    cb={seeFeed}
                                />
                            </View>
                        )) : (
                            <View style={s.margin}>
                                <TextTitle>Parece que todavia no tienes un grupo de Pair Programing</TextTitle>
                                <TextTitle>No te preocupes, te lo estamos preparando</TextTitle>
                            </View>
                        )}
                    </ScrollView>
                    
                </ContListGen>  
            </ContGeneral>
              
            {editFeed.see && 
            <BackInOut>
                <BackInIn>
                    <Text style={s.title}>
                        Cuentanos como es {editFeed.user} como compañero
                    </Text>
                    <TextInput
                        style={s.input}
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={val => setEditFeed({ ...editFeed, value: val })}
                        value={editFeed.value}
                    />
                    <View style={s.container_btns}>
                        <BotonLog onPress={() => setEditFeed({ see: false })}><TextButton>Cancelar</TextButton></BotonLog>
                        <BotonLog onPress={addFeedback}><TextButton>Enviar</TextButton></BotonLog>
                    </View>
                </BackInIn>
            </BackInOut>}
            <Footer navigation={navigation} /> 
        </Contenedor>
    )
}

export default PairPrograming

const s = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center",
        marginBottom: 20
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        margin: "auto",
        padding: 10
    },
    container_btns: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        padding: 10,
        maxHeight: 55,
    },
    btn: {
        backgroundColor: "yellow",
        borderRadius: 10,
        padding: 10,
    },
    margin: {
        paddingTop: 30
    }
})