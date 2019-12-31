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
                    <title>Skett</title>
                    <meta name="viewport" content="width=750" />
                </Head>
                <Global
                    styles={css`
                        ${emotionReset};
                        body {
                            position: absolute;
                            width: 100%;
                            height: 100%;
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
