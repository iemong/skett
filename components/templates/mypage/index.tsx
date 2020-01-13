import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'
import Main from 'components/templates/layouts/Main'
import { PostType } from 'types/index'
import useLogin from 'components/hooks/useLogin'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import useModal from 'components/hooks/useModal'
import TermsModal from 'components/molecules/modal/TermsModal'
import PrivacyPolicyModal from 'components/molecules/modal/PrivacyPolicyModal'
import Button from 'components/atoms/Button'
import { signOut, signInFacebook, signInTwitter } from 'assets/api/auth'
import EditableCard from 'components/molecules/editableCard'

const MyPage = (): JSX.Element => {
    const user = useLogin()

    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)
    const [posts, setPosts] = React.useState<PostType[]>([])
    const [isFirst, setIsFirst] = React.useState<boolean>(true)
    const { isShowing: isShowingTerms, toggle: toggleTerms } = useModal()
    const { isShowing: isShowingPrivacyPolicy, toggle: togglePrivacyPolicy } = useModal()

    const loadPostsData = React.useCallback(async () => {
        if (!user) return
        const data = await docRef
            .where('user.uid', '==', user.uid)
            .orderBy('timestamp', 'desc')
            .get()
            .catch(e => console.error(e))
        if (!data) return
        const docs = data.docs
        const myPosts = docs.map(doc => doc.data() as PostType)
        setPosts(myPosts)
    }, [docRef, user])

    const isActiveFacebook = React.useMemo(
        () => user?.providerData.map(data => data?.providerId).includes('facebook.com') || false,
        [user],
    )
    const isActiveTwitter = React.useMemo(
        () => user?.providerData.map(data => data?.providerId).includes('twitter.com') || false,
        [user],
    )

    React.useEffect(() => {
        if (isFirst) {
            loadPostsData()
        }
        if (user) {
            setIsFirst(false)
        }
    }, [isFirst, loadPostsData, user])

    const deletePost = React.useCallback(
        (id: string) => {
            docRef
                .doc(id)
                .delete()
                .then(() => {
                    loadPostsData()
                })
        },
        [docRef, loadPostsData],
    )

    const endPost = React.useCallback(
        (id: string) => {
            docRef
                .doc(id)
                .update({
                    isEnd: true,
                })
                .then(() => {
                    loadPostsData()
                })
        },
        [docRef, loadPostsData],
    )

    const myPosts = React.useMemo(
        () =>
            posts.map((post, index) => (
                <CardWrapper key={index}>
                    <EditableCard
                        key={index}
                        imgUrl={post.imageUrl}
                        description={post.title}
                        link={`/posts/${post.id ?? ''}`}
                        side={post.side}
                        isEnd={post.isEnd}
                        onDelete={(): void => {
                            deletePost(post.id)
                        }}
                        onEnd={(): void => {
                            endPost(post.id)
                        }}
                    />
                </CardWrapper>
            )),
        [deletePost, endPost, posts],
    )

    return (
        <Main>
            <Wrapper>
                <LoginStatus>
                    <Title>アカウント状況</Title>
                    <ShareInner>
                        <TwitterButton onClick={signInTwitter} isActive={isActiveTwitter} />
                        <FacebookButton onClick={signInFacebook} isActive={isActiveFacebook} />
                    </ShareInner>
                    <TextWrapper>
                        <Terms onClick={toggleTerms}>利用規約</Terms>
                        <PrivacyPolicy onClick={togglePrivacyPolicy}>プライバシーポリシー</PrivacyPolicy>
                    </TextWrapper>
                    <LogoutButton
                        styleType="cancel"
                        width={'510px'}
                        height={'100px'}
                        onClick={() => {
                            localStorage.setItem('isClient', 'false')
                            signOut()
                        }}
                    >
                        ログアウトする
                    </LogoutButton>
                    <TermsModal isShowing={isShowingTerms} toggle={toggleTerms} />
                    <PrivacyPolicyModal isShowing={isShowingPrivacyPolicy} toggle={togglePrivacyPolicy} />
                </LoginStatus>
                {user && (
                    <React.Fragment>
                        <Past>
                            <Title>過去に作成した声</Title>
                        </Past>
                        <div>{myPosts}</div>
                    </React.Fragment>
                )}
            </Wrapper>
        </Main>
    )
}

export default MyPage

const Wrapper = styled.div`
    padding-bottom: 40px;
`

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

const ShareInner = styled.div``

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
    width: 510px;
    height: 100px;
    margin-bottom: 24px;
    background-image: url(/img/svg/btn_twitter_login.svg);
    &::after {
        ${props => props.isActive && AlreadyLogin}
    }
`

const FacebookButton = styled.div<{ isActive: boolean }>`
    position: relative;
    display: block;
    width: 510px;
    height: 100px;
    background-image: url(/img/svg/btn_facebook_login.svg);
    &::after {
        ${props => props.isActive && AlreadyLogin}
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
`

const Terms = styled.p`
    margin-bottom: 50px;
    font-size: 24px;
    text-decoration: underline;
`

const PrivacyPolicy = styled.p`
    font-size: 24px;
    text-decoration: underline;
`

const CardWrapper = styled.div`
    padding-bottom: 60px;
`

const LogoutButton = styled(Button)``
