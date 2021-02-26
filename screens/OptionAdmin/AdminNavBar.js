import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavMenu, Card, OptionCard, OptionText } from './styledAdmin';

const AdminNavBar = ({ navigation }) => {
	return (
		<NavMenu>
			<Card>
				<OptionCard>
					<Icon
						name="user"
						type="font-awesome"
						size={35}
						onPress={() => navigation.navigate('Henry Admin')}
					/>
				</OptionCard>
				<OptionText> Students</OptionText>
			</Card>
			<Card>
				<OptionCard>
					<Icon
						name="book"
						type="font-awesome-5"
						size={30}
						onPress={() => navigation.navigate('Menu Cohortes')}
					/>
				</OptionCard>
				<OptionText>Cohortes</OptionText>
			</Card>
			<Card style={styles.card}>
				<OptionCard>
					<Icon
						name="brain"
						type="font-awesome-5"
						size={30}
						onPress={() => navigation.navigate('Listado de Instructores')}
					/>
				</OptionCard>
				<OptionText>Instructores</OptionText>
			</Card>
		</NavMenu>
	);
};

const styles = StyleSheet.create({
	container : {
		display         : 'flex',
		flexDirection   : 'row',
		alignItems      : 'center',
		justifyContent  : 'center',
		backgroundColor : '#e5e500'
	},
	card      : {
		display        : 'flex',
		//alignItems: 'space-between',
		justifyContent : 'space-between'
	},
	icon      : {
		display        : 'flex',
		alignItems     : 'center',
		justifyContent : 'center'
	}
});

export default AdminNavBar;
