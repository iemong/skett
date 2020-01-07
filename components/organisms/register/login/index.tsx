import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Login from 'components/organisms/login'
import ThemeButton from 'components/molecules/theme/ThemeButton'
import Button from 'components/atoms/Button'

const RegisterLogin = (): JSX.Element => {
    const handleCheck = (value: boolean): void => {
        console.log('check', value)
    }

    return (
        <div>
            <Login title={'募集を作る'} onChangeCheck={handleCheck} />
            <AddButton width={'400px'} height={'80px'}>
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
