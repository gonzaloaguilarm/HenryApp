import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const pairProgramming = require('../src/assets/img/pairProgramming.svg');

const UserBody = ({navigation}) => {


  return (
    <View style={styles.marco}>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Cohorte de Alumno')}
      >
        <View style={styles.containerImagen}>
          <Image
            style={styles.imagen}
            source={{ uri: 'https://i.pinimg.com/originals/b5/bb/80/b5bb80994bc3ecdcd5b989250e6b7746.png' }}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.titulo}>Tu Cohorte</Text>
          <Text style={styles.subtitulo}>Quieres conocer quien es tu Instructor y a tus compañeros de Cohorte?</Text>
          <View style={{ display: 'flex', alignItems: 'flex-end', marginTop: -7 }}>
            <Icon
              reverse
              name='arrow-right'
              type='font-awesome-5'
              size={9}
              color='yellow'
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Pair Programing')}
      >
        <View style={styles.containerImagen}>
          <Image
            style={styles.imagen}
            source={{ uri: 'https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/pair-programming.svg?sanitize=true' }}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.titulo}>Pair Programming</Text>
          <Text style={styles.subtitulo}>En tu Cohorte se asignan grupos de pair programming, Quieres saber más?</Text>
          <View style={{ display: 'flex', alignItems: 'flex-end', marginTop: -25 }}>
            <Icon
              reverse
              name='arrow-right'
              type='font-awesome-5'
              size={9}

              color='yellow'
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.container}
        onPress={() => navigation.navigate('Pair Programing')}
      >
        <View style={styles.containerImagen}>
          <Image
            style={styles.imagen}
            source={{ uri: 'https://banner2.cleanpng.com/20181126/xuv/kisspng-software-developer-software-development-vector-gra-5bfc3520b9c404.2614930415432553287609.jpg' }}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.titulo}>Stand Up</Text>
          <Text style={styles.subtitulo}>Reflexiona el trabajo hecho en el día con compañeros de un Cohorte más avanzada</Text>
          <View style={{ display: 'flex', alignItems: 'flex-end', marginTop: -25 }}>
            <Icon
              reverse
              name='arrow-right'
              type='font-awesome-5'
              size={9}

              color='yellow'
            />
          </View>
        </View>
      </View>
    </View>
  )
}
const yellow = '#feff04';
const grey = '#f5f5f5';

const styles = StyleSheet.create({
  marco: {
    display: 'flex',
    // flexDirection: 'column-reverse',
    alignItems: 'center',
    paddingTop: 7
  },
  imagen: {
    width: 90,
    height: 90,
    marginLeft: 20,
    marginTop: 5
  },
  containerImagen: {
    backgroundColor: yellow,
    width: 130,
    height: 100,
    marginLeft: 20,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  containerText: {
    backgroundColor: grey,
    width: 180,
    height: 100,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30
  },
  titulo: {
    marginLeft: 30,
    /* fontWeight: 700 */
  },
  subtitulo: {
    marginLeft: 7,
    marginRight: 7
  },
  // arrow: {
  //   display: 'flex',
  //   alignItems: 'flex-end',
  //   marginTop: -7
  // }
})

export default UserBody;