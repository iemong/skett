import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import css from '@emotion/css'
import { Z_INDEX_LIST } from 'assets/constant'

enum StyleType {
    default,
    help,
    support,
}

type StyleProps = {
    width: string
    height: string
    styleType: keyof typeof StyleType
}

type Props = StyleProps & {
    children: JSX.Element | string
    onClose?: () => void
    isShowing: boolean
}

const Modal = (props: Props): JSX.Element => {
    const { children, styleType, width, height, onClose, isShowing } = props
    return ReactDOM.createPortal(
        isShowing ? (
            <ModalStyle width={width} height={height} styleType={styleType}>
                <Overlay onClick={onClose} />
                <Inner className="inner" width={width} height={height}>
                    <Content>{children}</Content>
                    <Close onClick={onClose}>
                        <img src="/img/svg/icn_close.svg" width="50" alt="×" />
                    </Close>
                    <Button onClick={onClose}>閉じる</Button>
                </Inner>
            </ModalStyle>
        ) : null,
        document.body,
    ) as JSX.Element
}

export default Modal

const AdditionalStyle = (props: StyleProps) => {
    if (props.styleType === 'default') {
        return css({
            '& > .inner': {
                background: '#fff',
            },
        })
    } else if (props.styleType === 'help') {
        return css({
            '& > .inner': {
                background: 'linear-gradient(to right, #00B4ED, #0091DB)',
            },
        })
    } else if (props.styleType === 'support') {
        return css({
            '& > .inner': {
                background: 'linear-gradient(to right, #35B597, #00A968)',
            },
        })
    }
}

const ModalStyle = styled.div<StyleProps>`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    ${AdditionalStyle};
    z-index: ${Z_INDEX_LIST.MODAL};
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const Inner = styled.div<{ width: string; height: string }>`
    position: relative;
    margin-top: 24%;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 40px 0;
    box-sizing: border-box;
    border-radius: 14px;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
`

const Button = styled.button`
    position: absolute;
    left: 50%;
    bottom: -155px;
    width: 400px;
    height: 80px;
    background-color: #fff;
    border-radius: 10px;
    color: #000;
    font-size: 28px;
    transform: translateX(-50%);
`

const Close = styled.button`
    position: absolute;
    top: -25px;
    right: -25px;
`
