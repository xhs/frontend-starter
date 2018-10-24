import ko from 'knockout'
import format from 'date-fns/format'
import appTemplate from '../templates/app.html'

class AppViewModel {
  constructor() {
    const self = this

    self.currentTime = ko.observable('')
    self.message = ko.computed(() => {
      return `Now is ${self.currentTime()}`
    })

    self.updateTime = () => {
      self.currentTime(format(new Date(), 'HH:mm:ss'))
    }

    self.initialize = async function (_params) {
      self.updateTime()
      setInterval(self.updateTime, 1000)
    }
    self.initialize()
  }
}

ko.components.register('app', {
  viewModel: AppViewModel,
  template: appTemplate
})
