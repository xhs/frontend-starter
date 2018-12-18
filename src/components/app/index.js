import ko from 'knockout'
import viewModel from './vm.js'
import template from './template.html'

ko.components.register('app', { viewModel, template })
