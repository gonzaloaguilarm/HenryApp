import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert  } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Avatar, Icon } from 'react-native-elements';
import firebase from '../../database/database';
import Footer from '../Footer/Footer';

/* Estilos */
import {
  Contenedor,
  Encabezado,
  ConTitle,
  TextTitle,
  ContGeneral,
  ContAvatarPrin,
  ContDatos,
  BotonLog,
  TextButton,
  TitleAvatar,
  ContTextAvatar
} from './StyledPerfil';

//Redux
import {useSelector} from 'react-redux';
import {useDispatch } from 'react-redux';
import {login} from '../../src/action';

const Profile = (props) => {
	const dispatch = useDispatch()
	const { info } = props.route.params;
	const { navigation } = props;
	const [
		user,
		setUser
	] = useState({});
	const [
		edit,
		setEdit
  ] = useState(false);
  
  const [
		selectedRol,
		setSelectedRol
	] = useState('');

	const dbRef = firebase.db.collection('users').doc(info.id);
	useEffect(() => {
		setUser(info);
	}, []);

	const profile = [
		{
			att : 'Dni / Cedula',
			val : 'dni'
		},
		{
			att : 'Github',
			val : 'github'
		},
		{
			att : 'Nacionalidad',
			val : 'nacionalidad'
		},
		{
			att : 'Telefono',
			val : 'phone'
		}
	];

	const updateUser = async () => {
		profile.map((field) => !!user[field.val]).includes(false)
			? Alert.alert('Todos los campos deben estar completos', '', [
					{ text: 'Aceptar' }
				])
			: await dbRef.set(user);
			dispatch(login(user))
  };
  
  const eliminar = async () => {
		/* if (confirm('Esta seguro de querer eliminar este Usuario')) {
			await dbRef.delete();
			alert('Usuario Eiminado');
			navigation.navigate('Henry Admin');
		}
		else {
    } */
    
    Alert.alert(
			'Esta Eliminando un Usuario',
			'Esta seguro de querer eliminar este Usuario',
			[
				{
					text    : 'Cancel',
					onPress : () => console.log('Cancel Pressed'),
					style   : 'cancel'
				},
				{
					text    : 'OK',
					onPress : async () => {
            await dbRef.delete();   
            navigation.navigate('Henry Admin');         
					}
				}
			],
			{ cancelable: false }
		);
  };
  
  const setPermisos = async (rol) => {
		/* if (confirm('Esta seguro del cambio de Perfil de Usuario')) {
			await dbRef.set({ ...user, rol: rol });
			setUser({ ...user, rol: rol });
		}
		else {
		} */

		Alert.alert(
			'Cambiar Perfil Usuario',
			'Esta seguro del cambio de Permisos de Usuario',
			[
				{
					text    : 'Cancel',
					onPress : () => console.log('Cancel Pressed'),
					style   : 'cancel'
				},
				{
					text    : 'OK',
					onPress : async () => {
            await dbRef.set({ ...user, rol: rol });
            setUser({ ...user, rol: rol });

					}
				}
			],
			{ cancelable: false }
		);
	};

	return (
    <Contenedor>
      <Encabezado >
			  <ConTitle
          onPress={() => navigation.goBack()}
        >
          <Icon
						solid={true}
            name="chevron-left"
						type="font-awesome-5"
          />
          <TextTitle>Home</TextTitle>
        </ConTitle>
      </Encabezado>
      <ContGeneral >
        <ContAvatarPrin >
          <Avatar
            source={{
              uri : user.photo
                ? user.photo
                : 'https://www.mendozapost.com/files/image/7/7142/54b6f4c45797b.jpg'
            }}
            size="large"
          />
          <ContTextAvatar >
            <TitleAvatar>{`${user.first_name} ${user.last_name}`}</TitleAvatar>
            <Text style={styles.subtitle}>{user.email}</Text>
            <Text style={styles.subtitle}>Perfil: {user.rol}</Text>
          </ContTextAvatar>
        </ContAvatarPrin>
        <ContDatos style={styles.datos}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Datos</Text>
          {profile.map((field) => (
            <View style={styles.container} key={field.att}>
              <View style={styles.container_data}>
                <Text style={styles.attribute}>{field.att}</Text>
                {edit ? (
                  <TextInput
                    placeholder={field.att}
                    value={user[field.val]}
                    onChangeText={(val) => setUser({ ...user, [field.val]: val })}
                  />
                ) : (
                  <Text style={styles.value}>{user[field.val]}</Text>
                )}
              </View>
            </View>
          ))}
          <BotonLog 
            onPress={() => {
              setEdit(!edit), edit && updateUser();
            }}
          >
            <TextButton>{edit ? 'Guardar cambios' : 'Editar'}</TextButton>
          </BotonLog>
          <View style={styles.datos}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Actualizar Permisos de Usuario</Text>
            <Text style={{ fontSize: 15 }}>Selecciona el rol del usuario</Text>
            <RNPickerSelect
                onValueChange={(itemValue, itemIndex) => setSelectedRol(itemValue)}
                items={[
                  {label:"Estudiante", value:"student" },
                  {label:"PM", value:"pm" },
                  {label:"Instructor", value:"instructor" },
                  {label:"Administrador", value:"admin" },
                ]}
            />
           
            <Button
              title={selectedRol ? 'Actualizar' : 'Seleccione una opción'}
              disabled={selectedRol ? false : true}
              onPress={() => setPermisos(selectedRol)}
            />
          </View>
          <View style={styles.datos}>
            <Button style={{ backgroundColor: 'red' }} title="Eliminar Usuario" onPress={() => eliminar()} />
          </View>
        </ContDatos>
      </ContGeneral>
      {/* Menu inferior General */}
			<Footer navigation={props.navigation}/>
    </Contenedor>
	);
};

const styles = StyleSheet.create({
	container_main     : {
		backgroundColor : '#e5e500'
	},
	header             : {
		display         : 'flex',
		flexDirection   : 'row',
		alignItems      : 'center',
		backgroundColor : '#e5e500'
	},
	name               : {
		marginLeft : 15,
		flex       : 1
	},
	subtitle           : {
		color : 'gray'
	},
	text               : {
		margin : 7
	},
	datos              : {
		backgroundColor : 'white',
		marginTop       : 18,
    marginBottom    : 25,
		padding         : 15,
		shadowColor     : '#000',
		shadowOffset    : {
			width  : 0,
			height : 3
		},
		shadowOpacity   : 0.27,
		shadowRadius    : 4.65,
		elevation       : 6
	},
	container_data     : {
		marginTop         : 10,
		paddingBottom     : 10,
		borderBottomColor : '#e5e500',
		borderBottomWidth : 1
	},
	value              : {
		fontWeight : 'bold',
		color      : 'black'
	},
	attribute          : {
		color     : 'gray',
		marginTop : 7
	}
});

export default Profile;
