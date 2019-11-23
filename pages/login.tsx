import * as React from 'react'
import * as firebase from 'firebase/app'
import { FirebaseAuth } from 'react-firebaseui'
import 'assets/css/firebaseui-styling.global.css'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as Actions from 'reducers/user/actions'
import Main from 'components/templates/layouts/Main'

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
        if (user) {
            console.log(user)
            actions.initialize(user)
        }
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
