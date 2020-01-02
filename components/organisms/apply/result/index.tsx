import * as React from 'react'
import styled from '@emotion/styled'
import { DateTime } from 'luxon'
import Link from 'next/link'
import Login from 'components/organisms/login'

const ApplyResult = (): JSX.Element => {
    const userId = 1
    const updateDate = 'hoge'
    const handleCheck = (value: boolean): void => {
        console.log('check', value)
    }

    return (
        <div>
            <TitleWrapper>
                <Title>作成完了</Title>
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
                        <Icon src={'/img/icn_default.png'} alt="" />
                        <UserInfo>
                            <UserName>{userId}</UserName>
                            <UpdateDate>{DateTime.fromISO(updateDate).toFormat('yyyy/MM/dd HH:mm:ss')}</UpdateDate>
                        </UserInfo>
                    </User>
                    <SnsWrapper>
                        <Twitter />
                        <Facebook />
                    </SnsWrapper>
                </Footer>
            </TitleWrapper>
            <Login
                title={'この応募をシェアする'}
                onChangeCheck={handleCheck}
                alternativeText={'SNSであたなの募集をシェアしよう。'}
                hasCheck={false}
            />
            <Link href={'/'}>
                <TopButton>TOPへ</TopButton>
            </Link>
        </div>
    )
}

export default ApplyResult

const TitleWrapper = styled.div`
    width: 600px;
    margin: 0 auto 80px;
    padding: 70px 45px 100px;
    border-radius: 16px;
    background-color: #fff;
    box-sizing: border-box;
`

const Title = styled.h1`
    position: relative;
    margin-bottom: 55px;
    padding-bottom: 33px;
    font-size: 38px;
    text-align: center;
    color: #000;
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100px;
        height: 5px;
        background-image: linear-gradient(to left, #00b4ed, #0091db);
        transform: translateX(-50%);
    }
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
`
const UserInfo = styled.div``
const UserName = styled.p`
    font-size: 22px;
    color: #fff;
`

const UpdateDate = styled.time`
    display: block;
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
`
const SnsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const Twitter = styled.div`
    width: 41px;
    height: 33px;
    background-image: url(/img/icn_twitter.png);
    margin-right: 24px;
`
const Facebook = styled.div`
    width: 41px;
    height: 41px;
    background-image: url(/img/icn_facebook.png);
`

const ApplyButton = styled.button`
    display: block;
    margin: 80px auto 50px;
    width: 400px;
    height: 80px;
    background-image: url(/img/btn_apply_help.png);
    color: transparent;
`

const TopButton = styled.button`
    display: block;
    width: 400px;
    height: 80px;
    margin: 0 auto;
    background-image: url(/img/btn_top.png);
    color: transparent;
`
