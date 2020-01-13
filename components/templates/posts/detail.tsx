import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Router from 'next/router'
import { useSelector } from 'react-redux'
import Main from 'components/templates/layouts/Main'
import { PostType } from 'types/index'
import Tab from 'components/organisms/tab'
import DetailCard from 'components/molecules/detailCard'
import { State as rootState } from 'reducers'
import ThemeButton from 'components/molecules/theme/ThemeButton'
import Button from 'components/atoms/Button'
import useLogin from 'components/hooks/useLogin'

type Props = {
    data: PostType | null
}

const PostDetail = (props: Props): JSX.Element => {
    const { data } = props

    const { side } = useSelector((state: rootState) => state.rootReducer.tab)
    const user = useLogin()

    const postElement = React.useMemo(() => {
        if (!data) return <>Loading</>
        return (
            <Wrapper>
                <DetailCardWithMargin
                    imgUrl={data.imageUrl}
                    title={data.title}
                    description={data.description}
                    user={data.user}
                    side={side}
                    updateDate={data.updateDate}
                />
                {user?.uid === data.user?.uid ? (
                    <Link href={{ pathname: '/edit', query: { postId: data.id, side } }}>
                        <EditButton width={'400px'} height={'80px'}>
                            編集する
                        </EditButton>
                    </Link>
                ) : (
                    <Link href={{ pathname: '/apply', query: { postId: data.id } }}>
                        <ApplyButton width={'400px'} height={'80px'}>
                            応募する
                        </ApplyButton>
                    </Link>
                )}
                <BackButton width={'400px'} height={'80px'} styleType="cancel" onClick={(): void => Router.back()}>
                    戻る
                </BackButton>
            </Wrapper>
        )
    }, [data, side, user])

    const tabElement = React.useMemo(() => {
        return side === 'help' ? (
            <Tab leftContent={postElement} tabSide="left" onClickLeft={(): void => Router.back()} />
        ) : (
            <Tab rightContent={postElement} tabSide="right" onClickRight={(): void => Router.back()} />
        )
    }, [postElement, side])
    return <Main>{tabElement}</Main>
}

export default PostDetail

const Wrapper = styled.div`
    margin-top: 60px;
    padding-bottom: 100px;
`

const DetailCardWithMargin = styled(DetailCard)`
    margin-bottom: 80px;
`

const EditButton = styled(ThemeButton)`
    margin: 0 auto 48px;
`

const ApplyButton = styled(ThemeButton)`
    margin: 0 auto 48px;
`

const BackButton = styled(Button)`
    margin: 0 auto;
`
