export class PopUpInfo extends HTMLElement {
  constructor() {
    super()
    // shadow root
    this.attachShadow({ mode: 'open' })

    // create nested span element
    const wrapper = document.createElement('span')
    wrapper.setAttribute('class', 'wrapper')
    const icon = wrapper.appendChild(document.createElement('span'))
    icon.setAttribute('class', 'icon')
    icon.setAttribute('tabindex', 0)

    // insert icon
    const img = icon.appendChild(document.createElement('img'))
    img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'img/icon.png';

    const info = wrapper.appendChild(document.createElement('span'))
    info.setAttribute('class', 'info')

    // take attribute content and put inside info span
    info.textContent = this.getAttribute('data-text')

    const linkElem = document.createElement('link')
    linkElem.setAttribute('rel', 'stylesheet')
    linkElem.setAttribute('href', 'pop-up-info/pop-up-info.css')
    this.shadowRoot.appendChild(linkElem)
    /// create css for shadow dom
    // const style = document.createElement('style')
    // style.textContent = '.wrapper {}'
    this.shadowRoot.append( wrapper)
  }
}
customElements.define('popup-info', PopUpInfo);