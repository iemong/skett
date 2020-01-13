import * as React from 'react'
import { connect } from 'react-redux'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import { PostType } from 'types/index'
import PostDetail from 'components/templates/posts/detail'
import { UPDATE } from 'reducers/tab/types'

type Props = {
    data: PostType
}

class PagePostDetail extends React.Component<Props> {
    static async getInitialProps({
        query,
        req,
        store,
    }: {
        query: { postId: string; side?: 'help' | 'support' }
        req: any
        store: any
    }) {
        if (req && process.env.NODE_ENV !== 'development') {
            return { data: null }
        } else {
            store.dispatch({ type: UPDATE, payload: { side: query.side } })
            const db = firebaseApp.firestore()
            const docRef = db.collection(COLLECTIONS.POSTS)
            const postData = await docRef
                .doc(query.postId)
                .get()
                .catch(e => console.error(e))
            const data = postData && postData.exists ? { ...postData.data(), id: postData.id } : null
            return { data: data }
        }
    }
    render() {
        return <PostDetail data={this.props.data} />
    }
}

export default connect(state => state)(PagePostDetail)
