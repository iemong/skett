import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Login from 'components/organisms/login'
import ThemeButton from 'components/molecules/theme/ThemeButton'
import Button from 'components/atoms/Button'

type Props = {
    title: string
    onConsent: () => void
}

const RegisterLogin = (props: Props): JSX.Element => {
    const { title, onConsent } = props
    const [canAdd, setCanAdd] = React.useState(false)
    const handleCheck = (value: boolean): void => {
        setCanAdd(value)
    }

    const handleConsent = React.useCallback(() => {
        onConsent()
        localStorage.setItem('isConsent', 'true');
    }, [])

    return (
        <div>
            <Login title={'募集を作る'} onChangeCheck={handleCheck} />
            <AddButton width={'400px'} height={'80px'} disable={!canAdd} onClick={handleConsent}>
                声の追加
            </AddButton>
            <Link href={'/'}>
                <BackButton width={'400px'} height={'80px'} styleType="cancel">
                    戻る
                </BackButton>
            </Link>
        </div>
    )
}

export default RegisterLogin

const AddButton = styled(ThemeButton)`
    margin: 80px auto 50px;
`

const BackButton = styled(Button)`
    margin: 0 auto;
`
