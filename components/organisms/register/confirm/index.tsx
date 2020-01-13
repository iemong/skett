import * as React from 'react'
import styled from '@emotion/styled'
import DetailCard from 'components/molecules/detailCard'
import { UserType } from 'types/index'
import Button from 'components/atoms/Button'
import ThemeButton from 'components/molecules/theme/ThemeButton'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'

type Props = {
    imgUrl: string
    title: string
    description: string
    updateDate: string
    onSubmit: () => void
    onBack: () => void
    user: UserType
    side: 'help' | 'support'
    confirmText?: string
}

const Confirm = (props: Props): JSX.Element => {
    const { onSubmit, onBack, user, side, confirmText = '声をつくる', ...cardProps } = props
    return (
        <Wrapper>
            <ConfirmTitleWrapper>
                <ConfirmTitle>内容確認</ConfirmTitle>
            </ConfirmTitleWrapper>
            <DetailCard {...cardProps} side={side} user={user} />
            <RegisterButton width={'400px'} height={'80px'} onClick={onSubmit}>
                {confirmText}
            </RegisterButton>
            <BackButton width={'400px'} height={'80px'} styleType="cancel" onClick={onBack}>
                戻る
            </BackButton>
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

const ConfirmTitle = styled(ThemeTitle)``

const RegisterButton = styled(ThemeButton)`
    margin: 0 auto 50px;
`

const BackButton = styled(Button)`
    margin: 0 auto;
`
