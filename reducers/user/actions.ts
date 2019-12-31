import { ThunkAction } from 'redux-thunk'
import * as firebase from 'firebase/app'
import { State } from 'reducers/user/index'
import { INITIALIZE } from 'reducers/user/types'

type Initialize = {
    type: typeof INITIALIZE
    payload: {
        user: firebase.User
    }
}

export type Action = Initialize

export const initialize = (user: firebase.User): ThunkAction<Promise<void>, State, undefined, Initialize> => {
    return async (dispatch): Promise<void> => {
        try {
            dispatch({
                type: INITIALIZE,
                payload: {
                    user,
                },
            })
        } catch (e) {
            console.error(e)
        }
    }
}
