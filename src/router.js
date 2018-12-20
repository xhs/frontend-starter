import ko from 'knockout'
import page from 'page'
import uuid from 'uuid/v4'

export default {
  route: (pattern, component) => {
    const name = component.name || uuid()
    const script = document.createElement('script')
    script.id = name
    script.type = 'text/html'
    script.innerHTML = component.template
    document.getElementsByTagName('html')[0].appendChild(script)
  
    page(pattern, (ctx, next) => {
      ko.renderTemplate(name, new component.viewModel({ ctx, next }), {}, document.body, 'replaceChildren')
    })
  },
  start: () => page.start()
}
