import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Login from 'components/organisms/login'
import Button from 'components/atoms/Button'
import ThemeButton from 'components/molecules/theme/ThemeButton'

type Props = {
    onConsent: () => void
    hasUser: boolean
}

const ApplyLogin = (props: Props): JSX.Element => {
    const { onConsent, hasUser } = props
    const [canAdd, setCanAdd] = React.useState(false)
    const handleCheck = (value: boolean): void => {
        setCanAdd(value)
    }

    const handleConsent = React.useCallback(() => {
        onConsent()
        localStorage.setItem('isConsent', 'true')
    }, [onConsent])

    return (
        <div>
            <Login title={'ログイン'} onChangeCheck={handleCheck} />
            <ApplyButton width={'400px'} height={'80px'} disable={!(canAdd && hasUser)} onClick={handleConsent}>
                声の追加
            </ApplyButton>
            <Link href={'/'}>
                <BackButton width={'400px'} height={'80px'} styleType="cancel">
                    戻る
                </BackButton>
            </Link>
        </div>
    )
}

export default ApplyLogin

const ApplyButton = styled(ThemeButton)`
    margin: 80px auto 50px;
`

const BackButton = styled(Button)`
    margin: 0 auto;
`
