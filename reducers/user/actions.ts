import { ThunkAction } from 'redux-thunk'
import { State } from 'reducers/user/index'
import { INITIALIZE } from 'reducers/user/types'
import { UserType } from 'types/index'

type Initialize = {
    type: typeof INITIALIZE
    payload: {
        user: UserType
    }
}

export type Action = Initialize

export const initialize = (user: UserType): ThunkAction<Promise<void>, State, undefined, Initialize> => {
    return async dispatch => {
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
