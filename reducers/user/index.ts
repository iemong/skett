import * as firebase from 'firebase/app'
import { Action } from 'reducers/user/actions'
import { INITIALIZE } from 'reducers/user/types'

export type State = firebase.User | null

const initialState: State = null

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
