import ko from 'knockout'
import { connect } from 'knockout-store'
import format from 'date-fns/format'

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

export default connect(mapStateToParams)(AppViewModel)
