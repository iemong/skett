import * as React from 'react'
import styled from '@emotion/styled'

const PC_SCALE = 0.7

const Home = (): JSX.Element => {
    return (
        <Wrapper>
            <Inner>
                <Logo>
                    <img src="/img/svg/logo.svg" alt="スケット" />
                </Logo>
                <Text>
                    被災者のお困りごとを助け合う
                    <br />
                    ボランティア・マッチングサービス
                </Text>
                <ComingSoon>近日公開</ComingSoon>
                <HashTag>#被災者スケット</HashTag>
            </Inner>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #00b4ed, #0091db);
    color: #fff;
`

const Inner = styled.div`
    padding-top: 20vh;
`

const Logo = styled.div`
    width: 525px;
    margin: 0 auto 50px;
    @media (min-width: 750px) {
        width: ${525 * PC_SCALE}px;
        margin-bottom: ${50 * PC_SCALE}px;
    }
    & > img {
        width: 100%;
    }
`
const Text = styled.p`
    width: 16em;
    margin: 0 auto 100px;
    line-height: 1.75;
    font-size: 34px;
    @media (min-width: 750px) {
        margin-bottom: ${100 * PC_SCALE}px;
        text-align: center;
        font-size: ${34 * PC_SCALE}px;
    }
`

const ComingSoon = styled.p`
    margin-bottom: 100px;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    @media (min-width: 750px) {
        margin-bottom: ${100 * PC_SCALE}px;
        font-size: ${48 * PC_SCALE}px;
    }
`

const HashTag = styled.p`
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    @media (min-width: 750px) {
        font-size: ${48 * PC_SCALE}px;
    }
`
