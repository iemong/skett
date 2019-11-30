import * as React from 'react'
import styled from '@emotion/styled'
import { PostType } from 'types/index'
import Main from 'components/templates/layouts/Main'
import Tab from 'components/organisms/tab'
import Card from 'components/molecules/card'
import Link from 'next/link'

type Props = {
    data: PostType[]
}
const Home = (props: Props): JSX.Element => {
    const { data: posts } = props
    // TODO ちゃんとしたID渡す
    const helpPosts = posts.map((post, index) => (
        <Card
            key={index}
            imgUrl={post.imageUrl}
            description={post.title}
            link={`/posts/${post.id ?? ''}`}
            side={'help'}
        />
    ))

    const supportPosts = posts.map((post, index) => (
        <Card
            key={index}
            imgUrl={post.imageUrl}
            description={post.description}
            link={`/posts/${post.id ?? ''}`}
            side={'support'}
        />
    ))

    const helpPostElement = <ItemWrapper>{helpPosts}</ItemWrapper>
    const supportPostElement = <ItemWrapper>{supportPosts}</ItemWrapper>

    return (
        <Main>
            <React.Fragment>
                <Tab leftContent={helpPostElement} rightContent={supportPostElement} />
                <Link href={'/register'}>
                    <AddButton>声の追加</AddButton>
                </Link>
            </React.Fragment>
        </Main>
    )
}

export default Home

const ItemWrapper = styled.div`
    margin-top: 60px;
`

const AddButton = styled.button`
    position: fixed;
    right: 0;
    bottom: 100px;
    display: block;
    width: 251px;
    height: 81px;
    background-image: url(/img/btn_add.png);
    color: transparent;
`
