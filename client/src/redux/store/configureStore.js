import {createStore, combineReducers, applyMiddleware} from 'redux'
import userRedcer from '../reducers/user'
import thunk from 'redux-thunk'


const configureStore = () => {
    const state = createStore(combineReducers({
        user: userRedcer
    }),applyMiddleware(thunk))
    return state
}
export default configureStore