import * as React from 'react'
import styled from '@emotion/styled'
import Button from 'components/atoms/Button'

type Props = {
    imgUrl: string
    description: string
    link: string
    side: 'help' | 'support'
}

const Card = (props: Props): JSX.Element => {
    const { imgUrl, description, link, side } = props
    return (
        <Wrapper data-side={side}>
            <ThumbnailWrapper>
                <Thumbnail src={imgUrl} alt="description" />
            </ThumbnailWrapper>
            <TextBox>
                <Description>{description}</Description>
                <Link href={`${link}?side=${side}`}>
                    <DetailButton
                        width={'270px'}
                        height={'50px'}
                        styleType={side === 'help' ? 'secondary' : 'invertSecondary'}
                    >
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

const DetailButton = styled(Button)``

const Link = styled.a`
  text-decoration: none;
`
