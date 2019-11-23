import { connectRouter, routerMiddleware } from 'connected-react-router'
import { History } from 'history'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'

export default (history: History) => {
    const middlewares = [thunkMiddleware, routerMiddleware(history)]

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(loggerMiddleware)
    }

    return createStore(
        combineReducers({
            rootReducer,
            router: connectRouter(history),
        }),
        applyMiddleware(...middlewares),
    )
}
