import { ThunkAction } from 'redux-thunk'
import { State } from 'reducers/tab/index'
import { UPDATE } from 'reducers/tab/types'

type Update = {
    type: typeof UPDATE
    payload: {
        side: 'help' | 'support'
    }
}

export type Action = Update

export const initialize = (side: 'help' | 'support'): ThunkAction<Promise<void>, State, undefined, Update> => {
    return async (dispatch): Promise<void> => {
        try {
            dispatch({
                type: UPDATE,
                payload: {
                    side,
                },
            })
        } catch (e) {
            console.error(e)
        }
    }
}
