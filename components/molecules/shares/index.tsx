import * as React from 'react'
import styled from '@emotion/styled'

type Props = {
    onClickTwitter: () => void
    onClickFacebook: () => void
}

const Shares = (props: Props): JSX.Element => {
    const { onClickTwitter, onClickFacebook } = props

    return (
        <ShareInner>
            <TwitterButton onClick={onClickTwitter} />
            <FacebookButton onClick={onClickFacebook} />
        </ShareInner>
    )
}

export default Shares

const ShareInner = styled.div`
    display: flex;
    justify-content: space-between;
`

const TwitterButton = styled.button`
    display: block;
    width: 241px;
    height: 201px;
    background-image: url(/img/btn_twitter.png);
`

const FacebookButton = styled.button`
    display: block;
    width: 241px;
    height: 201px;
    background-image: url(/img/btn_facebook.png);
`
