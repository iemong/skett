import * as React from 'react'
import * as firebase from 'firebase/app'
import { FirebaseAuth } from 'react-firebaseui'
import Main from 'components/templates/layouts/Main'

import 'assets/css/firebaseui-styling.global.css'

const Login = () => {
    const [user, setUser] = React.useState<any>(null)
    const dispatch = useDispatch()
    const actions = React.useMemo(() => {
        return bindActionCreators(Actions, dispatch)
    }, [dispatch])
    const provider = new firebase.auth.FacebookAuthProvider()
    provider.setCustomParameters({
        display: 'popup',
    })

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    }

    React.useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user: firebase.User | null) => setUser(user))
        return (): void => {
            unregisterAuthObserver()
        }
    }, [])

    React.useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <Main>
            <React.Fragment>
                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                {user && (
                    <div>
                        <p>{`name : ${user.displayName}`}</p>
                        <p>{`mail : ${user.email}`}</p>
                        <p>{`url: ${user.photoURL}`}</p>
                        <p>{`uid : ${user.uid}`}</p>
                    </div>
                )}
            </React.Fragment>
        </Main>
    )
}

export default Login
