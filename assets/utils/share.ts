import queryString from 'assets/utils/queryString'

type TwitterOptions = {
    url: string // url シェアしたいURL
    text: string // text シェア文言
    hashtags: string // hashtags ハッシュタグ
}
export const createTwitterIntent = (opts: TwitterOptions): string =>
    `https://twitter.com/intent/tweet?${queryString(opts)}`

export const createFacebookIntent = (url: string, quote?: string): string => {
    const queries = quote ? queryString({ u: url, quote }) : queryString({ u: url })
    return `https://www.facebook.com/share.php?${queries}`
}
