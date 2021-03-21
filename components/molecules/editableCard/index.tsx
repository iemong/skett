import * as React from 'react'
import styled from '@emotion/styled'
import { Side } from 'reducers/tab'

type Props = {
    imgUrl: string
    description: string
    link: string
    side: Side
    isEnd: boolean
    onDelete: () => void
    onEnd: () => void
}

const EditableCard = (props: Props): JSX.Element => {
    const { imgUrl, description, link, side, onDelete, onEnd, isEnd } = props
    return (
        <Wrapper data-side={side}>
            <ThumbnailWrapper>
                <Thumbnail src={imgUrl} alt="description" />
            </ThumbnailWrapper>
            <TextBox>
                <Description>{description}</Description>
                <ButtonWrapper>
                    <EditButton onClick={onEnd}>募集を終了する</EditButton>
                    <DeleteButton onClick={onDelete}>削除</DeleteButton>
                    <Link href={`${link}?side=${side}`}>
                        <DetailButton>募集内容に変更を加える</DetailButton>
                    </Link>
                </ButtonWrapper>
            </TextBox>
            <EndMessage data-end={isEnd}>
                こちらの募集は
                <br />
                終了しました
            </EndMessage>
        </Wrapper>
    )
}

export default EditableCard

const Wrapper = styled.div`
    position: relative;
    width: 690px;
    &[data-side='help'] {
        background-image: linear-gradient(to left, #00b4ed, #0091db);
    }
    &[data-side='support'] {
        background-image: linear-gradient(to left, #35b597, #00a968);
    }
    &[data-side='organization'] {
        background-image: linear-gradient(to left, #e85625, #fd7823);
    }
    margin: 0 auto 40px;
    border-radius: 16px;
    overflow: hidden;
`
const ThumbnailWrapper = styled.div`
    min-height: 386px;
    background-color: #fff;
`
const Thumbnail = styled.img`
    width: 100%;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px 30px 30px;
    box-sizing: border-box;
`
const Description = styled.p`
    width: 100%;
    text-align: left;
    color: #fff;
    line-height: 1.2;
    font-size: 48px;
    margin-bottom: 24px;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
`

const EditButton = styled.button`
    width: 290px;
    height: 64px;
    color: #fff;
    box-sizing: border-box;
    border: 2px solid #fff;
    font-size: 24px;
    line-height: 64px;
    text-align: center;
    border-radius: 10px;
`

const DeleteButton = styled.button`
    width: 290px;
    height: 64px;
    color: #fff;
    box-sizing: border-box;
    border: 2px solid #fff;
    font-size: 24px;
    line-height: 64px;
    text-align: center;
    border-radius: 10px;
`

const DetailButton = styled.button`
    width: 100%;
    height: 64px;
    color: #fff;
    box-sizing: border-box;
    border: 2px solid #fff;
    font-size: 24px;
    line-height: 64px;
    text-align: center;
    border-radius: 10px;
`

const Link = styled.a`
    margin-top: 20px;
    text-decoration: none;
    flex-basis: 100%;
`

const EndMessage = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 38px;
    line-height: 1.5;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    &[data-end='true'] {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
