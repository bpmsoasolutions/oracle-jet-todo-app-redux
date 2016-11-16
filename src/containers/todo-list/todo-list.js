import ko from 'knockout'
import {createSelector} from 'reselect'

import {connect} from "../../app/store/index"
import * as actions from "../../app/actions/todo"
import {getTodos, getVisibilityFilter} from '../../app/reducers/index'

import template from 'text!./index.html'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = createSelector(
    getTodos,
    getVisibilityFilter,
    (todos, filter) => ({
        todos: getVisibleTodos(todos, filter)
    })
)

@connect(mapStateToProps, actions)
class viewModel {
    onInit(){}

    dispose(){
        console.log('Leaving Home...')
    }

    handleTodoClick = this.toggleTodo
    handleTodoRemove = this.deleteTodo
}

export default { viewModel, template }