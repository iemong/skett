import * as React from 'react'
import styled from '@emotion/styled'
import makeOgp from 'assets/utils/makeOgp'

type Props = {
    image: string | null
    title: string
    postType: 'help' | 'support'
}

const Canvas = (props: Props): JSX.Element => {
    const { image, title, postType } = props
    const canvasElm = React.useRef<HTMLCanvasElement | null>(null)

    React.useEffect(() => {
        if (!canvasElm) return
        if (!canvasElm.current) return
        if (!image) return
        makeOgp({
            canvas: canvasElm.current,
            imageData: image,
            postType: postType,
            text: title,
        })
    }, [image, postType, title])
    return (
        <Wrapper>
            <CanvasElm ref={canvasElm} width={1200} height={630} />
        </Wrapper>
    )
}

export default Canvas

const Wrapper = styled.div``

const CanvasElm = styled.canvas``
