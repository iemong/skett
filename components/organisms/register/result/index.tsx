import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { createFacebookIntent, createTwitterIntent } from 'assets/utils/share'

type Props = {
    url: string
}

const Result = (props: Props): JSX.Element => {
    const { url } = props

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>作成完了</Title>
                <Lead>
                    あなたの募集の作成が完了しました。
                    <br />
                    下記のURL先で公開されます。
                </Lead>
                <LinkText>{url}</LinkText>
            </TitleWrapper>
            <ShareWrapper>
                <Title>この声をシェアする</Title>
                <Lead>SNSであなたの声をシェアしよう。</Lead>
                <ShareInner>
                    <TwitterButton
                        href={createTwitterIntent({
                            url,
                            text: '',
                            hashtags: 'skett',
                        })}
                        target="_blank"
                        rel="noopener"
                    />
                    <FacebookButton href={createFacebookIntent(url)} target="_blank" rel="noopener" />
                </ShareInner>
            </ShareWrapper>
            <Link href={'/'}>
                <BackButton>TOPへ</BackButton>
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

const Title = styled.h1`
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
    border: 2px solid #f39800;
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

const BackButton = styled.button`
    display: block;
    width: 400px;
    height: 80px;
    margin: 0 auto;
    background-image: url(/img/btn_back.png);
    color: transparent;
`
