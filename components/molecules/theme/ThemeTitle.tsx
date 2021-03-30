import * as React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { State as rootState } from 'reducers'
import { Side } from 'reducers/tab'

type Props = {
    children?: JSX.Element | string
    className?: string
}

const ThemeTitle = (props: Props): JSX.Element => {
    const { children, className } = props
    const { side } = useSelector((state: rootState) => state.rootReducer.tab)
    return (
        <Title side={side} className={className}>
            {children}
        </Title>
    )
}

export default ThemeTitle

const Title = styled.h1<{ side: Side }>`
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
        background-image: ${props =>
            props.side === 'help'
                ? 'linear-gradient(to left, #00b4ed, #0091db)'
                : 'linear-gradient(to left, #00AEBB, #00A968)'};
        transform: translateX(-50%);
    }
`
