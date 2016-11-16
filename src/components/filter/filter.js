import template from 'text!./filter.html'

class viewModel {
    constructor ({text, name, handleClick}) {
        this.text = text
        this.name = name
        this.code = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(0,9)
        this.handleClick = handleClick
    }

    selectFilter = () => this.handleClick(this.name)
}

export default { viewModel, template };
