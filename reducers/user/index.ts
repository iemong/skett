import { Action } from 'reducers/user/actions'
import { INITIALIZE } from 'reducers/user/types'
import { UserType } from 'types/index'

export type State = UserType

const initialState: State = {
    displayName: '',
    email: '',
    url: '',
    uid: '',
}

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case INITIALIZE: {
            const { user } = action.payload
            return {
                ...state,
                ...user,
            }
        }
        default:
            return state
    }
}
