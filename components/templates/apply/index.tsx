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
import { PostType } from 'types/index'

type Props = {
    postId: string
}

const Apply = (props: Props): JSX.Element => {
    const { postId } = props
    const { side } = useSelector((state: rootState) => state.rootReducer.tab)
    const [currentPost, setCurrentPost] = React.useState<PostType | undefined>(undefined)

    const user = useLogin()

    const updatePostData = async (user: firebase.User) => {
        try {
            const db = firebaseApp.firestore()
            const docRef = db.collection(COLLECTIONS.POSTS)
            await docRef
                .doc(postId)
                .update({
                    applicants: firebase.firestore.FieldValue.arrayUnion(user.uid),
                })
                .catch(e => {
                    console.log(e)
                })
            const data = await docRef
                .doc(postId)
                .get()
                .catch(e => console.error(e))
            const postData = data && data.exists ? data.data() : undefined
            setCurrentPost(postData as PostType)
        } catch (e) {
            console.error(e)
        }
    }

    React.useEffect(() => {
        if (!user) return
        updatePostData(user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const innerElement = React.useMemo(() => {
        return user ? (
            <Wrapper>
                <ApplyResult post={currentPost} />
            </Wrapper>
        ) : (
            <Wrapper>
                <ApplyLogin />
            </Wrapper>
        )
    }, [currentPost, user])

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
