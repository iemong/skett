import * as React from 'react'
import styled from '@emotion/styled'
import Main from 'components/templates/layouts/Main'
import { PostType } from 'types/index'
import useLogin from 'components/hooks/useLogin'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import { ParticipatedItem } from 'components/molecules/ParticipatedItem'
import { Side } from 'reducers/tab'

export const Closed = (): JSX.Element => {
    const user = useLogin()

    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)

    const [posts, setPosts] = React.useState<PostType[]>([])
    const [isFirst, setIsFirst] = React.useState<boolean>(true)
    const [side, setSide] = React.useState<Side>('help')

    const loadPostsData = React.useCallback(async () => {
        const data = await docRef
            .where('isEnd', '==', true)
            .orderBy('timestamp', 'desc')
            .get()
            .catch(e => console.error(e))
        if (!data) return
        const docs = data.docs
        const allPosts = docs.map(doc => doc.data() as PostType)

        setPosts(allPosts)
    }, [docRef])

    React.useEffect(() => {
        if (isFirst) {
            loadPostsData()
        }
        if (user) {
            setIsFirst(false)
        }
    }, [isFirst, loadPostsData, user])

    const currentPosts = React.useMemo(
        () =>
            posts
                .filter(post => post.side === side)
                .map(post => (
                    <ParticipatedItem
                        key={post.id}
                        link={`/posts/${post.id ?? ''}`}
                        title={post.title}
                        createdAt={post.createDate}
                    />
                )),
        [posts, side],
    )

    return (
        <Main>
            <Wrapper>
                <Past>
                    <Title>過去に終了した声</Title>
                    <TabContainer>
                        <Tab data-selected={side === 'help'} data-side={'help'} onClick={() => setSide('help')}>
                            現地の声
                        </Tab>
                        <Tab
                            data-selected={side === 'support'}
                            data-side={'support'}
                            onClick={() => setSide('support')}
                        >
                            支援の声
                        </Tab>
                        <Tab
                            data-selected={side === 'organization'}
                            data-side={'organization'}
                            onClick={() => setSide('organization')}
                        >
                            団体の声
                        </Tab>
                    </TabContainer>
                    {currentPosts}
                </Past>
            </Wrapper>
        </Main>
    )
}

const Wrapper = styled.div`
    padding-bottom: 40px;
`

const Past = styled.div`
    width: 600px;
    margin: 40px auto 40px;
    padding: 80px 45px 60px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 16px;
`

const Title = styled.p`
    position: relative;
    margin-bottom: 55px;
    padding-bottom: 33px;
    font-size: 38px;
    text-align: center;
    color: #000;
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100px;
        height: 5px;
        background-image: linear-gradient(to left, #00b4ed, #0091db);
        transform: translateX(-50%);
    }
`

const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Tab = styled.div`
    position: relative;
    margin-bottom: 55px;
    padding-bottom: 16px;
    font-size: 24px;
    text-align: center;
    color: #000;
    cursor: pointer;

    &:nth-child(2) {
        margin: 0 100px 55px;
    }

    &[data-selected='true'] {
        &::before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 100px;
            height: 5px;
            background-image: linear-gradient(to left, #00b4ed, #0091db);
            transform: translateX(-50%);
        }

        &[data-side='help'] {
            color: #00b4ed;
            &::before {
                background-image: linear-gradient(to left, #00b4ed, #0091db);
            }
        }
        &[data-side='support'] {
            color: #00a968;
            &::before {
                background: linear-gradient(to right, #35b597, #00a968);
            }
        }
        &[data-side='organization'] {
            color: #e85625;
            &::before {
                background: linear-gradient(to right, #e8563a 0%, #e53a2b 100%);
            }
        }
    }
`
