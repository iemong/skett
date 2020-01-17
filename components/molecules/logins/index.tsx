import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'

type Props = {
    onClickTwitter: () => void
    onClickFacebook: () => void
    isLoginTwitter: boolean
    isLoginFacebook: boolean
}

const Logins = (props: Props): JSX.Element => {
    const { onClickTwitter, onClickFacebook, isLoginFacebook, isLoginTwitter } = props

    return (
        <LoginInner>
            <TwitterButton onClick={onClickTwitter} isActive={isLoginTwitter} />
            <FacebookButton onClick={onClickFacebook} isActive={isLoginFacebook} />
        </LoginInner>
    )
}

export default Logins

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

const LoginInner = styled.div``

const TwitterButton = styled.button<{ isActive: boolean }>`
    position: relative;
    display: block;
    width: 510px;
    height: 100px;
    background-image: url(/img/svg/btn_twitter_login.svg);
    margin-bottom: 24px;
    &::after {
        ${props => props.isActive && AlreadyLogin}
    }
`

const FacebookButton = styled.button<{ isActive: boolean }>`
    position: relative;
    display: block;
    width: 510px;
    height: 100px;
    background-image: url(/img/svg/btn_facebook_login.svg);
    &::after {
        ${props => props.isActive && AlreadyLogin}
    }
`
