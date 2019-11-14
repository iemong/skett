import * as React from 'react'
import styled from '@emotion/styled'
import Main from '@components/templates/layouts/Main'

const Home = () => {
    return (
        <Main>
            <Title>This is Post Page</Title>
        </Main>
    )
}

export default Home

const Title = styled.h1`
    font-size: 20px;
    color: red;
`
