import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../constants/todo'

const todo = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case DELETE_TODO:
            return state.filter(t =>
                t.id !== action.id
            )
        case TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            )
        default:
            return state
    }
}

export default todos