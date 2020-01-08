import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from 'components/atoms/Modal'

storiesOf('Atoms/Modal', module).add('Modal', () => (
    <React.Fragment>
        <Modal styleType="default" width={'400px'} height={'400px'}>
            テスト
        </Modal>
    </React.Fragment>
))
