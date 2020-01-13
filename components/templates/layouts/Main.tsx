import * as React from 'react'
import 'firebase/analytics'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import firebase from '../../../assets/utils/firebaseApp'
type Props = {
    children: JSX.Element | string
}

interface Data {
    Tablet: boolean
    Mobile: boolean
    iOS: boolean
    iPad: boolean
    iPhone: boolean
    Android: boolean
    MSIE: boolean
    IE6: boolean
    IE7: boolean
    IE8: boolean
    IE9: boolean
    IE10: boolean
    IE11: boolean
    IE: boolean
    Edge: boolean
    Chrome: boolean
    Firefox: boolean
    Safari: boolean
    Opera: boolean
    isPC?: boolean
    isSP?: boolean
}

const Main = (props: Props): JSX.Element => {
    const { children } = props
    const router = useRouter()
    React.useEffect(() => {
        firebase.analytics()
        const getUA = () => {
            const ua = window.navigator.userAgent.toLowerCase()
            const ver = window.navigator.appVersion.toLowerCase()

            const isMSIE = ua.indexOf('msie') !== -1 && ua.indexOf('opera') === -1
            const isIE11 = ua.indexOf('trident/7') !== -1

            const data: Data = {
                Tablet:
                    (ua.indexOf('windows') !== -1 && ua.indexOf('touch') !== -1 && ua.indexOf('tablet pc') === -1) ||
                    ua.indexOf('ipad') !== -1 ||
                    (ua.indexOf('android') !== -1 && ua.indexOf('mobile') === -1) ||
                    (ua.indexOf('firefox') !== -1 && ua.indexOf('tablet') !== -1) ||
                    ua.indexOf('kindle') !== -1 ||
                    ua.indexOf('silk') !== -1 ||
                    ua.indexOf('playbook') !== -1,
                Mobile:
                    (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1) ||
                    ua.indexOf('iphone') !== -1 ||
                    ua.indexOf('ipod') !== -1 ||
                    (ua.indexOf('android') !== -1 && ua.indexOf('mobile') !== -1) ||
                    (ua.indexOf('firefox') !== -1 && ua.indexOf('mobile') !== -1) ||
                    ua.indexOf('blackberry') !== -1,
                iOS: ua.indexOf('iphone') !== -1 || ua.indexOf('ipod') !== -1 || ua.indexOf('ipad') !== -1,
                iPad: ua.indexOf('ipad') !== -1,
                iPhone: ua.indexOf('iphone') !== -1,
                Android: ua.indexOf('android') !== -1,
                MSIE: isMSIE, // IE11以外
                IE6: isMSIE && ver.indexOf('msie 6.') !== -1,
                IE7: isMSIE && ver.indexOf('msie 7.') !== -1,
                IE8: isMSIE && ver.indexOf('msie 8.') !== -1,
                IE9: isMSIE && ver.indexOf('msie 9.') !== -1,
                IE10: isMSIE && ver.indexOf('msie 10.') !== -1,
                IE11: isIE11,
                IE: isMSIE || isIE11,
                Edge: ua.indexOf('edge') !== -1,
                Chrome: ua.indexOf('chrome') !== -1 && ua.indexOf('edge') === -1,
                Firefox: ua.indexOf('firefox') !== -1,
                Safari: ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1,
                Opera: ua.indexOf('opera') !== -1,
            }
            data.isSP = data.Mobile || data.Tablet
            data.isPC = !data.isSP

            return data
        }

        if (getUA().isPC) {
            router.push('/')
        }
    }, [router])
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
