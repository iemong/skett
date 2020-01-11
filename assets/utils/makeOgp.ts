import { preloadImage } from 'assets/utils/preloadImage'
import drawImageProp from 'assets/utils/drawImageProp'

type Options = {
    canvas?: HTMLCanvasElement
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
    context.save()
    const offset = {
        x: 0.5,
        y: 0.5,
    }
    drawImageProp(context, image, WIDTH / 2, 0, WIDTH / 2, HEIGHT, offset.x, offset.y)
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
    context.font = `bold ${fontSize}px Noto Sans JP`
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

const drawMore = async (context: CanvasRenderingContext2D): Promise<CanvasRenderingContext2D> => {
    context.save()
    // 文字を入力する
    const image = await preloadImage('/img/svg/ogp_btn_more.svg')
    context.drawImage(image, 158, 510)
    context.restore()
    return context
}

export const exportDataURL = (canvas: HTMLCanvasElement): string => {
    return canvas.toDataURL('image/jpg')
}

export const exportBlob = (canvas: HTMLCanvasElement): Promise<Blob | null> => {
    return new Promise(resolve => {
        canvas.toBlob(blob => {
            resolve(blob)
        })
    })
}

export default async (options: Options) => {
    const canvas = options.canvas || document.createElement('canvas')
    if (!options.canvas) {
        canvas.width = WIDTH
        canvas.height = HEIGHT
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) return canvas
    drawBG(ctx, options.postType)
    await drawImage(ctx, options.imageData)
    drawText(ctx, options.text)
    await drawMore(ctx)
    return canvas
}
