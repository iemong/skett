import * as React from 'react'
import styled from '@emotion/styled'
import Main from 'components/templates/layouts/Main'
import { PostType } from 'types/index'
import Tab from 'components/organisms/tab'
import DetailCard from 'components/molecules/detailCard'

type Props = {
    data: PostType
}

const PostDetail = (props: Props): JSX.Element => {
    const { data } = props
    const helpPostElement = (
        <Wrapper>
            <DetailCard
                imgUrl={data.imageUrl}
                title={data.title}
                description={data.description}
                userId={data.userId}
                side={'help'}
                updateDate={data.updateDate}
            />
        </Wrapper>
    )
    return (
        <Main>
            <Tab leftContent={helpPostElement} />
        </Main>
    )
}

export default PostDetail

const Wrapper = styled.div`
    margin-top: 60px;
`
