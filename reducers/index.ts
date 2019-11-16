import { combineReducers } from 'redux'
import user, { State as UserState } from 'reducers/user'

export interface State {
    rootReducer: {
        user: UserState
    }
}

export default combineReducers({
    user,
})
