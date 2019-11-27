import * as React from 'react'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import { PostType } from 'types/index'
import PostDetail from 'components/templates/posts/detail'

type Props = {
    data: PostType
}

const PagePostDetail = (props: Props) => {
    return <PostDetail data={props.data} />
}

PagePostDetail.getInitialProps = async ({
    query,
}: {
    query: { postId: string }
}): Promise<{ data: null | firebase.firestore.DocumentData | '' }> => {
    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)
    const postData = await docRef
        .doc(query.postId)
        .get()
        .catch(e => console.error(e))
    const data = postData && postData.exists ? { ...postData.data(), id: postData.id } : null
    return { data: data }
}

export default PagePostDetail
