import * as React from 'react'
import styled from '@emotion/styled'
import Logins from 'components/molecules/logins'
import { signInFacebook, signInTwitter } from 'assets/api/auth'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import TermsModal from 'components/molecules/modal/TermsModal'
import useModal from 'components/hooks/useModal'
import PrivacyPolicyModal from 'components/molecules/modal/PrivacyPolicyModal'

type Props = {
    title: string
    onChangeCheck?: (value: boolean) => void
    user: firebase.User | null
}

const Login = (props: Props): JSX.Element => {
    const { title, onChangeCheck, user } = props
    const [isConsent, setIsConsent] = React.useState<boolean>(false)
    const { isShowing: isShowingTerms, toggle: toggleTerms } = useModal()
    const { isShowing: isShowingPrivacyPolicy, toggle: togglePrivacyPolicy } = useModal()

    const isActiveFacebook = React.useMemo(
        () => user?.providerData.map(data => data?.providerId).includes('facebook.com') || false,
        [user],
    )
    const isActiveTwitter = React.useMemo(
        () => user?.providerData.map(data => data?.providerId).includes('twitter.com') || false,
        [user],
    )

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsConsent(e.target.value === 'false')
        if (onChangeCheck) onChangeCheck(e.target.value === 'false')
    }

    return (
        <LoginBox>
            <Title>{title}</Title>
            <Lead>
                {title}にはSNSアカウントで
                <br />
                ログインする必要があります。
            </Lead>
            <Logins
                onClickTwitter={signInTwitter}
                onClickFacebook={signInFacebook}
                isLoginTwitter={isActiveTwitter}
                isLoginFacebook={isActiveFacebook}
            />
            <Regulation onClick={toggleTerms}>利用規約</Regulation>
            <PrivacyPolicy onClick={togglePrivacyPolicy}>プライバシーポリシー</PrivacyPolicy>
            <TermsModal isShowing={isShowingTerms} toggle={toggleTerms} onClickPrivacyPolicy={togglePrivacyPolicy} />
            <PrivacyPolicyModal isShowing={isShowingPrivacyPolicy} toggle={togglePrivacyPolicy} />
            <CheckBoxWrapper>
                <CheckBox type={'checkbox'} name={'consent'} value={String(isConsent)} onChange={onChange} />
                <ConfirmText>上記の2点を確認しました</ConfirmText>
            </CheckBoxWrapper>
        </LoginBox>
    )
}

export default Login

const LoginBox = styled.div`
    width: 600px;
    margin: 60px auto 0;
    padding: 75px 40px 102px;
    background-color: #fff;
    border-radius: 16px;
    box-sizing: border-box;
    overflow: hidden;
`

const Title = styled(ThemeTitle)`
    margin-bottom: 45px;
`

const Lead = styled.p`
    margin-bottom: 70px;
    text-align: center;
    line-height: 1.5;
    font-size: 22px;
`

const CheckBoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`

const Regulation = styled.p`
    margin: 70px auto 30px;
    text-align: center;
    text-decoration: underline;
    font-size: 24px;
`

const PrivacyPolicy = styled.p`
    text-align: center;
    text-decoration: underline;
    font-size: 24px;
`

const CheckBox = styled.input`
    display: block;
    width: 30px;
    height: 30px;
`

const ConfirmText = styled.p`
    text-align: center;
    font-size: 24px;
`
