import '@babel/polyfill'
import ko from 'knockout'
import page from 'page'
import './style.css'
import './state.js'
import './components/app.js'

class DummyIndexViewModel {
}

page('*', () => {
  ko.applyBindings(new DummyIndexViewModel(), document.getElementById('app'))
})

page.start()
