import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ItemList = ({user, feed, cb}) => {
    return(
        <View style={s.container}>
            <Text style={s.title}>
                {user.first_name.replace( /\b\w/g, a => a.toUpperCase())}
            </Text>
            <TouchableOpacity style={s.btn} onPress={() => cb(user)}>
                <Text style={s.subTitle}>
                    {feed ? 'Modificar feedback' : 'Agregar feedback'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemList

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        margin: "auto",
        marginTop: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center",
    },
    btn: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: "yellow"
    },
    subTitle: {
        fontSize: 18,
    }
})