import * as React from 'react'
import styled from '@emotion/styled'
import Button from 'components/atoms/Button'
import { Side } from 'reducers/tab'

type Props = {
    imgUrl: string | null
    description: string
    link: string
    side: Side
}

const Card = (props: Props): JSX.Element => {
    const { imgUrl, description, link, side } = props

    const styleType = (() => {
        if (side === 'help') {
            return 'secondary'
        }
        if (side === 'support') {
            return 'invertSecondary'
        }
        if (side === 'organization') {
            return 'organizationSecondary'
        }
        return 'secondary'
    })()

    return (
        <Wrapper data-side={side}>
            {imgUrl && <ThumbnailWrapper style={{ backgroundImage: `url(${imgUrl})` }} />}
            <TextBox>
                <Description>{description}</Description>
                <Link href={`${link}?side=${side}`}>
                    <DetailButton width={'270px'} height={'50px'} styleType={styleType}>
                        詳しく見る
                    </DetailButton>
                </Link>
            </TextBox>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div`
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
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &::before {
        display: block;
        width: 100%;
        padding-bottom: 56.25%;
        content: '';
    }
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

const DetailButton = styled(Button)``

const Link = styled.a`
    text-decoration: none;
`
