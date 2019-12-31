import * as React from 'react'
import App, { AppContext } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { Global, css } from '@emotion/core'
import emotionReset from 'emotion-reset'
import withRedux from 'next-redux-wrapper'
import { Store } from 'redux'
import createStore from 'store/createStore'

type Props = {
    store: Store
}

class MyApp extends App<Props> {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Provider store={store}>
                <Head>
                    <title>スケット | 被災地の助っ人マッチング</title>
                    <meta name="viewport" content="width=750" />
                    <meta name="keywords" content="スケット, skett, ボランティア, 被災地, 被災, マッチング" />
                    <meta
                        name="description"
                        content="スケットは被災した地域の現地の声と、支援者を直接結びつけるサービスです。支援者として、事前に登録しておくことで、万が一に備えます。"
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:description"
                        content="スケットは被災した地域の現地の声と、支援者を直接結びつけるサービスです。支援者として、事前に登録しておくことで、万が一に備えます。"
                    />
                    <meta property="og:url" content="https://fukko-skett.jp/" />
                    <meta property="og:image" content="" />
                    <meta property="og:title" content="スケット | 被災地の助っ人マッチング" />
                    <link rel="canonical" href="https://fukko-skett.jp/" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese"
                        rel="stylesheet"
                    />
                </Head>
                <Global
                    styles={css`
                        ${emotionReset};
                        body {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            font-family: 'Noto Sans JP', sans-serif;
                            font-smoothing: antialiased;
                        }
                        input {
                            padding: 0;
                            border: none;
                            border-radius: 0;
                            outline: none;
                            background: none;
                        }
                        textarea {
                            appearance: none;
                            resize: none;
                            padding: 0;
                            border: 0;
                            outline: none;
                            background: transparent;
                        }
                        button {
                            background-color: transparent;
                            border: none;
                            cursor: pointer;
                            outline: none;
                            padding: 0;
                            appearance: none;
                        }
                    `}
                />
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withRedux(createStore)(MyApp)
