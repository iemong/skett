import * as React from 'react'
import Head from 'next/head'
import firebase from '../../../assets/utils/firebase'
import 'firebase/analytics'

type Props = {
    children: JSX.Element | string
}

const Main = (props: Props) => {
    const { children } = props
    React.useEffect(() => {
        firebase.analytics()
    }, [])
    return (
        <React.Fragment>
            <Head>
                <title>Skett</title>
            </Head>
            {children}
        </React.Fragment>
    )
}

export default Main
