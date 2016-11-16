import { combineReducers } from 'redux'

import { routerReducer } from './router'


import todos from './todos'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    router: routerReducer
})

export default rootReducer

export const getRouter = (state)=>state.router

export const getTodos = (state) => state.todos
export const getVisibilityFilter = (state) => state.visibilityFilter