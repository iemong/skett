import * as React from 'react'
import * as firebase from 'firebase/app'
import Main from '../components/templates/layouts/Main'
import { FirebaseAuth } from 'react-firebaseui'

import '../assets/css/firebaseui-styling.global.css'

const Login = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    provider.setCustomParameters({
        display: 'popup',
    })

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        ],
    }

    return (
        <Main>
            <React.Fragment>
                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </React.Fragment>
        </Main>
    )
}

export default Login
