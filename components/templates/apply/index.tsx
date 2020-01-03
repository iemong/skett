import * as React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import firebase from 'firebase'
import Main from 'components/templates/layouts/Main'
import ApplyResult from 'components/organisms/apply/result'
import Tab from 'components/organisms/tab'
import useLogin from 'components/hooks/useLogin'
import { State as rootState } from 'reducers'
import ApplyLogin from 'components/organisms/apply/login'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'

type Props = {
    postId: string
}

const Apply = (props: Props): JSX.Element => {
    const { postId } = props
    const { side } = useSelector((state: rootState) => state.rootReducer.tab)

    const user = useLogin()

    React.useEffect(() => {
        if (!user) return
        const db = firebaseApp.firestore()
        const docRef = db.collection(COLLECTIONS.POSTS)
        docRef
            .doc(postId)
            .update({
                applicants: firebase.firestore.FieldValue.arrayUnion(user.uid),
            })
            .catch(e => console.error(e))
    }, [postId, user])

    const innerElement = React.useMemo(() => {
        return user ? (
            <Wrapper>
                <ApplyResult />
            </Wrapper>
        ) : (
            <Wrapper>
                <ApplyLogin />
            </Wrapper>
        )
    }, [user])

    return (
        <Main>
            {side === 'help' ? (
                <Tab leftContent={innerElement} tabSide={'left'} />
            ) : (
                <Tab rightContent={innerElement} tabSide={'right'} />
            )}
        </Main>
    )
}

export default Apply

const Wrapper = styled.div`
    margin-top: 60px;
`
