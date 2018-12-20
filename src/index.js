import '@babel/polyfill'
import './style.css'
import './state.js'
import router from './router.js'
import app from './components/app'

router.route('*', app)
router.start()
