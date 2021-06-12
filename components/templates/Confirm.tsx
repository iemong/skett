import * as React from 'react'
import styled from '@emotion/styled'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from 'components/atoms/Button'
import Main from 'components/templates/layouts/Main'
import * as Actions from 'reducers/tab/actions'
import { Side } from 'reducers/tab'

export const Confirm = (): JSX.Element => {
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
                    <Description>
                    「しえんのおまもり」は、
                    <br />
                    被災地の助っ人マッチング「スケット」で募集された
                    <br />
                    活動が対象になる保険です。
                    <br />
                    こちらのページを確認いただければ、
                    <br />
                    保険に加入できます。
                    </Description>
                    <ApplyButton onClick={() => window.close()}>
                        確認して申し込みに戻る
                        <Arrow />
                    </ApplyButton>
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

const Description = styled.p`
    margin-bottom: 160px;
    font-size: 12px;
    color: #666;
    line-height: 1.5;

    @media (min-width: 751px) {
        font-size: 24px;
    }
`


const ApplyButton = styled.button`
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 560px;
    height: 120px;
    border: none;
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
