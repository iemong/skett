import * as React from 'react'
import styled from '@emotion/styled'
import DetailCard from 'components/molecules/detailCard'

type Props = {
    imgUrl: string
    title: string
    description: string
    updateDate: string
    onSubmit: () => void
    onBack: () => void
}

const Confirm = (props: Props): JSX.Element => {
    const { onSubmit, onBack, ...cardProps } = props
    return (
        <Wrapper>
            <ConfirmTitleWrapper>
                <ConfirmTitle>内容確認</ConfirmTitle>
            </ConfirmTitleWrapper>
            <DetailCard {...cardProps} side={'help'} userId={1} />
            <RegisterButton onClick={onSubmit}>声を作る</RegisterButton>
            <BackButton onClick={onBack}>戻る</BackButton>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = styled.div`
    margin: 60px auto 0;
`

const ConfirmTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 230px;
    margin: 0 auto 80px;
    border-radius: 16px;
    background-color: #fff;
`

const ConfirmTitle = styled.h1`
    position: relative;
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

const RegisterButton = styled.button`
    display: block;
    margin: 0 auto 50px;
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
