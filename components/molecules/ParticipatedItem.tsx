import * as React from 'react'
import styled from '@emotion/styled'
import { DateTime } from 'luxon'
import { Side } from 'reducers/tab'

type Props = {
    link: string
    title: string
    createdAt: string
    side?: Side
}

export const ParticipatedItem = (props: Props) => {
    const { link, title, createdAt, side } = props

    return (
        <Container href={link} data-side={side}>
            {side && (
                <LeftColumn>
                    <Dot />
                </LeftColumn>
            )}
            <CenterColumn>
                <Title>{title}</Title>
                <Time>{DateTime.fromISO(createdAt).toFormat('yyyy/MM/dd HH:mm')}</Time>
            </CenterColumn>
            <RightColumn>
                <Arrow />
            </RightColumn>
        </Container>
    )
}

const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #ccc;
    padding: 40px 0;
    border-top: 1px solid #ccc;
    cursor: pointer;

    &:last-child {
        border-bottom: 1px solid #ccc;
    }
`

const LeftColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
`

const CenterColumn = styled.div`
    width: 100%;
`

const RightColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
`

const Dot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    [data-side='help'] & {
        background: linear-gradient(to right, #00b4ed, #0091db);
    }
    [data-side='support'] & {
        background: linear-gradient(to right, #35b597, #00a968);
    }
    [data-side='organization'] & {
        background: linear-gradient(to right, #e8563a 0%, #e53a2b 100%);
    }
`

const Title = styled.h3`
    font-size: 28px;
    line-height: 1.5;
`

const Time = styled.div`
    margin-top: 8px;
    font-size: 18px;
`

const Arrow = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #ccc;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 2px;
        height: 100%;
        background-color: #ccc;
    }
`
