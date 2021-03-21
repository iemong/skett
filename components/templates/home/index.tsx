import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { PostType } from 'types/index'
import Main from 'components/templates/layouts/Main'
import Tab from 'components/organisms/tab'
import Card from 'components/molecules/card'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import { State as rootState } from 'reducers'

const Home = (): JSX.Element => {
    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)
    const [posts, setPosts] = React.useState<PostType[]>([])

    const { side } = useSelector((state: rootState) => state.rootReducer.tab)

    const loadPostsData = React.useCallback(async () => {
        const data = await docRef
            .where('isEnd', '==', false)
            .orderBy('timestamp', 'desc')
            .get()
            .catch(e => console.error(e))
        if (!data) return
        const docs = data.docs
        const posts = docs.map(doc => doc.data() as PostType)
        setPosts(posts)
    }, [docRef])

    React.useEffect(() => {
        loadPostsData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const helpPosts = React.useMemo(() => {
        const filteredPosts = posts.filter(post => post.side === 'help')
        return filteredPosts.map((post, index) => (
            <Card
                key={index}
                imgUrl={post.imageUrl}
                description={post.title}
                link={`/posts/${post.id ?? ''}`}
                side={'help'}
            />
        ))
    }, [posts])

    const supportPosts = React.useMemo(() => {
        const filteredPosts = posts.filter(post => post.side === 'support')
        return filteredPosts.map((post, index) => (
            <Card
                key={index}
                imgUrl={post.imageUrl}
                description={post.title}
                link={`/posts/${post.id ?? ''}`}
                side={'support'}
            />
        ))
    }, [posts])

    const organizationPosts = React.useMemo(() => {
        const filteredPosts = posts.filter(post => post.side === 'organization')
        return filteredPosts.map((post, index) => (
            <Card
                key={index}
                imgUrl={post.imageUrl}
                description={post.title}
                link={`/posts/${post.id ?? ''}`}
                side={'organization'}
            />
        ))
    }, [posts])

    const helpPostElement = <ItemWrapper>{helpPosts}</ItemWrapper>
    const supportPostElement = <ItemWrapper>{supportPosts}</ItemWrapper>
    const organizationPostElement = <ItemWrapper>{organizationPosts}</ItemWrapper>

    return (
        <Main>
            <React.Fragment>
                <Tab
                    helpContents={helpPostElement}
                    supportContents={supportPostElement}
                    organizationContents={organizationPostElement}
                    tabSide={side}
                />
                <Link href={'/register'}>
                    <AddButton>声の追加</AddButton>
                </Link>
            </React.Fragment>
        </Main>
    )
}

export default Home

const ItemWrapper = styled.div`
    margin-top: 60px;
`

const AddButton = styled.button`
    position: fixed;
    right: 0;
    bottom: 100px;
    display: block;
    width: 251px;
    height: 81px;
    background-image: url(/img/btn_add.png);
    color: transparent;
`
