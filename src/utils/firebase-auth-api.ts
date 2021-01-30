// import * as axios from 'axios';
import firebase from './firebase';
import { FirebaseAuthUserObj, FirebaseAuthUpdateUser } from '../types';

const FIREBASE_API = {
    signUpUser: (userObj: FirebaseAuthUserObj) => {
        return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
    },
    updateUser: (userObj: FirebaseAuthUpdateUser) => {
        const user = firebase.auth().currentUser;
        return user?.updateProfile(userObj);
    },
    loginUser: (userObj: FirebaseAuthUserObj) => {
        return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
    },
    signOutUser: () => {
        return firebase.auth().signOut();
    },
    deleteUser: () => {
        const user = firebase.auth().currentUser;
        return user?.delete();
    }
}

export default FIREBASE_API;