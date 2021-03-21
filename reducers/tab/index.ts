import { Action } from 'reducers/tab/actions'
import { UPDATE } from 'reducers/tab/types'

export　type Side = 'help' | 'support' | 'organization'

export type State = {
    side: Side
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
