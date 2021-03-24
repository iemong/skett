import * as React from 'react'
import 'firebase/analytics'
import styled from '@emotion/styled'
import Link from 'next/link'
import firebase from '../../../assets/utils/firebaseApp'
import useLogin from 'components/hooks/useLogin'

type Props = {
    children: JSX.Element | string
}

const Main = (props: Props): JSX.Element => {
    const { children } = props

    const user = useLogin()

    React.useEffect(() => {
        firebase.analytics()
    }, [])

    return (
        <Wrapper>
            <Header>
                <Link href={'/'}>
                    <Logo src="/img/logo.png" alt="スケット" />
                </Link>
                <RightSide>
                    {user && <Link href={'/mypage'}>
                        <a>
                            <UserIcon src={user.photoURL ?? ''} alt="アイコン" />
                        </a>
                    </Link>}
                    <Menu src='/img/menu.png' alt="メニュー" />
                </RightSide>
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

const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserIcon = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

const Menu = styled.img`
    width: 40px;
    height: 30px;
    margin-left: 20px;
`
