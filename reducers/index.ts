import { combineReducers } from 'redux'
import user, { State as UserState } from 'reducers/user'
import tab, { State as TabState } from 'reducers/tab'

export interface State {
    rootReducer: {
        user: UserState
        tab: TabState
    }
}

export default combineReducers({
    user,
    tab,
})
