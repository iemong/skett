import { preloadImage } from 'assets/utils/preloadImage'

type Options = {
    canvas: HTMLCanvasElement
    imageData: string
    text: string
    postType: 'help' | 'support'
}

const WIDTH = 1200
const HEIGHT = 630

const drawBG = (context: CanvasRenderingContext2D, postType: 'help' | 'support'): CanvasRenderingContext2D => {
    context.save()
    const gradient = context.createLinearGradient(0, 0, WIDTH / 2, 0)
    if (postType === 'help') {
        gradient.addColorStop(0, '#00B4ED')
        gradient.addColorStop(1, '#0091DB')
    } else {
        gradient.addColorStop(0, '#35B597')
        gradient.addColorStop(1, '#00A968')
    }
    context.fillStyle = gradient
    context.rect(0, 0, WIDTH / 2, HEIGHT)
    context.fill()
    context.restore()
    return context
}

const drawImage = async (context: CanvasRenderingContext2D, imageData: string): Promise<CanvasRenderingContext2D> => {
    const image = await preloadImage(imageData)
    const imageWidth = image.naturalWidth
    const imageHeight = image.naturalHeight
    const canvasAspect = WIDTH / HEIGHT
    const imageAspect = imageWidth / imageHeight
    let sx, sy, sw, sh
    context.save()
    if (canvasAspect >= imageAspect) {
        const ratio = WIDTH / imageWidth
        sx = WIDTH / 2
        sy = (imageHeight * ratio - HEIGHT) / ratio / 2
        sw = imageWidth / 2
        sh = HEIGHT / ratio
    } else {
        const ratio = HEIGHT / imageHeight
        sx = (imageWidth * ratio - WIDTH) / ratio / 2
        sy = 0
        sw = WIDTH / ratio
        sh = imageHeight
    }
    context.drawImage(image, sx, sy, sw, sh, WIDTH / 2, 0, WIDTH / 2, HEIGHT)

    context.restore()
    return context
}

const drawText = (context: CanvasRenderingContext2D, text: string): CanvasRenderingContext2D => {
    const fontSize = 84
    const lineHeight = 1.25
    const x = 50
    const y = 150
    const lengthPerLine = 6
    const maxLines = 4
    const reg = new RegExp(`(.{${lengthPerLine}})`)
    const trimedText =
        text.length > lengthPerLine * maxLines ? text.slice(0, lengthPerLine * maxLines - 1).replace(/$/, '…') : text

    context.save()
    context.beginPath()
    context.font = `bold ${fontSize}px Arial`
    context.fillStyle = '#fff'
    trimedText
        .split(reg)
        .filter(s => s)
        .forEach((str, index) => {
            context.fillText(str, x, y + index * 84 * lineHeight)
        })
    context.restore()
    return context
}

const drawMore = (context: CanvasRenderingContext2D): CanvasRenderingContext2D => {
    context.save()
    // 文字を入力する

    context.restore()
    return context
}

const exportOgp = (canvas: HTMLCanvasElement): string => {
    return canvas.toDataURL('image/png')
}

export default async (options: Options) => {
    const ctx = options.canvas.getContext('2d')
    if (!ctx) return
    drawBG(ctx, options.postType)
    await drawImage(ctx, options.imageData)
    drawText(ctx, options.text)
}
