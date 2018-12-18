import '@babel/polyfill'
import ko from 'knockout'
import page from 'page'
import './style.css'
import './state.js'
import './components/app'

page('*', () => {
  ko.applyBindings({}, document.getElementById('app'))
})

page.start()
