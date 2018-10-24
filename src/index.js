import '@babel/polyfill'
import ko from 'knockout'
import './style.css'
import './components/app.js'

class DummyIndexViewModel {
}

ko.applyBindings(new DummyIndexViewModel(), document.getElementById('app'))
