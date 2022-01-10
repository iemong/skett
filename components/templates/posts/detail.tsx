import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Main from 'components/templates/layouts/Main'
import { PostType } from 'types/index'
import Tab from 'components/organisms/tab'
import DetailCard from 'components/molecules/detailCard'
import ThemeButton from 'components/molecules/theme/ThemeButton'
import Button from 'components/atoms/Button'
import useLogin from 'components/hooks/useLogin'
import Applicant from 'components/organisms/post/Applicant'
import * as Actions from 'reducers/tab/actions'
import Shares from 'components/molecules/shares'
import { createFacebookIntent, createTwitterIntent } from 'assets/utils/share'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'

type Props = {
    data: PostType | null
}

const PostDetail = (props: Props): JSX.Element => {
    const { data } = props

    const side = React.useMemo(() => data?.side, [data])
    const user = useLogin()

    const dispatch = useDispatch()
    const actions = React.useMemo(() => {
        return bindActionCreators(Actions, dispatch)
    }, [dispatch])

    React.useEffect(() => {
        if (side) actions.update(side)
    }, [actions, side])

    const isMyPost = React.useMemo(() => {
        return user?.uid === data?.user.uid
    }, [data, user])

    const db = firebaseApp.firestore()
    const docRef = db.collection(COLLECTIONS.POSTS)

    const updatePost = React.useCallback(
        (id: string, data: Partial<PostType>) => {
            docRef
                .doc(id)
                .update(data)
                .then(() => {
                    Router.push('/mypage')
                })
        },
        [docRef],
    )

    const postElement = React.useMemo(() => {
        if (!data || !side) return <>Loading</>

        return (
            <Wrapper>
                <DetailCardWithMargin
                    imgUrl={data.imageUrl}
                    title={data.title}
                    description={data.description}
                    user={data.user}
                    side={side}
                    updateDate={data.updateDate}
                    isEnd={data.isEnd}
                />
                <Notice data-type={side}>
                    <NoticeTitle>
                        応募の際の注意
                    </NoticeTitle>
                    <NoticeText>
                        申し込む前に、自治体のボランティアの受け入れ状況を確認してください。詳しくは、全国社会福祉協議会の被災地支援、災害ボランティア情報のページをご覧ください。
                        <NoticeLink href="https://www.saigaivc.com/archives/" target="_blank" rel="noopener">受け入れ状況を確認する</NoticeLink>
                    </NoticeText>
                </Notice>
                <ShareWrapper>
                    <Title>この声をシェアする</Title>
                    <Shares
                        onClickTwitter={(): void => {
                            const intent = createTwitterIntent({
                                url: data.url,
                                text: '',
                                hashtags: '被災地のスケット',
                            })
                            window.open(intent)
                        }}
                        onClickFacebook={(): void => {
                            const intent = createFacebookIntent(data.url)
                            window.open(intent)
                        }}
                    />
                </ShareWrapper>
                {isMyPost && <Applicant users={data?.applicants} side={side} />}
                {user?.uid === data.user?.uid ? (
                    <>
                        <EditButton
                            width={'400px'}
                            height={'80px'}
                            onClick={() => updatePost(data.id, { isEnd: true })}
                        >
                            募集終了する
                        </EditButton>
                        <Link href={{ pathname: '/edit', query: { postId: data.id, side } }}>
                            <EditButton width={'400px'} height={'80px'}>
                                編集する
                            </EditButton>
                        </Link>
                        <DeleteButton
                            styleType={'organization'}
                            width={'400px'}
                            height={'80px'}
                            onClick={() => updatePost(data.id, { isDeleted: true })}
                        >
                            この募集を削除する
                        </DeleteButton>
                    </>
                ) : (
                    data.side !== 'organization' ? <Link href={{ pathname: '/apply', query: { postId: data.id } }}>
                        <ApplyButton width={'400px'} height={'80px'}>
                            応募する
                        </ApplyButton>
                    </Link> : null
                )}
                <BackButton width={'400px'} height={'80px'} styleType="cancel" onClick={(): void => Router.back()}>
                    戻る
                </BackButton>
            </Wrapper>
        )
    }, [data, isMyPost, side, updatePost, user])

    const tabElement = React.useMemo(() => {
        if (side === undefined) {
            return <></>
        }
        return <Tab
            tabSide={side}
            helpContents={postElement}
            supportContents={postElement}
            organizationContents={postElement}
        />
    }, [postElement, side])

    const shouldRedirect = user?.uid !== data?.user.uid
    
    React.useEffect(() => {
        if (user) {
            if (data?.isDeleted && shouldRedirect) {
                Router.push('/')
            }
        }
    }, [data, user])

    if (data?.isDeleted) {
        if (shouldRedirect) {
            return <div></div>
        }
    }

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

const DeleteButton = styled(Button)`
    margin: 0 auto 48px;
`

const BackButton = styled(Button)`
    margin: 0 auto;
`

const ShareWrapper = styled.div`
    width: 600px;
    margin: 0 auto 80px;
    padding: 70px 45px 70px;
    border-radius: 16px;
    background-color: #fff;
    box-sizing: border-box;
`
const Title = styled(ThemeTitle)`
    margin-bottom: 55px;
`

const Notice = styled.div`
    width: 690px;
    border-radius: 16px;
    overflow: hidden;
    box-sizing: border-box;
    margin: 0 auto 40px;
    padding: 48px;
    border: 4px solid;
    border-radius: 16px;
    background: #fff;

    &[data-type='help'] {
        border-color: #00B4ED;
    }
    &[data-type='support'] {
        border-color: #00A968;
    }
    &[data-type='organization'] {
        border-color: #e85625;
    }
`

const NoticeTitle = styled.h3`
    margin-bottom: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #999999;
`

const NoticeText = styled.p`
    font-size: 20px;
    line-height: 36px;
    color: #999999;
`

const NoticeLink = styled.a`
    display: block;
    position: relative;
    margin-top: 8px;
    padding-right: 30px;
    font-size: 20px;
    font-weight: bold;
    text-align: right;
    text-decoration: none;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 12px;
        right: 0;
        width: 12px;
        height: 12px;
        border-top: 2px solid;
        border-right: 2px solid;
        transform: rotate(45deg);
    }

    [data-type='help'] & {
        color: #00B4ED;
    }
    [data-type='support'] & {
        color: #00A968;
    }
    [data-type='organization'] & {
        color: #e85625;
    }
`