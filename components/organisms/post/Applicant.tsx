import * as React from 'react'
import styled from '@emotion/styled'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import { UserType } from 'types/index'
import { Side } from 'reducers/tab'

type Props = {
    users?: UserType[]
    side: Side
}

const Applicant = (props: Props): JSX.Element => {
    const { users, side } = props

    const usersElm = React.useMemo(() => {
        if (!users) return
        return users.reverse().map(user => (
            <UserWrapper key={user.uid} side={side}>
                <User>
                    <Icon src={user.photoURL || '/img/icn_default.png'} alt="" />
                    <UserInfo>
                        <UserName>{user.displayName}</UserName>
                    </UserInfo>
                </User>
                <SnsWrapper>
                    <Twitter
                        data-active={user.providerId === 'twitter.com'}
                        onClick={(): void => {
                            if (user.userName) {
                                window.open(`https://twitter.com/${user.userName}`)
                            }
                        }}
                    />
                    <Facebook
                        data-active={user.providerId === 'facebook.com'}
                        onClick={(): void => {
                            window.open(user.link)
                        }}
                    />
                </SnsWrapper>
            </UserWrapper>
        ))
    }, [side, users])

    return (
        <Wrapper>
            <TitleBox>
                <Title>この募集に応募した人</Title>
                <Lead>
                    頼みたい人に、SNSで
                    <br />
                    直接連絡をとってみましょう。
                </Lead>
            </TitleBox>
            <Users>{users && usersElm}</Users>
        </Wrapper>
    )
}

export default Applicant

const Wrapper = styled.div``

const TitleBox = styled.div`
    width: 600px;
    margin: 60px auto 70px;
    padding: 75px 40px 75px;
    background-color: #fff;
    border-radius: 16px;
    box-sizing: border-box;
    overflow: hidden;
`

const Title = styled(ThemeTitle)`
    margin-bottom: 45px;
`

const Lead = styled.p`
    font-size: 22px;
    line-height: 1.75;
    text-align: center;
`

const Users = styled.div`
    margin-bottom: 120px;
`

const UserWrapper = styled.div<{ side: Side }>`
    display: flex;
    justify-content: space-between;
    width: 690px;
    margin: 0 auto 40px;
    padding: 36px;
    box-sizing: border-box;
    background-color: #fff;
    border: 3px solid ${props => (props.side === 'help' ? '#0091DB' : '#00A968')};
    border-radius: 14px;
    &:last-of-type {
        margin-bottom: 0;
    }
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
`

const SnsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const Twitter = styled.div`
    width: 41px;
    height: 33px;
    background-image: url(/img/svg/icn_twitter_off.svg);
    margin-right: 24px;
    &[data-active='true'] {
        background-image: url(/img/svg/icn_twitter_on.svg);
    }
    cursor: pointer;
`
const Facebook = styled.div`
    width: 41px;
    height: 41px;
    background-image: url(/img/svg/icn_facebook_off.svg);
    &[data-active='true'] {
        background-image: url(/img/svg/icn_facebook_on.svg);
    }
    cursor: pointer;
`
