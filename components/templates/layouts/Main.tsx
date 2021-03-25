import * as React from 'react'
import 'firebase/analytics'
import styled from '@emotion/styled'
import Link from 'next/link'
import firebase from '../../../assets/utils/firebaseApp'
import useLogin from 'components/hooks/useLogin'
import { Menu } from 'components/molecules/Menu'
import { Footer } from 'components/molecules/Footer'

type Props = {
    children: JSX.Element | string
}

const Main = (props: Props): JSX.Element => {
    const { children } = props

    const user = useLogin()

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    React.useEffect(() => {
        firebase.analytics()
    }, [])

    return (
        <Wrapper>
            <Header>
                <Inner>
                    <Link href={'/'}>
                        <a>
                            <Logo src="/img/logo.png" alt="スケット" />
                        </a>
                    </Link>
                    <RightSide>
                        {user && (
                            <Link href={'/mypage'}>
                                <a>
                                    <UserIcon src={user.photoURL ?? '/img/icn_default.png'} alt="アイコン" />
                                </a>
                            </Link>
                        )}
                        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} src="/img/menu.png" alt="メニュー" />
                    </RightSide>
                </Inner>
            </Header>
            {children}
            {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
            <Footer />
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    min-height: 100vh;
    background-image: url(/img/bg_line.png);
`

const Header = styled.header`
    height: 114px;
    padding: 0 30px 0 40px;
    box-sizing: border-box;
    background-color: #fff;
`

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 780px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
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

const MenuButton = styled.img`
    width: 40px;
    height: 30px;
    margin-left: 20px;
    cursor: pointer;
`
