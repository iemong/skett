import { applyMiddleware, combineReducers, createStore } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'

export default (initialState = {}) => {
    const middlewares = [thunkMiddleware, loggerMiddleware]

    return createStore(
        combineReducers({
            rootReducer,
        }),
        initialState,
        applyMiddleware(...middlewares),
    )
}
