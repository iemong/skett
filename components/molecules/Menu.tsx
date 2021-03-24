import * as React from 'react'
import styled from '@emotion/styled'
import { Z_INDEX_LIST } from 'assets/constant'
import Router from 'next/router'
import { signOut } from 'assets/api/auth'
import useModal from 'components/hooks/useModal'
import PrivacyPolicyModal from './modal/PrivacyPolicyModal'
import ThemeHowtoModal from './theme/ThemeHowtoModal'

type Props = {
    onClose: () => void
}

export const Menu = (props: Props): JSX.Element => {
    const { onClose } = props

    React.useEffect(() => {
        Router.events.on('routeChangeStart', onClose)

        return () => {
            Router.events.off('routeChangeStart', onClose)
        }
    })

    React.useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden'
        return (): void => {
            document.body.style.overflow = originalStyle
        }
    }, [])

    return (
        <Conttainer>
            <MenuContents onClose={onClose} />
            <Logo src="/img/logo_gray.png" alt="ロゴ" />
            <Copyright>
                &copy; FUKKO DESIGN All Rights Reserved.
            </Copyright>
        </Conttainer>
    )
}

export const MenuContents = (props: Props) => {
    const { onClose } = props

    const { isShowing: isShowingHowto, toggle: toggleHowto } = useModal()
    const { isShowing: isShowingPrivacyPolicy, toggle: togglePrivacyPolicy } = useModal()

    return (
        <>
        <List>
            <Item onClick={() => {
                Router.push('/mypage')
                onClose()
            }}>
                マイページ
            </Item>
            <Item onClick={() => {
                toggleHowto()
            }}>
                使い方
            </Item>
            <Item>
                しえんのおまもりについて
            </Item>
            <Item onClick={() => {
                Router.push('/closed')
                onClose()
            }}>
                過去に終了した声
            </Item>
            <Item onClick={() => {
                togglePrivacyPolicy()
            }}>
                プライバシーポリシー
            </Item>
            <Item onClick={() => {
                localStorage.setItem('isClient', 'false')
                signOut()
                onClose()
            }}>
                ログアウト
            </Item>
        </List>
        <ThemeHowtoModal isShowing={isShowingHowto} toggle={toggleHowto} />
        <PrivacyPolicyModal isShowing={isShowingPrivacyPolicy} toggle={togglePrivacyPolicy} />
        </>
    )
}

const Conttainer = styled.div`
    position: fixed;
    top: 114px;
    left: 0;
    width: 100%;
    height: calc(100% - 114px);
    background-color: #fff;
    text-align: center;
    z-index: ${Z_INDEX_LIST.MODAL};
`

const Logo = styled.img`
    display: block;
    width: 211px;
    height: 53px;
    margin: 0 auto 40px;
`

const Copyright = styled.small`
    font-size: 10px;
    color: #ccc;
`

const List = styled.div`
    width: calc(100% - 80px);
    margin: 80px auto;
    font-size: 24px;
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    color: #ccc;
    border-top: 1px solid #ccc;

    &:last-child {
        border-bottom: 1px solid #ccc;
    }
`
