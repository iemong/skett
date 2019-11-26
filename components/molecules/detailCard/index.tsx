import * as React from 'react'
import styled from '@emotion/styled'
import { DateTime } from 'luxon'

type Props = {
    imgUrl: string
    title: string
    description: string
    side: 'help' | 'support'
    userId: number
    updateDate: string
    className?: string
}

const DetailCard = (props: Props): JSX.Element => {
    const { imgUrl, title, description, side, userId, updateDate, className } = props
    return (
        <Wrapper data-side={side} className={className}>
            <ThumbnailWrapper>
                <Thumbnail src={imgUrl} alt="description" />
            </ThumbnailWrapper>
            <TextBox>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Footer>
                    <User>
                        <Icon src={'/img/icn_default.png'} alt="" />
                        <UserInfo>
                            <UserName>{userId}</UserName>
                            <UpdateDate>{DateTime.fromISO(updateDate).toFormat('yyyy/MM/dd HH:mm:ss')}</UpdateDate>
                        </UserInfo>
                    </User>
                    <SnsWrapper>
                        <Twitter />
                        <Facebook />
                    </SnsWrapper>
                </Footer>
            </TextBox>
        </Wrapper>
    )
}

export default DetailCard

const Wrapper = styled.div`
    width: 690px;
    &[data-side='help'] {
        background-image: linear-gradient(to left, #00b4ed, #0091db);
    }
    &[data-side='support'] {
        background-image: linear-gradient(to left, #35b597, #00a968);
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
    padding: 15px 30px 45px 30px;
    box-sizing: border-box;
`
const Title = styled.p`
    width: 100%;
    text-align: left;
    color: #fff;
    line-height: 1.2;
    font-size: 48px;
    margin-bottom: 24px;
`

const Description = styled.p`
    width: 100%;
    text-align: left;
    color: #fff;
    font-size: 25px;
    line-height: 1.5;
    margin-bottom: 48px;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 30px;
    border-top: 1px solid #fff;
    box-sizing: border-box;
`

const User = styled.div`
    display: flex;
    align-items: center;
`
const Icon = styled.img`
    display: block;
    width: 67px;
    height: 67px;
    margin-right: 24px;
`
const UserInfo = styled.div``
const UserName = styled.p`
    font-size: 22px;
    color: #fff;
`

const UpdateDate = styled.time`
    display: block;
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
`
const SnsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const Twitter = styled.div`
    width: 41px;
    height: 33px;
    background-image: url(/img/icn_twitter.png);
    margin-right: 24px;
`
const Facebook = styled.div`
    width: 41px;
    height: 41px;
    background-image: url(/img/icn_facebook.png);
`
