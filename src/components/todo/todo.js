import template from 'text!./todo.html'

class viewModel {
    constructor ({todo, handleClick, handleRemove}) {
        this.id = todo.id
        this.text = todo.text
        this.completed = todo.completed
        this.handleClick = handleClick
        this.handleRemove = handleRemove
    }

    onClick = () => this.handleClick(this.id)
    onRemoveClick = () => this.handleRemove(this.id)
}

export default { viewModel, template };
