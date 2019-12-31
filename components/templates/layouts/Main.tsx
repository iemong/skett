import * as React from 'react'
import 'firebase/analytics'
import styled from '@emotion/styled'
import Link from 'next/link'
import firebase from '../../../assets/utils/firebaseApp'

type Props = {
    children: JSX.Element | string
}

const Main = (props: Props): JSX.Element => {
    const { children } = props
    React.useEffect(() => {
        firebase.analytics()
    }, [])
    return (
        <Wrapper>
            <Header>
                <Link href={'/'}>
                    <Logo src="/img/logo.png" alt="スケット" />
                </Link>
                <Link href={'/mypage'}>
                    <img src="/img/btn_mypage.png" alt="マイページ" />
                </Link>
            </Header>
            {children}
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    min-height: 100vh;
    background-image: url(/img/bg_line.png);
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 114px;
    padding: 0 30px 0 40px;
    box-sizing: border-box;
    background-color: #fff;
`

const Logo = styled.img`
    width: 211px;
    height: 53px;
`
