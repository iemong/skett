import * as React from 'react'
import Apply from 'components/templates/apply'

type Props = {
    postId: string
}

const ApplyPage = (props: Props): JSX.Element => {
    const { postId } = props
    return <Apply postId={postId} />
}

ApplyPage.getInitialProps = async ({ query }: { query: { postId: string } }) => {
    return { postId: query.postId }
}

export default ApplyPage
