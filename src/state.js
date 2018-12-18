import ko from 'knockout'
import { setState } from 'knockout-store'

const state = {
  currentTime: ko.observable('')
}

setState(state)
