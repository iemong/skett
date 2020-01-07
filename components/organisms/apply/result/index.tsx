import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Button from 'components/atoms/Button'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import { PostType } from 'types/index'
import Share from 'components/organisms/share'

type Props = {
    post?: PostType
}

const ApplyResult = (props: Props): JSX.Element => {
    const { post } = props

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>応募完了</Title>
                <Lead>
                    募集主があなたの応募に興味を持った場合は、
                    <br />
                    SNSでメッセージが届きます。
                    <br />
                    <br />
                    ※Twitterで応募した場合は、ダイレクトメッセージを受信するために、次の準備をしておきましょう。
                </Lead>
                <Howto>
                    <ol>
                        <ListItem>
                            1.「プライバシーとセキュリティ」で 「すべてのユーザーからダイレクト
                            メッセージを受信する」にチェックを 入れておきます。
                        </ListItem>
                        <ListItem>2.応募した方のアカウントをフォローして おきます。</ListItem>
                    </ol>
                </Howto>

                <Footer>
                    <User>
                        <Icon src={post?.user?.photoURL || '/img/icn_default.png'} alt="" />
                        <UserInfo>
                            <UserName>{post?.user?.displayName}</UserName>
                        </UserInfo>
                    </User>
                </Footer>
            </TitleWrapper>
            <Share url={post?.url || ''} />
            <Link href={'/'}>
                <TopButton styleType="cancel" width={'400px'} height={'80px'}>
                    TOPへ
                </TopButton>
            </Link>
        </Wrapper>
    )
}

export default ApplyResult

const Wrapper = styled.div`
    padding-bottom: 100px;
`

const TitleWrapper = styled.div`
    width: 600px;
    margin: 0 auto 80px;
    padding: 70px 45px 100px;
    border-radius: 16px;
    background-color: #fff;
    box-sizing: border-box;
`

const Title = styled(ThemeTitle)`
    margin-bottom: 55px;
`

const Lead = styled.p`
    margin-bottom: 40px;
    line-height: 1.5;
    text-align: center;
    font-size: 22px;
`

const Howto = styled.div`
    width: 515px;
    height: auto;
    padding: 40px 60px;
    box-sizing: border-box;
    line-height: 1.5;
    word-break: break-all;
    border: 2px solid #f39800;
    border-radius: 16px;
    font-size: 22px;
`

const ListItem = styled.li`
    margin-bottom: 16px;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 30px;
    border-top: 1px solid #fff;
    box-sizing: border-box;
`

const User = styled.div`
    display: flex;
    align-items: center;
`
const Icon = styled.img`
    display: block;
    width: 67px;
    height: 67px;
    margin-right: 24px;
    border-radius: 50%;
`
const UserInfo = styled.div``
const UserName = styled.p`
    font-size: 22px;
    color: #000;
`

const TopButton = styled(Button)`
    margin: 80px auto 0;
`
