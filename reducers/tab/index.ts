import { Action } from 'reducers/tab/actions'
import { UPDATE } from 'reducers/tab/types'

export type State = {
    side: 'help' | 'support'
}

const initialState: State = {
    side: 'help',
}

const tabReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case UPDATE: {
            const { side } = action.payload
            return {
                ...state,
                side,
            }
        }
        default:
            return state
    }
}

export default tabReducer
