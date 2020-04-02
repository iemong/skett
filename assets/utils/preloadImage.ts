export const preloadImage = (url: string): Promise<HTMLImageElement> => {
    if (!url) return Promise.reject('invalid url.')

    return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = (): void => resolve(img)
        img.onerror = (): void => reject(`preloadImage: ${url}`)
        img.src = url
    })
}
