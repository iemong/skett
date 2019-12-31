import * as React from 'react'
import styled from '@emotion/styled'
import Login from 'components/organisms/login'

const RegisterLogin = (): JSX.Element => {
    const handleCheck = (value: boolean): void => {
        console.log('check', value)
    }

    return (
        <div>
            <Login title={'募集を作る'} onChangeCheck={handleCheck} />
            <AddButton>声の追加</AddButton>
            <BackButton>戻る</BackButton>
        </div>
    )
}

export default RegisterLogin

const AddButton = styled.button`
    display: block;
    margin: 80px auto 50px;
    width: 400px;
    height: 80px;
    background-image: url(/img/btn_register_help.png);
    color: transparent;
`

const BackButton = styled.button`
    display: block;
    width: 400px;
    height: 80px;
    margin: 0 auto;
    background-image: url(/img/btn_back.png);
    color: transparent;
`
