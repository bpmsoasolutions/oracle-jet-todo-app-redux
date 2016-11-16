import { ADD_TODO,SET_VISIBILITY_FILTER,TOGGLE_TODO,DELETE_TODO } from '../constants/todo'

let nextTodoId = 0
const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export default {
    addTodo,
    deleteTodo,
    setVisibilityFilter,
    toggleTodo
}