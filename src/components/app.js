import ko from 'knockout'
import { connect } from 'knockout-store'
import format from 'date-fns/format'
import appTemplate from '../templates/app.html'

class AppViewModel {
  constructor(params) {
    const self = this

    self.currentTime = params.currentTime
    self.message = ko.computed(() => {
      return `Now is ${self.currentTime()}`
    })

    self.updateTime = () => {
      self.currentTime(format(new Date(), 'HH:mm:ss'))
    }

    self.updateTime()
    setInterval(self.updateTime, 1000)
  }
}

function mapStateToParams({ currentTime }) {
  return { currentTime }
}

ko.components.register('app', {
  viewModel: connect(mapStateToParams)(AppViewModel),
  template: appTemplate
})
