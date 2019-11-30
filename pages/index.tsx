import * as React from 'react'
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

PageHome.getInitialProps = async (): Promise<{ data: void | firebase.firestore.DocumentData[] }> => {
    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)
    const postData = await docRef.get().catch(e => console.error(e))
    const data =
        postData &&
        postData.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        })
    return { data }
}

export default PageHome
