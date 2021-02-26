import React, { useState} from 'react'
import { View, Button, TextInput, Text } from 'react-native'
//import getRows from '../../src/spreadsheets/spreadsheets'

import axios from 'axios'
import firebase from "../../database/database";

const ImportHenrys = ({navigation, route}) => {
    const [link, setLink] = useState()
    var students = []
    const {instructor} = route.params

    const importStudents = () => {
      if(!link.includes("/")) return alert('Link invalido, asegurece de que el link sea de formato\n"https://docs.google.com/spreadsheets/d/XXXXXXXXXXXX/YYYYY"')
        getRows(link.split("/")[link.split("/").length - 2])
        .then(rows => {
            if(rows.length === 0) alert('No ha sido posible la importación \n asegurece de tener una fila llamada "email"')
            else{
                rows.map(row => students.push(row.email))
                return students
            }
        })
        .then((students) => {
            students.map(stud => {
            axiosEmail(stud)
            })
            navigation.navigate('Mensaje NuevoEstudiante')
        })
        .catch(err => alert('no ha sido posible la importación \n asegurece de que el archivo sea publico\n' + err))
    }

    const axiosEmail =(mail)=>{
        axios.post('https://henry-express.herokuapp.com/',
       {to:mail, 
         message:`Buenas tardes`,
         subject:"hola prueba app henry"
       })
       .then(res=>{
        if(!instructor){
            firebase.db.collection('invited users').add({
            email:mail
          })
        }else{
          firebase.db.collection('invited instructor').add({
            email:mail
          })
        }
      })
       
     }

    return(
        <View>
            <Text>Ingrese el link de google docs para importar mails</Text>
            <TextInput
              placeholder=''
              onChangeText={setLink}
            />
            {/* <Button
              onPress={importStudents}
            /> */}
        </View>
    )
}

export default ImportHenrys