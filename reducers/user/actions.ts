import { ThunkAction } from 'redux-thunk'
import { State } from '@reducers/user/index'
import { INITIALIZE } from '@reducers/user/types'

type User = string

type Initialize = {
    type: typeof INITIALIZE
    payload: {
        user: User
    }
}

export type Action = Initialize

export const initialize = (): ThunkAction<Promise<void>, State, undefined, Initialize> => {
    return async dispatch => {
        try {
            // TODO Firebaseから取ってくる
            const userData = 'userData'
            dispatch({
                type: INITIALIZE,
                payload: {
                    user: userData,
                },
            })
        } catch (e) {
            console.error(e)
        }
    }
}
