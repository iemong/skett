import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'
import Main from 'components/templates/layouts/Main'
import useLogin from 'components/hooks/useLogin'

const MyPage = (): JSX.Element => {
    const user = useLogin()

    const isActiveFacebook = React.useMemo(
        () => user?.providerData.map(data => data?.providerId).includes('facebook.com') || false,
        [user],
    )
    const isActiveTwitter = React.useMemo(
        () => user?.providerData.map(data => data?.providerId).includes('twitter.com') || false,

        [user],
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
            </React.Fragment>
        </Main>
    )
}

export default MyPage

const LoginStatus = styled.div`
    width: 600px;
    margin: 80px auto 0;
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
