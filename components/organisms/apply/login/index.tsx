import * as React from 'react'
import styled from '@emotion/styled'
import Login from 'components/organisms/login'

const ApplyLogin = (): JSX.Element => {
    const handleCheck = (value: boolean): void => {
        console.log('check', value)
    }

    return (
        <div>
            <Login title={'募集に応募する'} onChangeCheck={handleCheck} />
            <ApplyButton>応募する</ApplyButton>
            <BackButton>戻る</BackButton>
        </div>
    )
}

export default ApplyLogin

const ApplyButton = styled.button`
    display: block;
    margin: 80px auto 50px;
    width: 400px;
    height: 80px;
    background-image: url(/img/btn_apply_help.png);
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
