import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import rootReducer from 'reducers'

export default (initialState = {}) => {
    const middlewares: (ThunkMiddleware | Middleware)[] = [thunkMiddleware]

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(loggerMiddleware)
    }

    return createStore(
        combineReducers({
            rootReducer,
        }),
        initialState,
        applyMiddleware(...middlewares),
    )
}
