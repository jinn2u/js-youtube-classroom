import { on,qs } from "../helpers.js";
import View from "./View.js";

const tag = "[ModalScrollView]"
export default class ModalScrollView extends View {
  constructor(){
    super(qs(".modal"))
    this.inputElement = qs("[type=text]", this.element) 
    this.bindEvent()
  }
  bindEvent(){
    let timer
    on(this.element,"scroll", ()=> {
      if(timer) clearTimeout(timer)
      timer = setTimeout(()=> {
        this.handleScroll()
      },200)
    })
  }
  handleScroll(){
    const {value} = this.inputElement
    if(value && (this.element.scrollHeight - this.element.clientHeight - this.element.scrollTop ===0)){
      this.emit("@scroll", {value})
    }  
  }
}

