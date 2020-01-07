import * as React from 'react'
import styled from '@emotion/styled'
import Shares from 'components/molecules/shares'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import { createFacebookIntent, createTwitterIntent } from 'assets/utils/share'

type Props = {
    url: string
}

const Share = (props: Props): JSX.Element => {
    const { url } = props
    return (
        <ShareBox>
            <Title>この応募をシェアする</Title>
            <Lead>SNSであたなの募集をシェアしよう。</Lead>
            <Shares
                onClickTwitter={(): void => {
                    const intent = createTwitterIntent({
                        url,
                        text: '応募をシェアしました',
                        hashtags: 'skett',
                    })
                    window.open(intent)
                }}
                onClickFacebook={(): void => {
                    const intent = createFacebookIntent(url)
                    window.open(intent)
                }}
            />
        </ShareBox>
    )
}

export default Share

const ShareBox = styled.div`
    width: 600px;
    margin: 60px auto 0;
    padding: 75px 40px 102px;
    background-color: #fff;
    border-radius: 16px;
    box-sizing: border-box;
    overflow: hidden;
`

const Title = styled(ThemeTitle)`
    margin-bottom: 45px;
`

const Lead = styled.p`
    margin-bottom: 70px;
    text-align: center;
    line-height: 1.5;
    font-size: 22px;
`

const RegulationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`

const Regulation = styled.p`
    text-align: center;
    text-decoration: underline;
    font-size: 24px;
    margin-left: 0.75em;
`

const CheckBox = styled.input`
    display: block;
    width: 30px;
    height: 30px;
`
