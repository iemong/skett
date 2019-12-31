import * as React from 'react'
import styled from '@emotion/styled'
import Main from 'components/templates/layouts/Main'
import ApplyResult from 'components/organisms/apply/result'
import Tab from 'components/organisms/tab'

const Apply = (): JSX.Element => {
    // TODO ログインしてるかどうかの判定をする

    return (
        <Main>
            <Tab
                leftContent={
                    <Wrapper>
                        <ApplyResult />
                    </Wrapper>
                }
            />
        </Main>
    )
}

export default Apply

const Wrapper = styled.div`
    margin-top: 60px;
`
