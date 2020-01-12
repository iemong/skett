import * as React from 'react'
import styled from '@emotion/styled'

type Props = {
    onClickTwitter: () => void
    onClickFacebook: () => void
}

const Logins = (props: Props): JSX.Element => {
    const { onClickTwitter, onClickFacebook } = props

    return (
        <LoginInner>
            <TwitterButton onClick={onClickTwitter} />
            <FacebookButton onClick={onClickFacebook} />
        </LoginInner>
    )
}

export default Logins

const LoginInner = styled.div`
`

const TwitterButton = styled.button`
    display: block;
    width: 510px;
    height: 100px;
    background-image: url(/img/svg/btn_twitter_login.svg);
    margin-bottom: 24px;
`

const FacebookButton = styled.button`
    display: block;
    width: 510px;
    height: 100px;
    background-image: url(/img/svg/btn_facebook_login.svg);
`
