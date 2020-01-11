import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'

export type UserType = {
    displayName: string | null
    email: string | null
    uid: string
    photoURL: string | null
}

type PostType = {
    id: string
    user: UserType
    title: string
    description: string
    isOpen: boolean
    createDate: string
    updateDate: string
    url: string
    imageUrl: string
    ogpImageUrl: string
    side: 'help' | 'support'
    timestamp: number
    applicants?: string[]
}
// initialise
admin.initializeApp(functions.config().firebase)
const db = admin.firestore()
const app = express()

// HTML template
const uniqUrl = 'https://fukko-skett.jp/'
const siteName = 'スケット | 被災地の助っ人マッチング'
const title = 'スケット | 被災地の助っ人マッチング'
const metaDescription =
    'スケットは被災した地域の現地の声と、支援者を直接結びつけるサービスです。支援者として、事前に登録しておくことで、万が一に備えます。'
const metaKeywords = ['スケット', 'skett', 'ボランティア', '被災地', '被災', 'マッチング']
const ogDescription =
    'スケットは被災した地域の現地の声と、支援者を直接結びつけるサービスです。支援者として、事前に登録しておくことで、万が一に備えます。'
const ogImageWidth = 1200
const ogImageHeight = 630
const fbAppid = '458835718172364'
const twDescription =
    'スケットは被災した地域の現地の声と、支援者を直接結びつけるサービスです。支援者として、事前に登録しておくことで、万が一に備えます。'

const generateHtml = (url: string, id: string) => `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="description" content=${metaDescription}>
    <meta name="keywords" content=${metaKeywords.join(',')}>
    <meta property="og:locale" content="ja_JP">
    <meta property="og:type" content="website">
    <meta property="og:url" content=${uniqUrl}>
    <meta property="og:title" content=${title}>
    <meta property="og:site_name" content=${siteName}>
    <meta property="og:description" content=${ogDescription}>
    <meta property="og:image" content=${url}>
    <meta property="og:image:width" content=${ogImageWidth}>
    <meta property="og:image:height" content=${ogImageHeight}>
    <meta property="fb:app_id" content=${fbAppid}>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content=${title}>
    <meta name="twitter:description" content=${twDescription}>
    <meta name="twitter:image" content=${url}>
  </head>
  <body>
    <script>
      location.href = '/posts/${id}';
    </script>
  </body>
</html>
`

app.get('/share/:id', async (req: any, res: any) => {
    const docRef = db.collection('posts')
    const postData = await docRef
        .doc(req.params.id)
        .get()
        .catch(e => console.error(e))
    const data = postData && postData.exists ? (postData.data() as PostType) : null
    if (!data) {
        res.status(200).send('404 Not Exist')
    } else {
        const html = generateHtml(data.ogpImageUrl, data.id)
        res.send(html)
    }
})

export const s = functions.region('us-central1').https.onRequest(app)
