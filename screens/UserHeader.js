import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';
let userIcon = require('../src/assets/img/imgUser.jpg');


const UserHeader = ({navigation}) => {
	const info = useSelector(state => state)

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.text}>Bienvenido {info.first_name}</Text>
			</View>
			<View style={styles.avatar} >
				<Avatar
				rounded
				size="medium"
				onPress={() => navigation.navigate('Perfil Alumno', {info: info})}
				source={{uri: info.photo ? info.photo : 'https://www.netclipart.com/pp/m/411-4114765_avatar-icon.png'}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container : {
		backgroundColor         : '#ffff93',
		height                  : 150,
		borderBottomLeftRadius  : 50,
		borderBottomRightRadius : 50
	},
	text      : {
		marginTop   : 40,
		paddingLeft : 24,
		fontSize    : 20,
		/* fontWeight  : 700 */
	},
	avatar    : {
		alignItems   : 'flex-end',
		paddingRight : 25,
		marginTop    : -30
	}
});

export default UserHeader;
