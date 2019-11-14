import { Action } from '@reducers/user/actions'
import { INITIALIZE } from '@reducers/user/types'

export type State = {
    id: string
    name: string
}

const initialState: State = {
    id: '',
    name: '',
}

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case INITIALIZE: {
            const { user } = action.payload
            return {
                ...state,
                id: user.id,
                name: user.name,
            }
        }
        default:
            return state
    }
}
