import * as React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Router, { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Z_INDEX_LIST } from 'assets/constant'
import * as Actions from 'reducers/tab/actions'
import { State as rootState } from 'reducers'

type Props = {
    leftContent?: string | JSX.Element
    rightContent?: string | JSX.Element
    onClickLeft?: () => void
    onClickRight?: () => void
    className?: string
    tabSide: 'right' | 'left'
}

const Tab = (props: Props): JSX.Element => {
    const { leftContent, rightContent, onClickLeft, onClickRight, className, tabSide } = props
    const router = useRouter()

    const { side } = useSelector((state: rootState) => state.rootReducer.tab)

    const [tabName, setTabName] = React.useState<'left' | 'right'>(tabSide)

    const dispatch = useDispatch()
    const actions = React.useMemo(() => {
        return bindActionCreators(Actions, dispatch)
    }, [dispatch])

    React.useEffect(() => {
        setTabName(side === 'help' ? 'left' : 'right')
    }, [side])

    const helpClickHandler = React.useCallback((): void => {
        if (router.pathname !== '/') return
        setTabName('left')
        actions.update('help')
        if (onClickLeft) onClickLeft()
        if (!rightContent) Router.push('/')
    }, [actions, onClickLeft, rightContent, router.pathname])

    const supportClickHandler = React.useCallback((): void => {
        if (router.pathname !== '/') return
        setTabName('right')
        actions.update('support')
        if (onClickRight) onClickRight()
        if (!leftContent) Router.push('/')
    }, [actions, leftContent, onClickRight, router.pathname])

    return (
        <div className={className}>
            <div
                css={css`
                    position: relative;
                    height: 91px;
                    background-color: #dbdcdc;
                    @media (min-width: 751px) {
                        height: 46px;
                    }
                `}
            >
                <div
                    css={css`
                        position: absolute;
                        width: 750px;
                        height: 100%;
                        left: 50%;
                        box-sizing: border-box;
                        z-index: ${Z_INDEX_LIST.TAB_BACK};
                        transform: translateX(-50%);
                        background-repeat: no-repeat;
                        background-image: url(/img/tab_help_off.png);
                        &[data-selected='true'] {
                            background-image: url(/img/tab_help_on.png);
                            z-index: ${Z_INDEX_LIST.TAB_FRONT};
                            pointer-events: none;
                        }
                        @media (min-width: 751px) {
                            width: 815px;
                            height: 100%;
                            background-image: url(/img/tab_help_off_pc.png);
                            &[data-selected='true'] {
                                background-image: url(/img/tab_help_on_pc.png);
                            }
                        }
                    `}
                    onClick={helpClickHandler}
                    data-selected={tabName === 'left'}
                />
                <div
                    css={css`
                        position: absolute;
                        width: 750px;
                        height: 100%;
                        left: 50%;
                        box-sizing: border-box;
                        z-index: ${Z_INDEX_LIST.TAB_BACK};
                        transform: translateX(-50%);
                        background-repeat: no-repeat;
                        background-image: url(/img/tab_support_off.png);
                        &[data-selected='true'] {
                            background-image: url(/img/tab_support_on.png);
                            z-index: ${Z_INDEX_LIST.TAB_FRONT};
                            pointer-events: none;
                        }
                        @media (min-width: 751px) {
                            width: 815px;
                            height: 100%;
                            background-image: url(/img/tab_support_off_pc.png);
                            &[data-selected='true'] {
                                background-image: url(/img/tab_support_on_pc.png);
                            }
                        }
                    `}
                    onClick={supportClickHandler}
                    data-selected={tabName === 'right'}
                />
            </div>
            {(tabName === 'left' && <div>{leftContent}</div>) || (tabName === 'right' && <div>{rightContent}</div>)}
        </div>
    )
}

export default Tab
