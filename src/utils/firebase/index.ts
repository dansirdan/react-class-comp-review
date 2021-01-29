import firebase from 'firebase/app';
import 'firebase/auth';

import config from './firebase-config';

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();