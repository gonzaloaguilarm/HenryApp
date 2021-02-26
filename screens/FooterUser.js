import React from 'react';
import { Icon } from 'react-native-elements';

//Redux importamos funciones y hooks
import { useDispatch } from 'react-redux';
import { logout } from '../src/action';

// Style
import {
    ContMinf,
    ImgMinf,
    IconContent,
    LogoSise
} from './Footer/styledFooter';

let logFont = require('../src/assets/img/henry_logo.jpg');
import firebase from '../database/database';

const Footer = ({ navigation }) => {

    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(logout())
        firebase.firebase
            .auth().signOut().then(() => console.log('sign out'))
        navigation.navigate('Iniciar Sesion')
    }

    return (
        <ContMinf>
            <IconContent>
                <Icon
                    name="home"
                    type="font-awesome"
                    size={40}
                    onPress={() => navigation.navigate('Menu Usuario')}
                />

                <ImgMinf>
                    <LogoSise source={logFont} />
                </ImgMinf>

                <Icon
                    solid={true}
                    name="sign-out-alt"
                    type="font-awesome-5"
                    size={40}
                    onPress={() => Logout()}
                />
            </IconContent>
        </ContMinf>
    )
};

export default Footer;