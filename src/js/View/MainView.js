import { qs, on } from "../helpers.js"
import View from "./View.js"
import toWatchView from "./ToWatchView.js"

const tag = "[MainView]"

export default class MainView extends View {
  constructor() {
    super(qs("body"))
    this.searchButton = qs("#search-button")
    this.modalClose = qs(".modal-close")
    this.modal = qs(".modal")
    this.toWatchView = toWatchView
    this.bindEvents()
    this.render()
  }
  bindEvents() {
    on(this.searchButton, "click", () => this.onModalShow());
    on(this.modalClose, "click", () => this.onModalClose());
    on(this.modal, "submit", (event) => { event.preventDefault() })
    on(this.modal, 'click', (event) => {
      if (event.target === this.modal)
        return this.onModalClose()
    })
  }
  onModalShow() {
    this.modal.classList.add("open")
  }
  onModalClose() {
    this.modal.classList.remove("open")
    this.toWatchView.render()
  }
  render(){
    this.toWatchView.render()
  }
}
