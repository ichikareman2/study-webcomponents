export class WordCount extends HTMLParagraphElement {
  constructor() {
    super()
  }
}
customElements.define('word-count', WordCount, { extends: 'p' })