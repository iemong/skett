import * as React from 'react'
import styled from '@emotion/styled'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from 'components/atoms/Button'
import Main from 'components/templates/layouts/Main'
import * as Actions from 'reducers/tab/actions'
import { Side } from 'reducers/tab'

export const Omamori = (): JSX.Element => {
    const dispatch = useDispatch()
    const actions = React.useMemo(() => {
        return bindActionCreators(Actions, dispatch)
    }, [dispatch])

    const moveToHome = (side: Side) => {
        Router.push('/')
        actions.update(side)
    }

    return (
        <Main>
            <>
                <Container>
                    <MainImg src="/img/omamori_hero.png" alt="しえんのおまもり" />
                    <Title>活動するときの保険</Title>
                    <Description>
                        被災地でボランティア活動をするときは
                        <br />
                        保険が必要です。
                        <br />
                        もし、あなたが大きな怪我をした時に
                        <br />
                        多額の費用がかかるかもしれません。
                        <br />
                        <br />
                        何より、被災者を怪我させてしまったり、
                        <br />
                        被災者のものなどを壊してしまった場合、
                        <br />
                        あなたはもちろん、被災者が困ってしまいます。
                        <br />
                        <br />
                        なので、保険には必ず入りましょう。
                        <br />
                        <br />
                        今回、スケットで募集している個人のボランティアや、
                        <br />
                        スケットに登録している団体のボランティアを
                        <br />
                        対象にした保険を作りました。
                        <br />
                        <br />
                        ぜひこちらを利用ください。
                        <br />
                    </Description>
                    <Logo src="/img/omamori_logo.png" alt="しえんのおまもり" />
                    <ApplyButton href="https://s-omamori.jp/" target="_blank">
                        保険に加入する
                        <Arrow />
                    </ApplyButton>
                    <Annotation>
                        ※社会福祉協議会で入る保険はこちらのページの活動に対応していないので、「しえんのおまもり」に加入してください。
                    </Annotation>
                    <HorizontalLine />
                    <Paragraph>活動を知りたい人は以下をご覧ください</Paragraph>
                    <ButtonContainer>
                        <Button styleType="default" width="100%" height="120px" onClick={() => moveToHome('help')}>
                            現地の声
                        </Button>
                        <Button styleType="invert" width="100%" height="120px" onClick={() => moveToHome('support')}>
                            支援の声
                        </Button>
                        <Button
                            styleType="organization"
                            width="100%"
                            height="120px"
                            onClick={() => moveToHome('organization')}
                        >
                            団体の声
                        </Button>
                    </ButtonContainer>
                </Container>
                <BackButtonContainer>
                    <Button width={'400px'} height={'80px'} styleType="cancel" onClick={() => Router.push('/')}>
                        戻る
                    </Button>
                </BackButtonContainer>
            </>
        </Main>
    )
}

const Container = styled.div`
    width: calc(100% - 40px);
    margin: 60px auto 80px;
    padding: 80px 0 40px;
    border-radius: 12px;
    background-color: #fff;
    text-align: center;
`

const MainImg = styled.img`
    width: 292px;
    height: 86px;
    margin-bottom: 60px;
`

const Title = styled.h2`
    position: relative;
    margin-bottom: 60px;
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

const Description = styled.p`
    margin-bottom: 160px;
    font-size: 12px;
    color: #666;
    line-height: 1.5;

    @media (min-width: 751px) {
        font-size: 24px;
    }
`

const Logo = styled.img`
    width: 525px;
    margin-bottom: 80px;
`

const ApplyButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 560px;
    height: 120px;
    border-radius: 60px;
    margin: 0 auto;
    background-color: #5dc3de;
    font-size: 30px;
    color: #fff;
    text-decoration: none;
`

const Arrow = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    transform: translateX(120px) rotate(45deg);

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

const Annotation = styled.div`
    width: 540px;
    margin: 20px auto 0;
    color: #aaa;
    font-size: 8px;
    text-align: left;
    line-height: 1.5;

    @media (min-width: 751px) {
        font-size: 16px;
    }
`

const HorizontalLine = styled.hr`
    border: none;
    width: 540px;
    height: 2px;
    margin: 80px auto 80px;
    background-color: #ccc;
`

const Paragraph = styled.p`
    font-size: 12px;
    color: #666;

    @media (min-width: 751px) {
        font-size: 24px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    width: 480px;
    height: calc(120px * 3 + 40px * 2);
    margin: 60px auto 120px;
`

const BackButtonContainer = styled.div`
    width: 400px;
    margin: 0 auto 80px;
`
