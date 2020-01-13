import * as React from 'react'
import styled from '@emotion/styled'

const PCLayout = () => {
    return (
        <Wrapper>
            <Inner>
                <Top>
                    <Left>
                        <Logo src="/img/svg/ttl_pc.svg" alt="" />
                        <Text>スマートフォンからアクセスしてご利用ください</Text>
                        <Arrow src="/img/svg/icn_arrow.svg" alt="" />
                    </Left>
                    <QRCode src={'/img/pic_qr.png'} alt="" />
                </Top>
                <Lead>被災地で困っている人とボランティアを直接結びつけるWEBサービス</Lead>
                <Hashtag>#被災地のスケット</Hashtag>
            </Inner>
        </Wrapper>
    )
}
export default PCLayout
const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #00b4ed, #0091db);
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
`

const Left = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
`

const Logo = styled.img``

const Text = styled.p`
    margin-top: auto;
    color: #fff;
    font-size: 12px;
`

const Arrow = styled.img`
    width: 303px;
`

const QRCode = styled.img``

const Lead = styled.p`
    width: 504px;
    margin: 0 auto 65px;
    line-height: 1.5;
    color: #fff;
    font-size: 28px;
`

const Hashtag = styled.p`
    color: #fff;
    font-size: 24px;
`
