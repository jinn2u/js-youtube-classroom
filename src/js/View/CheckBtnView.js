import { qs, qsAll} from "../helpers.js";
import View from "./View.js"
export default class CheckBtnView extends View {
  constructor(){
    super(qs("body"))

    this.bindEvents()
  }
  bindEvents(){
    this.on("click", (event) => {
      let saveBtns = qsAll(".js-watched-button")
      let deleteBtns = qsAll(".js-delete-button")
      let likeBtns = qsAll(".js-liked-button")
      if ([...saveBtns].includes(event.target)) {
        this.emit("@watch", {value: [event.target, qs(".btn.bg-cyan-100.mx-1")]})
      } else if ([...deleteBtns].includes(event.target)){
        const del = confirm("해당 영상을 삭제하시겠습니까?")
        if(del){
          this.emit("@del", {value: [qs(".js-watched-button",event.target.parentNode).dataset.videoTitle, qs(".btn.bg-cyan-100.mx-1")]})
        }
      }
      else if([...likeBtns].includes(event.target)){
        this.emit("@like", {value: [qs(".js-watched-button",event.target.parentNode).dataset.videoTitle, qs(".btn.bg-cyan-100.mx-1")]})
      }
    })
  }
}
