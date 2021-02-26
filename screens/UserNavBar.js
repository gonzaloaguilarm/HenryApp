import React from 'react';
import { Icon } from 'react-native-elements';
import { OptionCard, NavMenu, Card, OptionText } from './OptionAdmin/styledAdmin';

const UserNavBar = ({ navigation }) => {

	return (
		<NavMenu style={{ top: '14%' }}>
			<Card>
				<OptionCard>
					<Icon
						reverse
						name='shoe-prints'
						type='font-awesome-5'
						onPress={() => navigation.navigate('Menu Usuario')}
					/>
				</OptionCard>
				<OptionText style={{textAlign: 'center'}}>Tu progreso</OptionText>
			</Card>
			<Card>
				<OptionCard>
					<Icon
						reverse
						name='calendar-alt'
						type='font-awesome-5'
						onPress={() => navigation.navigate('Calendario')}
					/>
				</OptionCard>
				<OptionText>Calendario</OptionText>
			</Card>
			<Card>
				<OptionCard>
					<Icon
						reverse
						name='rocket'
						type='font-awesome-5'
					onPress = {() => navigation.navigate('Job Preps')}
					/>
				</OptionCard>
				<OptionText>Job Preps</OptionText>
			</Card>
		</NavMenu>
	)
};

export default UserNavBar;