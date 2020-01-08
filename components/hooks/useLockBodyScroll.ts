import * as React from 'react'
const useLockBodyScroll = () => {
    React.useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden'
        // Re-enable scrolling when component unmounts
        return (): void => {
            document.body.style.overflow = originalStyle
        }
    }, []) // Empty array ensures effect is only run on mount and unmount
}

export default useLockBodyScroll
