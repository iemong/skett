import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'

enum StyleType {
    default,
    invert,
    twitter,
    facebook,
    cancel,
}

type StyleProps = {
    width?: string
    height?: string
    styleType: keyof typeof StyleType
    className?: string
}

type Props = StyleProps & {
    children?: JSX.Element | string
    onClick?: any
}

const Button = (props: Props) => {
    const { children, onClick, styleType, ...styleProps } = props

    if (styleType === 'twitter') {
        return (
            <ButtonStyle role="button" styleType={styleType} {...styleProps}>
                <React.Fragment>
                    <p>twitter</p>
                    <img src="/img/svg/icn_twitter.svg" width={22} alt="twitter" />
                </React.Fragment>
            </ButtonStyle>
        )
    }

    if (styleType === 'facebook') {
        return (
            <ButtonStyle role="button" {...styleProps} styleType={styleType}>
                <React.Fragment>
                    <p>facebook</p>
                    <img src="/img/svg/icn_facebook.svg" width={22} alt="icn_facebook" />
                </React.Fragment>
            </ButtonStyle>
        )
    }

    return (
        <ButtonStyle role="button" {...styleProps} styleType={styleType} onClick={onClick}>
            {children}
        </ButtonStyle>
    )
}

export default Button

const AdditionalStyle = (props: StyleProps) => {
    if (props.styleType === 'default') {
        return css({
            width: props.width,
            height: props.height,
            background: 'linear-gradient(to right, #00B4ED, #0091DB)',
            borderRadius: `10px`,
        })
    } else if (props.styleType === 'invert') {
        return css({
            width: props.width,
            height: props.height,
            background: 'linear-gradient(to right, #35B597, #00A968)',
            borderRadius: '10px',
        })
    } else if (props.styleType === 'twitter') {
        return css({
            width: props.width ? props.width : `${320 / 2}px`,
            height: props.height,
            justifyContent: 'space-between',
            padding: '0 15px 0 20px',
            backgroundColor: '#359DC5',
        })
    } else if (props.styleType === 'facebook') {
        return css({
            width: props.width ? props.width : `${320 / 2}px`,
            height: props.height,
            justifyContent: 'space-between',
            padding: '0 15px 0 20px',
            backgroundColor: '#495996',
        })
    } else if (props.styleType === 'cancel') {
        return css({
            width: props.width,
            height: props.height,
            background: 'linear-gradient(to right, #BFBFBF, #999)',
            borderRadius: '10px',
        })
    }
}

const ButtonStyle = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 30px;
    border-radius: ${90 / 2}px;
    box-sizing: border-box;
    cursor: pointer;
    ${AdditionalStyle};
    font-family: 'Noto Sans JP', sans-serif;
    font-smoothing: antialiased;
`
