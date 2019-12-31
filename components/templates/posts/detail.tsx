import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Router from 'next/router'
import Main from 'components/templates/layouts/Main'
import { PostType } from 'types/index'
import Tab from 'components/organisms/tab'
import DetailCard from 'components/molecules/detailCard'

type Props = {
    data: PostType | null
}

const PostDetail = (props: Props): JSX.Element => {
    const { data } = props
    if (!data) return <>Loading</>
    const helpPostElement = (
        <Wrapper>
            <DetailCardWithMargin
                imgUrl={data.imageUrl}
                title={data.title}
                description={data.description}
                user={data.user}
                side={'help'}
                updateDate={data.updateDate}
            />
            <Link href={'/apply'}>
                <ApplyButton />
            </Link>
            <BackButton onClick={(): void => Router.back()} />
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

const DetailCardWithMargin = styled(DetailCard)`
    margin-bottom: 80px;
`

const ApplyButton = styled.button`
    display: block;
    width: 401px;
    height: 81px;
    background-image: url(/img/btn_apply_help.png);
    margin: 0 auto 48px;
`

const BackButton = styled.button`
    display: block;
    width: 401px;
    height: 81px;
    background-image: url(/img/btn_back.png);
    margin: 0 auto;
`
