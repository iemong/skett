import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import express from 'express'

enum COLLECTIONS {
    USERS = 'users',
    POSTS = 'posts',
}

type PostType = {
    id?: string
    userId: number
    title: string
    description: string
    isOpen: boolean
    createDate: string
    updateDate: string
    url: string
    imageUrl: string
    side: 'help' | 'support'
}

// initialise
admin.initializeApp()
const db = admin.firestore()
const app = express()

// HTML template
const uniqUrl = 'https://qiita.com/'
const siteName = 'Qiita'
const title = 'Qiita'
const metaDescription = 'プログラミング情報共有サイトです。'
const metaKeywords = ['プログラミング']
const ogDescription = 'プログラミング情報共有サイトです。'
const ogImageWidth = 1200
const ogImageHeight = 630
const fbAppid = ''
const twDescription = 'プログラミング情報共有サイトです。'

const generateHtml = (url: string) => `
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
      location.href = '/share';
    </script>
  </body>
</html>
`

app.get('/:id', async (req: any, res: any) => {
    console.log(req, res)
    const postId = ''
    const docRef = db.collection(COLLECTIONS.POSTS)
    const postData = await docRef
        .doc(postId)
        .get()
        .catch(e => console.error(e))
    const data = postData && postData.exists ? ({ ...postData.data(), id: postData.id } as PostType) : null

    if (!data) {
        res.status(404).send('404 Not Exist')
    } else {
        const html = generateHtml(data.imageUrl)
        res.send(html)
    }
})

export const ogpPage = functions.https.onRequest(app)
