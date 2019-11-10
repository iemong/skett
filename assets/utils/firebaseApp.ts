import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBr0FCyYPvxlzYpIE-hdGyqd6eo2firVFU',
    authDomain: 'skett-ffff1.firebaseapp.com',
    databaseURL: 'https://skett-ffff1.firebaseio.com',
    projectId: 'skett-ffff1',
    storageBucket: 'skett-ffff1.appspot.com',
    messagingSenderId: '1010617732801',
    appId: '1:1010617732801:web:b9095e9dcbf7ff922b0e40',
    measurementId: 'G-LBFMB8G803',
}

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
