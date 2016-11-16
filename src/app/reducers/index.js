import { combineReducers } from 'redux'

import { routerReducer } from './router'

const rootReducer = combineReducers({
    router: routerReducer
})

export default rootReducer

//Router Seletor
export const getRouter = (state)=>state.router

// This are the place that knows where the specific reducers are conected in your global state
