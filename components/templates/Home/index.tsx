import * as React from 'react'
import styled from '@emotion/styled'
import { PostType } from 'types/index'
import Main from 'components/templates/layouts/Main'
import Tab from 'components/organisms/tab'
import Card from 'components/molecules/card'

type Props = {
    data: PostType[]
}
const Home = (props: Props): JSX.Element => {
    const { data: posts } = props
    // TODO ちゃんとしたID渡す
    const helpPosts = posts.map((post, index) => (
        <Card key={index} imgUrl={post.imageUrl} description={post.description} link={post.url} side={'help'} />
    ))

    const supportPosts = posts.map((post, index) => (
        <Card key={index} imgUrl={post.imageUrl} description={post.description} link={post.url} side={'help'} />
    ))

    const helpPostElement = <ItemWrapper>{helpPosts}</ItemWrapper>
    const supportPostElement = <ItemWrapper>{supportPosts}</ItemWrapper>

    return (
        <Main>
            <Tab leftContent={helpPostElement} rightContent={supportPostElement} />
        </Main>
    )
}

export default Home

const ItemWrapper = styled.div`
    margin-top: 60px;
`
