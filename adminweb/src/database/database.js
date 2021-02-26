import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey            : 'AIzaSyCn3rJuZGaiPSVMCJZiKkT4yveturHkV_c',
	authDomain        : 'henry-app-50edd.firebaseapp.com',
	projectId         : 'henry-app-50edd',
	storageBucket     : 'henry-app-50edd.appspot.com',
	messagingSenderId : '643875518821',
	appId             : '1:643875518821:web:82171dc147cc1f2c9bc98c',
	measurementId     : 'G-23KB774KZJ'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const db = firebase.firestore();

export default {
	firebase,
	db
};
