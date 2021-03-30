import * as React from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from '@emotion/styled'
import { Z_INDEX_LIST } from 'assets/constant'
import * as Actions from 'reducers/tab/actions'
import { State as rootState } from 'reducers'
import { Side } from 'reducers/tab'
import Button from 'components/atoms/Button'

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

    const styleType = React.useMemo(() => {
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
    }, [side])

    return (
        <div className={className}>
            <Container>
                <TabInner>
                    <Tabs onClick={() => changeTab('help')} data-selected={tabName === 'help'} data-tab="help" />
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
                <InsuranceCard data-side={side}>
                    <TextBox>
                        <Description>{'活動に参加するには\nこちらの保険をご利用ください'}</Description>
                        <Link href={'/omamori'}>
                            <Button width={'270px'} height={'50px'} styleType={styleType}>
                                保険の内容はこちら
                            </Button>
                        </Link>
                    </TextBox>
                </InsuranceCard>
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

    &[data-tab='help'] {
        left: 0;
        background-image: url(/img/tab_help_sp.png);

        @media (min-width: 751px) {
            background-image: url(/img/tab_help_pc.png);
        }
    }
    &[data-tab='support'] {
        left: 0;
        right: 0;
        width: 270px;
        margin: 0 auto;
        background-image: url(/img/tab_support_sp.png);

        @media (min-width: 751px) {
            background-image: url(/img/tab_support_pc.png);
        }
    }
    &[data-tab='organization'] {
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

const InsuranceCard = styled.div`
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
    margin: 40px auto;
    border-radius: 16px;
    overflow: hidden;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 60px;
    box-sizing: border-box;
`
const Description = styled.p`
    width: 100%;
    text-align: left;
    color: #fff;
    line-height: 1.2;
    font-size: 40px;
    white-space: pre-wrap;
    margin-bottom: 24px;
`

const Link = styled.a`
    text-decoration: none;
`


export default Tab
