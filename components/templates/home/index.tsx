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
            .where('isDeleted', '==', false)
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

    const href = React.useMemo(() => (side === 'organization' ? 'https://forms.gle/xqosY3davqivXJDd7' : '/register'), [side])
    const target = React.useMemo(() => (side === 'organization' ? '_blank' : '_self'), [side])

    return (
        <Main>
            <React.Fragment>
                <ContentsContainer>
                    <Tab
                        tabSide={side}
                        helpContents={helpPostElement}
                        supportContents={supportPostElement}
                        organizationContents={organizationPostElement}
                    />
                </ContentsContainer>
                <Link href={href}>
                    <AddButton href={href} target={target}>
                        声をつくる
                    </AddButton>
                </Link>
            </React.Fragment>
        </Main>
    )
}

export default Home

const ItemWrapper = styled.div`
    margin-top: 60px;
`

const AddButton = styled.a`
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to right, #e8563a 0%, #e53a2b 100%);
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    text-decoration: none;

    &::before {
        content: '+';
        font-size: 48px;
        font-weight: normal;
        margin-right: 8px;
    }

    @media (min-width: 751px) {
        max-width: 780px;
        height: 60px;
        left: 0;
        right: 0;
        margin: 0 auto;
        font-size: 14px;

        &::before {
            font-size: 24px;
        }
    }
`

const ContentsContainer = styled.div`
    @media (min-width: 751px) {
        & > div > div:nth-child(2) > div:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            max-width: 780px;
            width: 100%;
            margin: 0 auto;
            &:after {
                width: calc(100% / 2 - 32px);
                display: block;
                content: '';
            }

            & > div {
                width: calc(100% / 2 - 32px);
            }
        }
    }
`