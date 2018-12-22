import ko from 'knockout'
import page from 'page'
import uuid from 'uuid/v4'

export default {
  route: (pattern, component, element=null) => {
    const target = element || document.body
    const name = component.name || uuid()
    const script = document.createElement('script')
    script.id = name
    script.type = 'text/html'
    script.innerHTML = component.template
    document.getElementsByTagName('html')[0].appendChild(script)
  
    page(pattern, (ctx, next) => {
      ko.renderTemplate(name, new component.viewModel({ ctx, next }), {}, target, 'replaceChildren')
    })
  },
  start: () => page.start(),
  go: (path) => page(path)
}
