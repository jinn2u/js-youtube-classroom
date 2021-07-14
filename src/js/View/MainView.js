import { qs, on } from "../helpers.js";
import View from "./View.js"
export default class MainView extends View{
  constructor(){
    super(qs("body"))
    this.searchButton = qs("#search-button");
    this.modalClose = qs(".modal-close");
    this.modal = qs(".modal");
    this.bindEvents()
  }
  bindEvents(){
    on(this.searchButton,"click", ()=>this.onModalShow());
    on(this.modalClose,"click", ()=>this.onModalClose());
    on(this.modal, "submit", (event)=>{event.preventDefault()})
    on(this.modal, 'click', (event)=> {
      console.log(this.event === this.modal)
      if(event.target === this.modal)
        return this.onModalClose()
    })
  }
  onModalShow() {
    this.modal.classList.add("open");
  }
  onModalClose() {
    this.modal.classList.remove("open");
  }
}