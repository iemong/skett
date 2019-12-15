import * as React from 'react'
import styled from '@emotion/styled'
import Shares from 'components/molecules/shares'

type Props = {
    title: string
    onChangeCheck: (value: boolean) => void
    alternativeText?: string
    hasCheck?: boolean
}

const Login = (props: Props): JSX.Element => {
    const { title, onChangeCheck, alternativeText, hasCheck = true } = props
    const [isConsent, setIsConsent] = React.useState<boolean>(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsConsent(e.target.value === 'false')
        onChangeCheck(e.target.value === 'false')
    }

    return (
        <LoginBox>
            <Title>{title}</Title>
            {alternativeText ? (
                <Lead>{alternativeText}</Lead>
            ) : (
                <Lead>
                    {title}にはSNSアカウントで
                    <br />
                    ログインする必要があります。
                </Lead>
            )}
            <Shares twitterLink={''} facebookLink={''} />
            {hasCheck && (
                <RegulationWrapper>
                    <CheckBox type={'checkbox'} name={'consent'} value={String(isConsent)} onChange={onChange} />
                    {/* modalが開く */}
                    <Regulation
                        onClick={(): void => {
                            console.log('clicked')
                        }}
                    >
                        利用規約
                    </Regulation>
                </RegulationWrapper>
            )}
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

const Title = styled.h1`
    position: relative;
    margin-bottom: 45px;
    padding-bottom: 33px;
    font-size: 38px;
    text-align: center;
    color: #000;
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100px;
        height: 5px;
        background-image: linear-gradient(to left, #00b4ed, #0091db);
        transform: translateX(-50%);
    }
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
