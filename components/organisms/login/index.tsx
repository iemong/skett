import * as React from 'react'
import styled from '@emotion/styled'
import Shares from 'components/molecules/shares'
import { signInFacebook, signInTwitter } from 'assets/api/auth'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import TermsModal from 'components/molecules/modal/TermsModal'
import useModal from 'components/hooks/useModal'

type Props = {
    title: string
    onChangeCheck?: (value: boolean) => void
}

const Login = (props: Props): JSX.Element => {
    const { title, onChangeCheck } = props
    const [isConsent, setIsConsent] = React.useState<boolean>(false)
    const { isShowing, toggle } = useModal()

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
            <Shares onClickTwitter={signInTwitter} onClickFacebook={signInFacebook} />
            <RegulationWrapper>
                <CheckBox type={'checkbox'} name={'consent'} value={String(isConsent)} onChange={onChange} />
                <Regulation onClick={toggle}>利用規約</Regulation>
                <TermsModal isShowing={isShowing} toggle={toggle} />
            </RegulationWrapper>
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

const RegulationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`

const Regulation = styled.p`
    text-align: center;
    text-decoration: underline;
    font-size: 24px;
    margin-left: 0.75em;
`

const CheckBox = styled.input`
    display: block;
    width: 30px;
    height: 30px;
`
