import { ThunkAction } from 'redux-thunk'
import { Side, State } from 'reducers/tab/index'
import { UPDATE } from 'reducers/tab/types'

type Update = {
    type: typeof UPDATE
    payload: {
        side: Side
    }
}

export type Action = Update

export const update = (side: Side): ThunkAction<Promise<void>, State, undefined, Update> => {
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
