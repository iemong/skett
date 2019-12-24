import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'
import Main from 'components/templates/layouts/Main'
import { PostType } from 'types/index'
import useLogin from 'components/hooks/useLogin'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import Card from 'components/molecules/card'

const MyPage = (): JSX.Element => {
    const user = useLogin()

    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)
    const [posts, setPosts] = React.useState<PostType[]>([])

    const loadPostsData = React.useCallback(async () => {
        if (!user || posts.length) return
        const data = await docRef
            .where('user.uid', '==', user.uid)
            .orderBy('timestamp', 'desc')
            .get()
            .catch(e => console.error(e))
        if (!data) return
        const docs = data.docs
        const myPosts = docs.map(doc => doc.data() as PostType)
        setPosts(myPosts)
    }, [docRef, posts.length, user])

    const isActiveFacebook = React.useMemo(
        () => user?.providerData.map(data => data?.providerId).includes('facebook.com') || false,
        [user],
    )
    const isActiveTwitter = React.useMemo(
        () => user?.providerData.map(data => data?.providerId).includes('twitter.com') || false,
        [user],
    )

    React.useEffect(() => {
        loadPostsData()
    }, [loadPostsData])

    const myPosts = React.useMemo(
        () =>
            posts.map((post, index) => (
                <CardWrapper>
                    <Card
                        key={index}
                        imgUrl={post.imageUrl}
                        description={post.title}
                        link={`/posts/${post.id ?? ''}`}
                        side={post.side}
                    />
                    <ButtonWrapper>
                        <EditButton>編集</EditButton>
                        <DeleteButton>削除</DeleteButton>
                    </ButtonWrapper>
                </CardWrapper>
            )),
        [posts],
    )

    return (
        <Main>
            <React.Fragment>
                <LoginStatus>
                    <Title>アカウント状況</Title>
                    <ShareInner>
                        <TwitterButton onClick={() => {}} isActive={isActiveTwitter} />
                        <FacebookButton onClick={() => {}} isActive={isActiveFacebook} />
                    </ShareInner>
                </LoginStatus>
                <Past>
                    <Title>アカウント状況</Title>
                </Past>
                <div>{myPosts}</div>
            </React.Fragment>
        </Main>
    )
}

export default MyPage

const LoginStatus = styled.div`
    width: 600px;
    margin: 80px auto 40px;
    padding: 80px 45px 60px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 16px;
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

const ShareInner = styled.div`
    display: flex;
    justify-content: space-between;
`

const AlreadyLogin = css`
    content: 'ログイン済';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 30px;
    color: #fff;
`

const TwitterButton = styled.div<{ isActive: boolean }>`
    position: relative;
    display: block;
    width: 241px;
    height: 201px;
    background-image: url(/img/btn_twitter.png);
    &::after {
        ${props => props.isActive && AlreadyLogin}
    }
`

const FacebookButton = styled.div<{ isActive: boolean }>`
    position: relative;
    display: block;
    width: 241px;
    height: 201px;
    background-image: url(/img/btn_facebook.png);
    &::after {
        ${props => props.isActive && AlreadyLogin}
    }
`

const CardWrapper = styled.div`
    padding-bottom: 60px;
`

const ButtonWrapper = styled.div`
    display: flex;
    width: 690px;
    margin: 0 auto;
    justify-content: space-between;
`

const ButtonStyle = css`
    width: 325px;
    height: 80px;
    background-color: #bdbdbd;
    color: #fff;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
    border-radius: 10px;
`

const EditButton = styled.button`
    ${ButtonStyle}
`

const DeleteButton = styled.button`
    ${ButtonStyle}
`
