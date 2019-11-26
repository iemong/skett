import * as React from 'react'
import Head from 'next/head'
import 'firebase/analytics'
import { Global, css } from '@emotion/core'
import emotionReset from 'emotion-reset'
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
        <React.Fragment>
            <Head>
                <title>Skett</title>
                <meta name="viewport" content="width=750" />
            </Head>
            <Global
                styles={css`
                    ${emotionReset};
                    body {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }
                    input {
                        padding: 0;
                        border: none;
                        border-radius: 0;
                        outline: none;
                        background: none;
                    }
                    textarea {
                        appearance: none;
                        resize: none;
                        padding: 0;
                        border: 0;
                        outline: none;
                        background: transparent;
                    }
                    button {
                        background-color: transparent;
                        border: none;
                        cursor: pointer;
                        outline: none;
                        padding: 0;
                        appearance: none;
                    }
                `}
            />
            <Wrapper>
                <Header>
                    <Link href={'/'}>
                        <Logo src="/img/logo.png" alt="スケット" />
                    </Link>
                    <Button>
                        <img src="/img/btn_mypage.png" alt="マイページ" />
                    </Button>
                </Header>
                {children}
            </Wrapper>
        </React.Fragment>
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

const Button = styled.button``
