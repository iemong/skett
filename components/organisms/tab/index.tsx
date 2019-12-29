import * as React from 'react'
import styled from '@emotion/styled'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Z_INDEX_LIST } from 'assets/constant'
import * as Actions from 'reducers/tab/actions'

type Props = {
    leftContent?: string | JSX.Element
    rightContent?: string | JSX.Element
    onClickLeft?: () => void
    onClickRight?: () => void
    className?: string
}

const Tab = (props: Props): JSX.Element => {
    const { leftContent, rightContent, onClickLeft, onClickRight, className } = props

    const [tabName, setTabName] = React.useState<'left' | 'right'>('left')

    const dispatch = useDispatch()
    const actions = React.useMemo(() => {
        return bindActionCreators(Actions, dispatch)
    }, [dispatch])

    const helpClickHandler = React.useCallback((): void => {
        setTabName('left')
        actions.update('help')
        if (onClickLeft) onClickLeft()
        if (!rightContent) Router.push('/')
    }, [actions, onClickLeft, rightContent])

    const supportClickHandler = React.useCallback((): void => {
        setTabName('right')
        actions.update('support')
        if (onClickRight) onClickRight()
        if (!leftContent) Router.push('/')
    }, [actions, leftContent, onClickRight])

    return (
        <Tabs className={className}>
            <TabList>
                <TabHelp onClick={helpClickHandler} data-selected={tabName === 'left'} />
                <TabSupport onClick={supportClickHandler} data-selected={tabName === 'right'} />
            </TabList>
            {(tabName === 'left' && <TabPanel>{leftContent}</TabPanel>) ||
                (tabName === 'right' && <TabPanel>{rightContent}</TabPanel>)}
        </Tabs>
    )
}

export default Tab

const Tabs = styled.div``
const TabList = styled.div`
    position: relative;
    height: 91px;
`

const TabHelp = styled.div`
    position: absolute;
    width: 750px;
    height: 100%;
    box-sizing: border-box;
    background-image: url(/img/tab_help_off.png);
    z-index: ${Z_INDEX_LIST.TAB_FRONT};
    &[data-selected='true'] {
        background-image: url(/img/tab_help_on.png);
        z-index: ${Z_INDEX_LIST.TAB_FRONT};
        pointer-events: none;
    }
`
const TabSupport = styled.div`
    position: absolute;
    width: 750px;
    height: 100%;
    box-sizing: border-box;
    background-image: url(/img/tab_support_off.png);
    z-index: ${Z_INDEX_LIST.TAB_BACK};
    &[data-selected='true'] {
        background-image: url(/img/tab_support_on.png);
        z-index: ${Z_INDEX_LIST.TAB_FRONT};
        pointer-events: none;
    }
`

const TabPanel = styled.div``
