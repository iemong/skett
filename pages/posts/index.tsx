import * as React from 'react'
import styled from '@emotion/styled'
import Main from '@components/templates/layouts/Main'
import firebaseApp from '@assets/utils/firebaseApp'
import { COLLECTIONS } from '@assets/constant'

type PostType = {
    userId: number
    title: string
    description: string
    isOpen: boolean
    createDate: string
    updateDate: string
    url: string
    imageUrl: string
}

type Props = {
    data: PostType[]
}

const Posts = (props: Props) => {
    const { data } = props
    console.log(props)
    console.log(data)
    return (
        <Main>
            <React.Fragment>
                <Title>This is Posts page</Title>
                <p>{JSON.stringify(data)}</p>
            </React.Fragment>
        </Main>
    )
}

Posts.getInitialProps = async () => {
    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)
    const postData = await docRef.get().catch(e => console.error(e))
    const data = postData && postData.docs.map(doc => doc.data())
    return { data }
}

export default Posts

const Title = styled.h1`
    font-size: 20px;
    color: red;
`
