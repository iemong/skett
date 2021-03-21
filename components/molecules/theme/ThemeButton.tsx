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
    disable?: boolean
}

const ThemeButton = (props: Props): JSX.Element => {
    const { children, disable, ...styleProps } = props
    const { side } = useSelector((state: rootState) => state.rootReducer.tab)

    const buttonType = React.useMemo(() => {
        if (disable) return 'disable'
        if (side === 'help') {
            return 'default'
        }
        if (side === 'support') {
            return 'invert'
        }
        if (side === 'organization') {
            return 'organization'
        }
        return 'default'
    }, [disable, side])

    return (
        <Button styleType={buttonType} {...styleProps}>
            {children}
        </Button>
    )
}

export default ThemeButton
