import * as React from 'react'
import styled from '@emotion/styled'
import DetailCard from 'components/molecules/detailCard'
import { UserType } from 'types/index'
import Button from 'components/atoms/Button'
import ThemeButton from 'components/molecules/theme/ThemeButton'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import makeOgp, { exportDataURL } from 'assets/utils/makeOgp'
import { Side } from 'reducers/tab'

type Props = {
    imgUrl: string | null
    title: string
    description: string
    updateDate: string
    onSubmit: () => void
    onBack: () => void
    user: UserType
    side: Side
    confirmText?: string
}

const Confirm = (props: Props): JSX.Element => {
    const { onSubmit, onBack, user, side, confirmText = '声をつくる', imgUrl, title, ...cardProps } = props
    const [imgSrc, setImgSrc] = React.useState('')

    React.useEffect(() => {
        if (imgUrl) {
            makeOgp({
                text: title,
                imageData: imgUrl,
                postType: side,
            }).then(canvas => {
                setImgSrc(exportDataURL(canvas))
            })
        }
    }, [imgUrl, side, title])
    return (
        <Wrapper>
            <ConfirmTitleWrapper>
                <ConfirmTitle>内容確認</ConfirmTitle>
            </ConfirmTitleWrapper>
            <DetailCard {...cardProps} title={title} imgUrl={imgUrl} side={side} user={user} isEnd={false} />
            <ConfirmTitleWrapper>
                <ConfirmTitle>シェアした時の見え方</ConfirmTitle>
            </ConfirmTitleWrapper>
            <Preview>
                <PreviewImage src={imgSrc} alt="" />
            </Preview>
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

const Preview = styled.div`
    width: 690px;
    margin: 0 auto 120px;
`

const PreviewImage = styled.img`
    width: 100%;
`

const RegisterButton = styled(ThemeButton)`
    margin: 0 auto 50px;
`

const BackButton = styled(Button)`
    margin: 0 auto;
`
