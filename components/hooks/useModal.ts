import * as React from 'react'

type ReturnType = {
    isShowing: boolean
    toggle: () => void
}

const useModal = (): ReturnType => {
    const [isShowing, setIsShowing] = React.useState(false)

    const toggle = (): void => {
        setIsShowing(!isShowing)
    }

    React.useLayoutEffect(() => {
        if (!isShowing) return
        const originalStyle = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden'
        return (): void => {
            document.body.style.overflow = originalStyle
        }
    }, [isShowing])

    return {
        isShowing,
        toggle,
    }
}

export default useModal
