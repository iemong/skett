import * as React from 'react'
import { useSelector } from 'react-redux'
import Button from 'components/atoms/Button'
import { State as rootState } from 'reducers'

type Props = {
    children?: JSX.Element | string
    onClick?: any
    width?: string
    height?: string
    className?: string
}

const ThemeButton = (props: Props): JSX.Element => {
    const { children, ...styleProps } = props
    const { side } = useSelector((state: rootState) => state.rootReducer.tab)
    return (
        <Button styleType={side === 'help' ? 'default' : 'invert'} {...styleProps}>
            {children}
        </Button>
    )
}

export default ThemeButton
