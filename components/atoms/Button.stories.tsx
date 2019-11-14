import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '@components/atoms/Button'

storiesOf('Atoms/Button', module).add('Button', () => (
    <React.Fragment>
        <Button styleType="default">default</Button>
        <Button styleType="twitter">twitter</Button>
        <Button styleType="facebook">facebook</Button>
        <Button styleType="cancel">cancel</Button>
    </React.Fragment>
))
