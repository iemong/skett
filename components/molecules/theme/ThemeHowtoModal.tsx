import * as React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { State as rootState } from 'reducers'
import Modal, { StyleType } from 'components/atoms/Modal'

type Props = {
    isShowing: boolean
    toggle: () => void
}

const ThemeHowtoModal = (props: Props): JSX.Element => {
    const { isShowing, toggle } = props
    const { side } = useSelector((state: rootState) => state.rootReducer.tab)
    return (
        <Modal styleType={side as StyleType} width={'600px'} height={'60%'} isShowing={isShowing} onClose={toggle}>
            <ModalInner>
                <img
                    src={side === 'help' ? '/img/svg/howto_txt_help.svg' : '/img/svg/howto_txt_support.svg'}
                    width={'500px'}
                    alt=""
                />
            </ModalInner>
        </Modal>
    )
}

export default ThemeHowtoModal

const ModalInner = styled.div`
    & > img {
        display: block;
        margin: 0 auto 0;
        padding-bottom: 100px;
    }
`
