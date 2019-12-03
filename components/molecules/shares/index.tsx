import * as React from 'react'
import styled from '@emotion/styled'

type Props = {
    twitterLink: string
    facebookLink: string
}

const Shares = (props: Props): JSX.Element => {
    const { twitterLink, facebookLink } = props

    return (
        <ShareInner>
            <TwitterButton href={twitterLink} target="_blank" rel="noopener" />
            <FacebookButton href={facebookLink} target="_blank" rel="noopener" />
        </ShareInner>
    )
}

export default Shares

const ShareInner = styled.div`
    display: flex;
    justify-content: space-between;
`

const TwitterButton = styled.a`
    display: block;
    width: 241px;
    height: 201px;
    background-image: url(/img/btn_twitter.png);
`

const FacebookButton = styled.a`
    display: block;
    width: 241px;
    height: 201px;
    background-image: url(/img/btn_facebook.png);
`
