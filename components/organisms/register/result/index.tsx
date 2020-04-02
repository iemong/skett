import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Shares from 'components/molecules/shares'
import { createFacebookIntent, createTwitterIntent } from 'assets/utils/share'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import Button from 'components/atoms/Button'

type Props = {
    url: string
    title?: string
}

const Result = (props: Props): JSX.Element => {
    const { url, title = '作成完了' } = props

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>{title}</Title>
                <Lead>
                    あなたの募集の作成が完了しました。
                    <br />
                    下記のURL先で公開されます。
                </Lead>
                <Flex>
                    <LinkText>{url}</LinkText>
                    <Copy>
                        <CopyImg src="/img/svg/icn_clipboard.svg" alt="copy" />
                    </Copy>
                </Flex>
            </TitleWrapper>
            <ShareWrapper>
                <Title>この声をシェアする</Title>
                <Lead>SNSであなたの声をシェアしよう。</Lead>
                <Shares
                    onClickTwitter={(): void => {
                        const intent = createTwitterIntent({
                            url,
                            text: '',
                            hashtags: '被災地のスケット',
                        })
                        window.open(intent)
                    }}
                    onClickFacebook={(): void => {
                        const intent = createFacebookIntent(url)
                        window.open(intent)
                    }}
                />
            </ShareWrapper>
            <Link href={'/'}>
                <BackButton width={'400px'} height={'80px'} styleType="cancel">
                    TOPへ
                </BackButton>
            </Link>
        </Wrapper>
    )
}

export default Result
const Wrapper = styled.div`
    margin-top: 60px;
`

const TitleWrapper = styled.div`
    width: 600px;
    margin: 0 auto 80px;
    padding: 70px 45px 100px;
    border-radius: 16px;
    background-color: #fff;
    box-sizing: border-box;
`

const Title = styled(ThemeTitle)`
    margin-bottom: 55px;
`

const Lead = styled.p`
    margin-bottom: 40px;
    line-height: 1.5;
    text-align: center;
    font-size: 22px;
`

const LinkText = styled.p`
    width: 515px;
    height: auto;
    padding: 8px 10px;
    box-sizing: border-box;
    line-height: 1.5;
    word-break: break-all;
    border: 4px solid #f39800;
    font-size: 20px;
`

const ShareWrapper = styled.div`
    width: 600px;
    margin: 0 auto 80px;
    padding: 70px 45px 70px;
    border-radius: 16px;
    background-color: #fff;
    box-sizing: border-box;
`

const BackButton = styled(Button)`
    margin: 0 auto;
`

const Flex = styled.div`
    display: flex;
`

const Copy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin-left: 9px;
    border: 4px solid #f39800;
    box-sizing: border-box;
`

const CopyImg = styled.img`
    width: 44px;
    height: 57px;
`
