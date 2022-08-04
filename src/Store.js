import {createStore, combineReducers,applyMiddleware} from 'redux'
import reducer from './Reducers/HomeReducer'
import playersListReducer from './Reducers/PlayersListReducer'
import thunkMiddleware from 'redux-thunk'



const rootReducer = combineReducers({
    teams:reducer,
    playersList:playersListReducer
})

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))



export default store

