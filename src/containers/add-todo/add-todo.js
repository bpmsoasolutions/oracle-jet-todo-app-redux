import ko from 'knockout'

import {connect} from "../../app/store/index"
import * as actions from "../../app/actions/todo"

import template from 'text!./add-todo.html'

@connect(null, actions)
class viewModel {
    onInit(){}
    dispose(){}

    addTodo = this.addTodo
}

export default { viewModel, template }