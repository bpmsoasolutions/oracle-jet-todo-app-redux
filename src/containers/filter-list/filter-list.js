import ko from 'knockout'
import {createSelector} from 'reselect'

import {connect} from "../../app/store/index"
import * as actions from "../../app/actions/todo"
import {getVisibilityFilter} from '../../app/reducers/index'

import template from 'text!./filter-list.html'

import 'ojs/ojradioset'

const mapStateToProps = createSelector(
    getVisibilityFilter,
    (filter) => ({
        filter
    })
)

@connect(mapStateToProps, actions)
class viewModel {
    onInit(){}

    dispose(){
        console.log('Leaving Home...')
    }

    active = (filterName) => this.filter() === filterName
    onFilterClick = (filter) => (this.filter() !== filter) ? this.setVisibilityFilter(filter) : null
}

export default { viewModel, template }