import * as React from 'react'
import firebase from 'firebase'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import Home from 'components/templates/home'
import { PostType } from 'types/index'

type Props = {
    data: PostType[]
}

const PageHome = (props: Props): JSX.Element => {
    const { data } = props
    return <Home data={data} />
}

PageHome.getInitialProps = async ({
    req,
}: {
    req: any
}): Promise<{ data: void | firebase.firestore.DocumentData[] | null }> => {
    if (req) {
        return { data: null }
    } else {
        const db = firebaseApp.firestore()
        const docRef = db.collection(COLLECTIONS.POSTS)
        const postData = await docRef
            .orderBy('timestamp', 'desc')
            .get()
            .catch(e => console.error(e))
        const data =
            postData &&
            postData.docs.map(doc => {
                return { ...doc.data() }
            })
        return { data }
    }
}

export default PageHome
