import template from 'text!./add.html'
import ko from 'knockout'

class viewModel {
    constructor ({handleAdd}) {
        this.text = ko.observable('')
        this.handleAdd = handleAdd
    }

    handleAddTodo = () => {
        let value = this.text().trim()
        if (value !== ''){
            this.handleAdd(value)
            this.text('')
        }
    }
}

export default { viewModel, template };
