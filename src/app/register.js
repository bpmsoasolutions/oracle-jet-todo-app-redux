import ko from 'knockout';

ko.components.register('router', { require: 'containers/router/router' })
ko.components.register('bss-nav-bar', { require: 'containers/nav-bar/nav-bar' })

ko.components.register('main-structure', { require: 'components/main-structure/main-structure' })
ko.components.register('default', { require: 'components/default/default' })

ko.components.register('add-todo', { require: 'containers/add-todo/add-todo' })
ko.components.register('todo-list', { require: 'containers/todo-list/todo-list' })
ko.components.register('filters', { require: 'containers/filter-list/filter-list' })

ko.components.register('filter', { require: 'components/filter/filter' })
ko.components.register('todo', { require: 'components/todo/todo' })
ko.components.register('add', { require: 'components/add/add' })