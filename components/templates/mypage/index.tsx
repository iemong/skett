import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'
import Main from 'components/templates/layouts/Main'
import { PostType } from 'types/index'
import useLogin from 'components/hooks/useLogin'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import Button from 'components/atoms/Button'
import { signOut, signInFacebook, signInTwitter } from 'assets/api/auth'
import { ParticipatedItem } from 'components/molecules/ParticipatedItem'
import Router from 'next/router'

const MyPage = (): JSX.Element => {
    const user = useLogin()

    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)
    const [posts, setPosts] = React.useState<PostType[]>([])
    const [isFirst, setIsFirst] = React.useState<boolean>(true)

    const loadPostsData = React.useCallback(async () => {
        if (!user) return
        const data = await docRef
            .orderBy('timestamp', 'desc')
            .get()
            .catch(e => console.error(e))
        if (!data) return
        const docs = data.docs
        const allPosts = docs.map(doc => doc.data() as PostType)

        const myPosts = allPosts.filter((post) => post.user.uid === user.uid)
        const appliedPosts = allPosts.filter((post) => post.applicants?.some((applicant) => applicant.uid === user.uid))
        const participatedPosts = [...myPosts, ...appliedPosts].sort((a, b) => a.timestamp > b.timestamp ? -1 : 1)

        setPosts(participatedPosts)
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

    const updatePost = React.useCallback(
        (id: string, data: Partial<PostType>) => {
            docRef
                .doc(id)
                .update(data)
                .then(() => {
                    loadPostsData()
                })
        },
        [docRef, loadPostsData],
    )

    const myPosts = React.useMemo(
        () =>
            posts.map((post) => (
                <ParticipatedItem
                    key={post.id}
                    side={post.side}
                    link={`/posts/${post.id ?? ''}`}
                    title={post.title}
                    createdAt={post.createDate}
                />
            )),
        [updatePost, posts],
    )

    return (
        <Main>
            <Wrapper>
                <LoginStatus>
                    <Title>アカウント状況</Title>
                    {user && <User>
                        <UserIcon src={user?.photoURL ?? '/img/icn_default.png'} alt="" />
                        <UserName>{user?.displayName}さん</UserName>
                    </User>}
                    <ShareInner>
                        <TwitterButton onClick={signInTwitter} isActive={isActiveTwitter} />
                        <FacebookButton onClick={signInFacebook} isActive={isActiveFacebook} />
                    </ShareInner>
                    <InsuranceText>
                        保険の加入がまだの方は<br/>
                        こちらの保険をご利用ください
                    </InsuranceText>
                    <ApplyButton>
                        保険に加入する
                        <Arrow />
                    </ApplyButton>
                    <TextWrapper>
                        <Logout onClick={() => {
                            localStorage.setItem('isClient', 'false')
                            signOut()
                        }}>ログアウトする</Logout>
                    </TextWrapper>
                    <BackButton
                        styleType="cancel"
                        width={'510px'}
                        height={'100px'}
                        onClick={() => Router.push('/')}
                    >
                        戻る
                    </BackButton>
                </LoginStatus>
                {user && (
                    <React.Fragment>
                        <Past>
                            <Title>過去に作成・参加した声</Title>
                            {myPosts}
                        </Past>
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

const User = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`

const UserIcon = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 24px;
`
const UserName = styled.div`
    font-size: 22px;
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

const InsuranceText = styled.p`
    margin: 80px 0;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
`

const ApplyButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 500px;
    height: 120px;
    border-radius: 60px;
    margin: 0 auto;
    background-color: #5dc3de;
    font-size: 30px;
    color: #fff;
`

const Arrow = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  transform: translateX(100px) rotate(45deg);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 2px;
    height: 100%;
    background-color: #fff;
  }
`

const Logout = styled.p`
    margin-bottom: 50px;
    font-size: 24px;
    text-decoration: underline;
    color: #aaa;
`

const BackButton = styled(Button)``
