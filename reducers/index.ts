import user, { State as UserState } from '@reducers/user'
import { combineReducers } from 'redux'

export interface State {
    rootReducer: {
        user: UserState
    }
}

export default combineReducers({
    user,
})
