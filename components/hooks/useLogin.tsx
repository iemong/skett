import * as React from 'react'
import * as firebase from 'firebase/app'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as Actions from 'reducers/user/actions'

const useLogin = (): firebase.User | null => {
    const [user, setUser] = React.useState<firebase.User | null>(null)
    const dispatch = useDispatch()
    const actions = React.useMemo(() => {
        return bindActionCreators(Actions, dispatch)
    }, [dispatch])
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
    }, [actions, user])

    return user
}

export default useLogin
