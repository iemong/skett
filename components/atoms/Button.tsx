import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'

enum StyleType {
    default,
    twitter,
    facebook,
    cancel,
}

type StyleProps = {
    styleType: keyof typeof StyleType
    className?: string
}

type Props = StyleProps & {
    children?: JSX.Element | string
}

const Button = (props: Props) => {
    const { children, styleType, className } = props

    if (styleType === 'twitter') {
        return (
            <ButtonStyle role="button" className={className} styleType={styleType}>
                <React.Fragment>
                    <p>twitter</p>
                    <img src="/img/svg/icn_twitter.svg" width={22} alt="twitter" />
                </React.Fragment>
            </ButtonStyle>
        )
    }

    if (styleType === 'facebook') {
        return (
            <ButtonStyle role="button" className={className} styleType={styleType}>
                <React.Fragment>
                    <p>facebook</p>
                    <img src="/img/svg/icn_facebook.svg" width={22} alt="icn_facebook" />
                </React.Fragment>
            </ButtonStyle>
        )
    }

    return (
        <ButtonStyle role="button" className={className} styleType={styleType}>
            {children}
        </ButtonStyle>
    )
}

export default Button

const AdditionalStyle = (props: StyleProps) => {
    if (props.styleType === 'default') {
        return css({
            background: 'linear-gradient(to right, #FFB300, #FF8000)',
        })
    } else if (props.styleType === 'twitter') {
        return css({
            width: `${320 / 2}px`,
            justifyContent: 'space-between',
            padding: '0 15px 0 20px',
            backgroundColor: '#359DC5',
        })
    } else if (props.styleType === 'facebook') {
        return css({
            width: `${320 / 2}px`,
            justifyContent: 'space-between',
            padding: '0 15px 0 20px',
            backgroundColor: '#495996',
        })
    } else if (props.styleType === 'cancel') {
        return css({
            background: 'linear-gradient(to right, #BFBFBF, #999)',
        })
    } else {
        return css({
            background: 'red',
        })
    }
}

const ButtonStyle = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: ${30 / 2}px;
    width: ${370 / 2}px;
    height: ${90 / 2}px;
    border-radius: ${90 / 2 / 2}px;
    box-sizing: border-box;
    cursor: pointer;
    ${AdditionalStyle};
`
