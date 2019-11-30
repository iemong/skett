import queryString from 'assets/utils/queryString'

type TwitterOptions = {
    url: string // url シェアしたいURL
    text: string // text シェア文言
    hashtags: string // hashtags ハッシュタグ
}
export const createTwitterIntent = (opts: TwitterOptions): string =>
    `http://twitter.com/intent/tweet?${queryString(opts)}`

export const createFacebookIntent = (url: string): string =>
    `http://www.facebook.com/share.php?${queryString({ u: url })}`
