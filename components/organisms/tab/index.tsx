import * as React from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from '@emotion/styled'
import { Z_INDEX_LIST } from 'assets/constant'
import * as Actions from 'reducers/tab/actions'
import { State as rootState } from 'reducers'
import { Side } from 'reducers/tab'

type Props = {
    helpContents?: React.ReactNode
    supportContents?: React.ReactNode
    organizationContents?: React.ReactNode
    onClickHelp?: () => void
    onClickSupport?: () => void
    onClickOrganization?: () => void
    className?: string
    tabSide: Side
}

const Tab = (props: Props): JSX.Element => {
    const {
        helpContents,
        supportContents,
        organizationContents,
        onClickHelp,
        onClickSupport,
        onClickOrganization,
        className,
        tabSide,
    } = props
    const router = useRouter()

    const { side } = useSelector((state: rootState) => state.rootReducer.tab)

    const [tabName, setTabName] = React.useState<Side>(tabSide)

    const dispatch = useDispatch()
    const actions = React.useMemo(() => {
        return bindActionCreators(Actions, dispatch)
    }, [dispatch])

    React.useEffect(() => {
        setTabName(side)
    }, [side])

    const changeTab = (side: Side) => {
        if (router.pathname !== '/') {
            return
        }

        setTabName(side)
        actions.update(side)

        if (side === 'help') {
            onClickHelp?.()
        }
        if (side === 'support') {
            onClickSupport?.()
        }
        if (side === 'organization') {
            onClickOrganization?.()
        }
    }

    return (
        <div className={className}>
            <Container>
                <TabInner>
                    <Tabs
                        onClick={() => changeTab('help')}
                        data-selected={tabName === 'help'}
                        data-tab="help"
                    />
                    <Tabs
                        onClick={() => changeTab('support')}
                        data-selected={tabName === 'support'}
                        data-tab="support"
                    />
                    <Tabs
                        onClick={() => changeTab('organization')}
                        data-selected={tabName === 'organization'}
                        data-tab="organization"
                    />
                </TabInner>
                <TabBorder data-tab={tabName} />
            </Container>
            <div>
                {tabName === 'help' && helpContents}
                {tabName === 'support' && supportContents}
                {tabName === 'organization' && organizationContents}
            </div>
        </div>
    )
}

const Container = styled.div`
    position: relative;
    height: 91px;
    background-color: #dbdcdc;
    @media (min-width: 751px) {
        height: 46px;
    }
`

const TabInner = styled.div`
    position: relative;
    max-width: 780px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`

const Tabs = styled.div`
    position: absolute;
    width: 250px;
    height: 81px;
    box-sizing: border-box;
    z-index: ${Z_INDEX_LIST.TAB_BACK};
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.5;
    cursor: pointer;

    &[data-selected='true'] {
        /* background-image: url(/img/tab_support_on.png); */
        z-index: ${Z_INDEX_LIST.TAB_FRONT};
        pointer-events: none;
        opacity: 1;
    }

    @media (min-width: 751px) {
        width: 260px;
        height: 45px;

        &[data-selected='true'] {
        }
    }

    &[data-tab="help"] {
        left: 0;
        background-image: url(/img/tab_help_sp.png);

        @media (min-width: 751px) {
            background-image: url(/img/tab_help_pc.png);
        }
    }
    &[data-tab="support"] {
        left: 0;
        right: 0;
        width: 270px;
        margin: 0 auto;
        background-image: url(/img/tab_support_sp.png);

        @media (min-width: 751px) {
            background-image: url(/img/tab_support_pc.png);
        }
    }
    &[data-tab="organization"] {
        right: 0;
        background-image: url(/img/tab_organization_sp.png);

        @media (min-width: 751px) {
            background-image: url(/img/tab_organization_pc.png);
        }
    }

    
`

const TabBorder = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 11px;

    &[data-tab='help'] {
        background-image: linear-gradient(to right, #00b4ed, #0091db);
    }
    &[data-tab='support'] {
        background-image: linear-gradient(to right, #1aab92 33%, #00a968 66%);
    }
    &[data-tab='organization'] {
        background-image: linear-gradient(to right, #ef6123 0%, #ef6123 66%, #e85625 100%);
    }

    @media (min-width: 751px) {
        height: 6px;
    }
`

export default Tab
